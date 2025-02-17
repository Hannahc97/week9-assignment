// Here you use the clerk sign up component
// You can redirect to the createProfile route page to complete the profile A
import { SignUp } from "@clerk/nextjs";

export default function SignInPage (){
    return (
        <>
            <div className="flex justify-center m-4">
            <SignUp forceRedirectUrl='/createProfile'/>
            </div>
            
        </>
    )
}
