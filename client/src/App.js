import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AuthProvider } from './AuthContext';

//pages
  import SignupPage from './pages/SignupPage';
  import LoginPage from './pages/LoginPage';
  import LandingPage from './pages/LandingPage';
  import DashboardPage from './pages/DashboardPage';


  //components 
  import Navbar from './components/Navbar';

  // import { createContext } from 'react';
  // export const AuthContext = createContext()

  function App(){

    return (
      <>
      <BrowserRouter>
        <AuthProvider>

         <Navbar/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />}/>
          </Routes>

        </AuthProvider>
        </BrowserRouter>
        </>
      


    )
  }

//components
// import AddEntry from './components/AddEntry';
// import ListEntries from './components/ListEntries';
// import Login from './components/Login';

// function App() {
//  const [token,setToken]= useState('');
 
//  const handleLogin = (newToken => {
//   setToken(newToken);
//  })
 
//  )

//   return (
//     <Fragment>
//       <AddEntry />
//       <ListEntries/>
//     </Fragment>
//   );
// }

export default App;
