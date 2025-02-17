// To set up a profile page that renders the data that we can get from Clerk:
// auth() from this we can access the userID 
// currentUser()from this thing we can access the username, email address, etc...
// Some of the data is coming through from Clerk that was captured during sign-up 

import { db } from '@/utils/dbConnection';
import { auth } from '@clerk/nextjs/server'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache';


export default async function UserPage({params}){


    const { userId } = await auth();
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

    const myComments = await db.query (`
        SELECT posts.id, posts.post_title, posts.content FROM users
        JOIN posts ON posts.clerk_id = users.clerk_id WHERE users.clerk_id = 
        $1`, [userId])
    console.log(myComments)

    const wrangledMyComments = myComments.rows

    // revalidatePath(`/user/${username}`);


    // console.log everything out of user 
    return (
        <>
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <div className='flex flex-col border-pink-500 border-solid border-2 m-4 p-2 bg-pink-400 rounded-lg'>
                <div className='text-2xl'>            
                    <h1>My Profile</h1>
                </div>
            
            <div className=''>
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
            </div>
            {/* optional chaining covers the situation that our user might not provide all the data we are expecting to be given  */}
            {/* it's adding the question mark in front of user */}
            {/* if a value is NULL or undefined and optional chaining isn't used then your app will crash  */}
            </div>

            <div>
                <div className='text-2xl m-4'> 
                    <h1>My posts</h1>
                </div>
            <div className="grid mt-6 grid-cols-1 gap-3 m-2">
                {wrangledMyComments.map((comment)=>(
                    <div className="flex flex-col justify-between rounded-lg bg-white p-4 shadow-lg" key={comment.id}>
                        <h1 className=" text-2xl">{comment.post_title}</h1>
                        <p className='text-gray-500'>{comment.content}</p>
                        <br/>
                    </div>
                ))}
            </div>
            </div>
        </div>
        </>
    )
}