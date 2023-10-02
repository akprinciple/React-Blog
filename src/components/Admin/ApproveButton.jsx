import React from 'react'
import { useNavigate } from 'react-router-dom'

const ApproveButton = ({status, reaction}) => {
    const router =  useNavigate()
    const approval = async()=>{
        try {
            const data = await fetch('http://localhost:5001/blog/api/v1/approve',{
                method: 'PATCH',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify(status)
            })
            const res = await data.json()
            console.log(res);
            if (res.message === 'Update Successful') {
              alert('Update Successful')
              window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
        
        
    }
  return (
    <div>
         {
               status.status === 'Approved'? 
                <button className='btn btn-danger' type='button' onClick={approval}>Unapprove</button>:
                <button className='btn btn-success' type='button' onClick={approval}>Approve</button>

              }
    </div>
  )
}

export default ApproveButton