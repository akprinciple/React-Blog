import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormData = () => {
    const [data, setdata] = useState()
    const router = useNavigate()
    function handleChange(e){
        let nam = e.target.name
        let val = e.target.value

        setdata({...data, [nam]:val})
    }

    async function handleSubmit(e){
        e.preventDefault()
        // console.log(data);
        try {
            const res = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: {'Content-Type': "Application/json"},
                body: JSON.stringify(data)
            })
            const actuiRes = await res.json()
            // console.log(actuiRes);
            if (actuiRes.message) {
              alert('account created success')
              router('/login')
              
            }
        } catch (error) {
            console.log(error);
        }

    }
      return (
    <div><form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label for="username" className="form-label">ser Name</label>
      <input type="text" className="form-control" name='userName' id="username"onChange={handleChange} />
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp"onChange={handleChange} />
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" name='password' id="exampleInputPassword1"onChange={handleChange} />
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
  )
}

export default FormData