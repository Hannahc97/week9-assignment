// Your user should only be able to access this page once they have been redirected from the sign-up part 

// We need a form so the user can enter their user profile data!
// Maybe you will make some of your form required, or keeping the submitted data valid. 

// We need a SQL query to insert that data into a table (preferrably the users table)

// Think about what you would expect to happen next as a user! 
// Maybe you get shown your completed profile page and there is a link that takes you to the "view all posts" page?
// Maybe you get redirected automaically to that app. 

import { db } from "@/utils/dbConnection"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import { currentUser } from '@clerk/nextjs/server'
import RadixLabel from "../components/RadixComponent"

export default async function CreateProfilePage(){

    const user = await currentUser();
    // Gets their username from clerk
    const username = user.username

    // This is to show the username already prefilled in the form if they signed in with github etc.
    await db.query(`SELECT FROM users WHERE username = $1`, [username])

    // getting their user id 
    const {userId} = await auth(); 

    //getting their email from clerk
    const email =  user.emailAddresses[0].emailAddress 

    async function handleSubmit(formValues){
        "use server"
        const formData = {
            username: formValues.get("username"),
            firstName: formValues.get("first_name"),
            lastName: formValues.get("last_name"),
            age: formValues.get("age"),
            location: formValues.get("location")
        }

        // Then rest of the data they submitted is inserted to the db
        db.query(`
            INSERT INTO users(
            clerk_id, username, first_name, last_name, email, age, location) 
            VALUES($1, $2, $3, $4, $5, $6, $7)`, 
            [userId, formData.username, formData.firstName, formData.lastName, email, formData.age, formData.location])
        
        revalidatePath(`/user/${username}`)
        redirect(`/user/${username}`)
    }

    return (
        <>
            <div className="m-6 p-2 flex flex-col items-center">
                <div className="text-center text-2xl">
                    <h1>Create your profile</h1>
                </div>
                <div className="w-full max-w-xs">
                    <form action={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        {/* <RadixLabel htmlFor="username">Username:</RadixLabel> */}
                    <label htmlFor="username">Username: </label>
                        <br/>
                        <input
                            className="w-full h-10 p-2"
                            type="text"
                            name="username"
                            required
                            placeholder="Create a username"
                            defaultValue={username}/>
                        <br/>

                        <label htmlFor="first_name">First Name: </label>
                        <br/>
                        <input
                            className="w-full h-10 p-2"
                            type="text"
                            name="first_name"
                            required
                            placeholder="Enter your first name"/>
                        <br/>

                        <label htmlFor="last_name">Last Name: </label>
                        <br/>
                        <input
                            className="w-full h-10 p-2"
                            type="text"
                            name="last_name"
                            required
                            placeholder="Enter your last name"/>
                        <br/>

                        <label htmlFor="age">Age: </label>
                        <br/>
                        <input
                            className="w-full h-10 p-2"
                            type="number"
                            name="age"
                            min={12}
                            max={100}
                            required
                            placeholder="Age"/>
                        <br/>

                        <label htmlFor="location">Location: </label>
                        <br/>
                        <input
                            className="w-full h-10 p-2"
                            type="text"
                            name="location"
                            required
                            placeholder="Enter your location"/>
                        <br/>

                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">Submit!</button>
                    </form>
                </div>
            </div>
        </>
    )
}