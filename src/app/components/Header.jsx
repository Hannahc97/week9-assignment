import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
    RedirectToSignIn
} from '@clerk/nextjs'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server';

import { auth } from '@clerk/nextjs/server'
// ^ auth object has info about authentication including userID

export default async function Header(){
    // we have extracted userID from auth
    const {userId} = await auth();
    console.log(await auth())
    console.log(userId)

    const user = await currentUser();
    const username = user?.username
    return (
        <>
            <div className = "w-full h-20 shadow-xl bg-white" >
                <div className="flex justify-between items-center h-full w-full px-4">
                    <div className="title-container">
                        <Link className="text-xl hover:border-b-4" href="/">Postopia</Link>
                    </div>
                    <div>
                        <ul className="flex flex-wrap">
                        <SignedOut>
                            <SignInButton />
                            <SignUpButton/>
                        </SignedOut>
                        <SignedIn>
                            <Link href="/createProfile">
                            <li className="ml-10 text-lg hover:border-b-4">Create Profile</li>
                            </Link>
                            
                            <Link href="/createPosts"
                            className="ml-10 text-lg hover:border-b-4"><li>Create A Post</li>
                            </Link>

                            <Link href={`/user/${username}`} 
                            className="ml-10 text-lg hover:border-b-4"><li>My Profile</li>
                            </Link>
                            <li className="ml-10 text-lg"><p>Welcome: {username}</p></li>
                            <li className="ml-10 text-lg hover:border-b-4"><UserButton showName/></li>
                        </SignedIn>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}