// Your user should only be able to access this page once they have been redirected from the sign-up part 

// We need a form so the user can enter their user profile data!
// Maybe you will make some of your form required, or keeping the submitted data valid. 

// We need a SQL query to insert that data into a table (preferrably the users table)

// Think about what you would expect to happen next as a user! 
// Maybe you get shown your completed profile page and there is a link that takes you to the "view all posts" page?
// Maybe you get redirected automaically to that app. 

export default function CreateProfilePage(){

    async function handleSubmit(){
        
    }

    return (
        <>
            <h1>Create your profile</h1>
            <form>
                <label htmlFor="username">Username: </label>
                <br/>
                <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    placeholder="Create a username"/>
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