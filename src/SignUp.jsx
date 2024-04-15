import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function SignUp() {
  const [name,setName]=useState();
  const [dob,setDob]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/register",{name,dob,email,password})
    .then(result => {console.log(result)
      navigate('/login')
  })
    .catch(err => console.log(err))
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="center">
      <h1>Register Yourself</h1>
      <div className="w-25 text-center">
      <label htmlFor="exampleInputName" className="form-label">
         Name
        </label>
        <input 
          type="text"
          className="form-control text-center"
          id="exampleInputName"
          aria-describedby="emailHelp"
          onChange={(e) => setName(e.target.value)}
        />
          <label htmlFor="exampleInputdob" className="form-label">
          Date of Birth
        </label>
        <input
          type="date"
          className="form-control"
          id="exampleInputdob"
          aria-describedby="emailHelp"
          onChange={(e) => setDob(e.target.value)}

        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}

        />
      
      </div>
      <div className="w-25">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => setPassword(e.target.value)}

        />
      </div>
    
      <button  type="submit" className="btn btn-primary">
        Register
      </button> <br />
      </form>
      <Link to='/login' type="submit" className="btn btn-primary">
        Login
      </Link>
      </>
  );
}
export default SignUp;
