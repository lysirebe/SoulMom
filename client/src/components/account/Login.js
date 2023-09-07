import React, {useState} from 'react';

const Login = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async ()=> {
        const response  = await fetch('http://localhost:5000/authentication/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,password}),
        });


        if (response.ok){
            const data = await response.json();
            onLogin(data.token);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick ={handleLogin}>Login</button>
        </div>
    )

}

export default Login;
