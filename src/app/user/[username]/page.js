// To set up a profile page that renders the data that we can get from Clerk:
// auth() from this we can access the userID 
// currentUser()from this thing we can access the username, email address, etc...
// Some of the data is coming through from Clerk that was captured during sign-up 

import { db } from '@/utils/dbConnection';
import { auth } from '@clerk/nextjs/server'
import { currentUser } from '@clerk/nextjs/server'

export default async function UserPage({params}){

    const { userId } = await auth() 
    const user = await currentUser();
    console.log(user)
    // const username = user.username
    const email = user.emailAddresses[0].emailAddress
    console.log(email)


    const userParams = await params
    console.log(userParams)
    console.log(userParams.username)

    const myUser = await db.query(`SELECT * FROM users WHERE username = $1`, [userParams.username])
    console.log(myUser)
    const wrangleduser = myUser.rows
    console.log(wrangleduser)

    // console.log everything out of user 
    return (
        <>
            <h1>My Profile</h1>
            {wrangleduser.map((item)=> (
                <div key={item.clerk_id}>
                    <h1>First name: {item.first_name}</h1>
                    <h1>Last name: {item.last_name}</h1>
                    <h1>Username: {item.username}</h1>
                    <h1>Email: {item.email}</h1>
                    <h1>Age: {item.age}</h1>
                    <h1>Location: {item.location}</h1>
                </div>
            ))}

            {/* <p>Welcome: {user?.username ?? "User"}</p>
            {console.log(username)}
            {email.map((item) => (
                <div key={item.id}>
                    <h2>Email: {item.emailAddress}</h2>
                </div>
            ))} */}
            {/* optional chaining covers the situation that our user might not provide all the data we are expecting to be given  */}
            {/* it's adding the question mark in front of user */}
            {/* if a value is NULL or undefined and optional chaining isn't used then your app will crash  */}
            
            
        </>
    )
}