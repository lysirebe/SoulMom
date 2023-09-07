import './App.css';
import { 
  Routes,
  Route } from 'react-router-dom';
  import { Fragment } from 'react';

//pages
  import SignupPage from './pages/SignupPage';
  import LoginPage from './pages/LoginPage';
  import LandingPage from './pages/LandingPage';


  //components 
  import Navbar from './components/Navbar';

  function App(){
    return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
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
