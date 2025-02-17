// Here you use the clerk sign in component
// You can redirect to the username route page to complete the profile A
import { SignIn } from "@clerk/nextjs";

export default async function SignInPage (){

    return (
        <>
            <div className="flex justify-center m-4">
            <SignIn 
            forceRedirectUrl={`/user/username`}/>
            </div>
        </>
    )
}