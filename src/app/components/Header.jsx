import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
    RedirectToSignIn
} from '@clerk/nextjs'
import Link from 'next/link'

import { auth } from '@clerk/nextjs/server'
// ^ auth object has info about authentication including userID

export default async function Header(){
    // we have extracted userID from auth
    const {userId} = await auth();
    console.log(userId)
    return (
        <>
            <div className="flex justify-evenly items-center bg-slate-50 text-black p-1">
            <Link href="/">Home</Link>
            <SignedOut>
                <SignInButton />
                <SignUpButton/>
                
            </SignedOut>
            <SignedIn>
                <p>Welcome: {userId}</p>
                {console.log(userId)}
                <UserButton />
            </SignedIn>
            </div>
        
        </>
    )
}