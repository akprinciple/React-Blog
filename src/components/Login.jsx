import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const [data, setdata] = useState()
    const router = useNavigate()

    function handleChange(e){
        let nam = e.target.name
        let val = e.target.value

        setdata({...data, [nam]:val})
    }

   async function loginFun(e){
        e.preventDefault()
       try {
        const res = await fetch('http://localhost:5000/auth/login',{
            method: 'POST',
            headers: {'Content-Type': "Application/json"},
            body: JSON.stringify(data)
        })
        let actualData = await res.json()
        if (actualData.token) {
          localStorage.setItem('token', actualData.token)
          router('/admin')
        }
       } catch (error) {
        console.log(error);
       }
    }


  return (
    <div>
        <form action="" className='col-md-5 mx-auto mt-5 shadow'>
        <div className="mb-3">
      <label for="email" className="form-label">email</label>
      <input type="text" className="form-control" name='email' id="email" onChange={handleChange} />
    </div>
    
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" name='password' id="exampleInputPassword1"onChange={handleChange} />
    </div>
    
    <button type="submit" className="btn btn-primary" onClick={loginFun}>Submit</button>
        </form>
    </div>
  )
}

export default Login