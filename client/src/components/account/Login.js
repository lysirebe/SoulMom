import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import FormAction from './FormAction';
import axios from 'axios';

// import { AuthContext } from '../../App';
// import { login } from '../../services/api'
// import { routeHandler } from '../../services/routeHandler';
// import { loginFields } from '../formFields';
// import UserInput from './UserInput';

const fixedInputClass ="rounded-md appearance none relative w-full block px-3 py-2 border border-orange-500 placeholder-orange-500"


// const fields = loginFields;

//used to store the state for the form input fields
// let fieldsState = {};

//set up the initial state of the form input fields with empty values
// fields.forEach(fields=>fieldsState[fields.id] = '');

export default function Login(){

    // const [loginState, setLoginState] = useState(loginFields);
    const {login} = useAuth()
    const navigateTo = useNavigate();
    const [loginInput, setLoginInput]=useState({
        email:"",
        password:""
    });
    const [error, setError] = useState(null)

    /*  
        handleChange: a function that takes an event (e) as param and uses setLoginState to update loginState when input fields change.
        -updates loginState object with new values entered into input fields, preserves existing state data while making changes to the specific field that triggered the change event.

        ... : spread operator used to create a shallow copy of existing 'loginState' 
        e.g creates a new object containing all key-value pairs of original 'loginState to avoid modifying the original 'loginState' object

        e.target.id: the id attritbute of the input field that triggered the change
        e.target.value: the new value of field.

        were using spread and loginstate as aopposed to creating states for each input field 
        helps reduce the number of lines of code
    */
    
    // const handleChange = (e) => {
    //     setLoginState({
    //         ...loginState,[e.target.id]:e.target.value});
    //     }

    const handleChange = (e) => {
        setLoginInput({
            ...loginInput,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/authentication/login',loginInput)

            if (response.data.token && response.status === 200){
                login(response.data.token, response.data.user)
                navigateTo("/dashboard")
            } else { 
                console.log("hello", response.data.message)
                setError(response.data.message) 
        }

        } catch (error) {
            console.log("hey", error)
            setError(error.message)

        }}
    //     login(loginInput)
    //     .then(res =>{
    //         setLoginInput({
    //             email:"",
    //             password:""
    //         })
    //         setJWTToken(res.data)
    //         navigateTo("/dashboard")  
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         alert(error.response.data.message)
    //     })
        
    // }
    // useEffect(() => {
    //     routeHandler(navigateTo,jwtToken)
    // })
    
    return (
        <>
        <form className='mt-8 space-y-6' onSubmit = {handleSubmit}>
            <div className=' -space-y-px flex flex-col items-center'>

            <div className="my-5">

            <label htmlFor= "email" className="sr-only">Email Address</label>
            <input 
                type = "email"
                id = "email"
                onChange={handleChange}
                value = {loginInput.email}
                className={fixedInputClass}
                placeholder="Email address"   
            />
            </div>

            <div className="my-5">

            <label htmlFor="password" className="sr-only">Password</label>
            <input 
                type = "password"
                id = "password"
                onChange={handleChange}
                value = {loginInput.password}
                className={fixedInputClass}
                placeholder="Password"   
            />
            </div>
                </div>
                <FormAction handleSubmit={handleSubmit} text = "Login"/>
        </form>
        {error && <p>{error} </p>}
        </>

)}


  {/* loop through fields array to render the UserInput component */}
                {/* {fields.map(field=>
                    <UserInput
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={loginState[field.id]}
                        handleChange={handleChange}
                        labelFor={field.labelFor}
                        labelText={field.labelText}
                        isRequired={field.isRequired}
                    
                    />
                    )} */}
                    
        // </form>
        // <div className='min-h-full h-screen flex justify-center items-center px-6 py-12 sm:px:6 lg:px-8'>
        // <div className='flex flex-col w-3/4 bg-orange-100 mt-14 py-14 px-14 border rounded-lg gap-5'>
        //         <h2 className = "text-center text-2xl font-bold text-orange-500">Sign in to your account</h2>
        //         <div className='flex flex-col items-center gap-6'>
        //             <input className='py-1 px-1' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        //             <input className = 'py-1 px-1 ' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        //             <button className='bg-white py-2 border rounded-xl px-10' onClick ={handleLogin}>Login</button>
        //         </div>
        //         </div>


            
   
        // </div>

// const Login = ({onLogin}) => {
//     const [email, setEmail] = useState('');
//     const [password,setPassword] = useState('');

//     const handleLogin = async ()=> {
//         const response  = await fetch('http://localhost:5000/authentication/login', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({email,password}),
//         });


//         if (response.ok){
//             const data = await response.json();
//             onLogin(data.token);
//         }
//     };

//     return (
//         <div className='min-h-full h-screen flex justify-center items-center px-6 py-12 sm:px:6 lg:px-8'>
//         <div className='flex flex-col w-3/4 bg-orange-100 mt-14 py-14 px-14 border rounded-lg gap-5'>
//                 <h2 className = "text-center text-2xl font-bold text-orange-500">Sign in to your account</h2>
//                 <div className='flex flex-col items-center gap-6'>
//                     <input className='py-1 px-1' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
//                     <input className = 'py-1 px-1 ' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
//                     <button className='bg-white py-2 border rounded-xl px-10' onClick ={handleLogin}>Login</button>
//                 </div>
//                 </div>


            
   
//         </div>
//     )

// }

// export default Login;
