import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Home(){

  const [employees,setEmployees] = useState([])
useEffect(()=>{
axios.get('http://localhost:3001/getEmployee')
.then(employees => setEmployees(employees.data))
.catch(err => console.log(err))
},[])

  return(
    <>
    <h2>User Details</h2>
    <table>
    <thead>
      <tr>
        <th>
          Name
        </th>
        <th>Date of Birth</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
    </thead>
    <tbody>
     {
      employees.map(employee => {
       return <tr>
          <td>{employee.name}</td>
          <td>{employee.dob}</td>
          <td>{employee.email}</td>
          <td>{employee.password}</td>
        </tr>
      })
     }
    </tbody>
    </table>
    </>
  )
}
export default Home;