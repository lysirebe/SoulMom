import React, {useState, useEffect} from 'react';
import { useAuth } from '../AuthContext';

// function userInfo({token}) {
//     const [userInfo, setUserInfo] = useState(null);

//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             const response = await fetch()
//         }
//     })
// }

export default function DashboardPage(){
    const {userData, jwtToken} = useAuth();
    console.log(jwtToken);
    return (
        <>
        <div className="h-screen w-screen bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]
         from-white via-orange-200 to-white">
            <div className="flex flex-col items-center gap-10 py-20 mt-3">
            <h1 className="text-7xl tracking-wide text-orange-500 font-bold 
            text-center pt-20">Welcome {userData.name}</h1>
    </div>
        </div>
        </>
    )}
