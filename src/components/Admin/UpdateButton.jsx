import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateButton = ({loading, data}) => {
//   const [loading, setloading] = useState(true)
const id = data._id
const router =  useNavigate()

async function update(params) {
      params.preventDefault()
try {
    const UpdateData = await fetch('http://localhost:5001/blog/api/v1/updatepost/'+id, {
        method: 'PATCH',
        headers: {'Content-Type': 'Application/json'},
        body: JSON.stringify(data)
    })
    const res = await UpdateData.json()
    alert(res.message)
    if (res.message === 'Update Successful') {
      router('../allpost')
    }
} catch (error) {
    
}
      
      
}
  return (
    <div>
         <div className='row justify-content-end mx-0'>
      {
              loading ? <img src="/loader1.gif" className='w-25' alt="" /> :

        <button className='btn btn-dark' id='submit' onClick={update}>Update Post</button>
}
      </div>
    </div>
  )
}

export default UpdateButton