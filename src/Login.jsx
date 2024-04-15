import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(){
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate=useNavigate();

const handleSubmit= (e) => {
e.preventDefault();
axios.post('http://localhost:3001/login',{email,password})
.then(result => {
  console.log(result)
  if(result.data === "Success"){
    navigate('/home')
  }
})
.catch(err=> console.log(err))
}

return(
  <>
  <form onSubmit={handleSubmit} className="center">
  <div className="mb-3 mt-5 " >
    
    <input type="email" placeholder="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={(e) => setEmail(e.target.value)}
    />
   
  </div>
  <div className="mb-3 ">
    
    <input type="password" placeholder="password" className="form-control" id="exampleInputPassword1"
    onChange={(e) => setPassword(e.target.value)}
    
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Rember Me</label>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
  <p>Already Have an Account</p>
<Link to='/register'>Sign Up</Link>
</form>

  </>
)
}

export default Login;