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

export default async function CreateProfilePage(){

    const user = await currentUser();
    const username = user.username

    // This is to show the username already prefilled in the form if they signed in with github etc.
    await db.query(`SELECT FROM users WHERE username = $1`, [username])

    async function handleSubmit(formValues){
        "use server"
        const formData = {
            username: formValues.get("username"),
            firstName: formValues.get("first_name"),
            lastName: formValues.get("last_name"),
            age: formValues.get("age"),
            location: formValues.get("location")
        }

        const {userId} = await auth(); // getting their user id 

        const user = await currentUser();
        const username = user.username //getting their username
        console.log(username)

        const email =  user.emailAddresses[0].emailAddress //getting their email 
        console.log(email)

        const inputUsername = await db.query(`SELECT FROM users WHERE username = $1`, [username])
        // when they submit it get's their username from db



        // Then rest of the data they submitted is inserted 
        db.query(`
            INSERT INTO users(clerk_id, username, first_name, last_name, email, age, location) VALUES($1, $2, $3, $4, $5, $6, $7)`, 
            [userId, formData.username, formData.firstName, formData.lastName, email, formData.age, formData.location])

            if (inputUsername.length > 0){
                console.log("username exists")
            } // if that username already exists (so based on length) it will log it exists 
            else {
                console.log("username doesn't exist")
            }
        
        revalidatePath('/user/${username}')
        redirect('/user/${username}')
    }

    return (
        <>
            <h1>Create your profile</h1>
            <br/>
            <form action={handleSubmit}>
            <label htmlFor="username">Username: </label>
                <br/>
                <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    placeholder="Create a username"
                    defaultValue={username}/>
                <br/>

                <label htmlFor="first_name">First Name: </label>
                <br/>
                <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    required
                    placeholder="Enter your first name"/>
                <br/>

                <label htmlFor="last_name">Last Name: </label>
                <br/>
                <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    required
                    placeholder="Enter your last name"/>
                <br/>

                <label htmlFor="age">Age: </label>
                <br/>
                <input
                    type="number"
                    name="age"
                    id="age"
                    min={12}
                    max={100}
                    required
                    placeholder="Age"/>
                <br/>

                <label htmlFor="location">Location: </label>
                <br/>
                <input
                    type="text"
                    name="location"
                    id="location"
                    required
                    placeholder="Enter your location"/>
                <br/>

                <button 
                    className="border-2 border-black"
                    type="submit">Submit!</button>
            </form>
        </>
    )
}