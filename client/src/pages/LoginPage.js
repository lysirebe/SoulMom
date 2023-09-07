import FormHeader from "../components/account/FormHeader";
import Login from "../components/account/Login";

export default function LoginPage(){
    return(
        <>
        <FormHeader
         heading = "Welcome Back, login in to your account"
         paragraph = "Not a SoulMom member yet ? Sign Up"
         linkname ="Sign Up"
         linkUrl = "/signup"
         />
         <Login/>
        </>
    )
}