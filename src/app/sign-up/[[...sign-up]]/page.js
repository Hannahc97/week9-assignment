// Here you use the clerk sign up component
// You can redirect to the createProfile route page to complete the profile A
import { SignUp } from "@clerk/nextjs";

export default function SignInPage (){
    return (
        <>
            <SignUp forceRedirectUrl='/user/${username}'/>
        </>
    )
}
