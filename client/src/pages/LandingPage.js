import { Link } from "react-router-dom"
export default function LandingPage(){
    return (
        <>
        <div className="h-screen w-screen bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]
         from-white via-orange-200 to-white">
            <div className="flex flex-col items-center gap-10 py-20 mt-3">
            <h1 className="text-7xl tracking-wide text-orange-500 font-bold 
            text-center pt-20">Mother the garden<br />of your soul</h1>
            <Link to = "/login" className="border text-xl bg-orange-100 rounded-full px-10 py-5 hover:bg-orange-200">Take a deep breath... and lets begin</Link>
    </div>
        </div>
        </>
    )
}