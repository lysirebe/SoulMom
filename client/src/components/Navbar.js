import {Link} from'react-router-dom';
export default function NavBar(){
    return (
        // <div className=''>
        <nav className="flex flex-row text-gray-950	justify-between pt-5 px-5 text-2xl" >

            {/* <image src={logo} alt="logo"></image> */}
            <p>SoulMom</p>
            
            <ul className="flex flex-row gap-10">
                    <Link to="/">Home</Link>
                    <Link to = "/about">About</Link>
                    <Link to = "/help">Help</Link>
                    <Link to = "/login" className="border  rounded-full px-3 hover:bg-orange-200">Login</Link>
                </ul>
           
        </nav>
        // </div>
    )
}