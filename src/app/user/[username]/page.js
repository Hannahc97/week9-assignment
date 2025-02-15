// To set up a profile page that renders the data that we can get from Clerk:
// auth() from this we can access the userID 
// currentUser()from this thing we can access the username, email address, etc...
// Some of the data is coming through from Clerk that was captured during sign-up 

import { auth } from '@clerk/nextjs/server'
import { currentUser } from '@clerk/nextjs/server'

export default async function UserPage(){
    const { userId } = await auth() 

    const user = await currentUser();
    const username = user.username
    

    const email = user.emailAddresses
    console.log(email)

    // console.log everything out of user 
    return (
        <>
            <h1>User Page</h1>
            <h2>Welcome : {username}</h2>
            <p>Welcome: {user?.username ?? "User"}</p>
            {console.log(username)}
            {email.map((item) => (
                <div key={item.id}>
                    <h2>Email: {item.emailAddress}</h2>
                </div>
            ))}
            {/* optional chaining covers the situation that our user might not provide all the data we are expecting to be given  */}
            {/* it's adding the question mark in front of user */}
            {/* if a value is NULL or undefined and optional chaining isn't used then your app will crash  */}
            
            
        </>
    )
}