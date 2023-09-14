import FormHeader from "../components/account/FormHeader";
import Login from "../components/account/Login";

export default function LoginPage(){
    return(
        <>
        <div className=" relative flex items-center justify-center">
        <div className=" min-w-fit border rounded-3xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]
         from-white via-orange-200 to-white flex flex-col justify-center py-8 px-14 mt-14">

        <FormHeader
         heading = "Login in to your account"
         paragraph = "Not a SoulMom member yet ?"
         linkName ="Sign Up"
         linkUrl = "/signup"
         />
         <Login/>
            <div className = "flex justify-center">
                <a href = "#" className = "text-orange-500 hover:text-black py-5">Forgot your password?</a>
         </div>
         </div>
         </div>
        </>
    )
}