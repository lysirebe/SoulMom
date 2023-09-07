import FormHeader from "../components/account/FormHeader";
import Signup from "../components/account/Signup";

export default function SignupPage() {
    return(
        <>
        <FormHeader
        heading = "Create a New Account"
        paragraph = "Already a SoulMom member?"
        linkname ="Login"
        linkUrl = "/login"
        />
        <Signup/>
        </>
    )
}