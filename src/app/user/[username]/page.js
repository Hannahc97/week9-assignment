// To set up a profile page that renders the data that we can get from Clerk:
// auth() from this we can access the userID 
// currentUser()from this thing we can access the username, email address, etc...
// Some of the data is coming through from Clerk that was captured during sign-up 

export default async function UserPage(){
    const user = await currentUser();
    // console.log everything out of user 
    return (
        <>
            <h1>User Page</h1>
            {/* optional chaining covers the situation that our user might not provide all the data we are expecting to be given  */}
            {/* it's adding the question mark in front of user */}
            {/* if a value is NULL or undefined and optional chaining isn't used then your app will crash  */}
            <p>Welcome {user?.firstname}</p>
        </>
    )
}