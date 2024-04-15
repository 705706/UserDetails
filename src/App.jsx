
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';
import './App.css'


function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<SignUp/>}> </Route>
    <Route path='/login' element={<Login/>}> </Route>
    <Route path='/home' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
