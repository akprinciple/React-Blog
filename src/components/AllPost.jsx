import React, { useEffect, useState } from 'react'
import ActionButton from './Admin/ActionButton'

const AllPost = () => {
  const [Allposts, setAllposts] = useState()
  const [loading, setloading] = useState(true)
  const [reaction, setreaction] = useState(1)
  const fetchpost = async()=>{

    try {
      
      const data = await fetch('http://localhost:5001/blog/api/v1/allpost');
      const res = await data.json()
      setAllposts(res)
      console.log(res);
    } catch (error) {
      console.log(error);
    }finally{
      setloading(false)
    }
  }
  useEffect(() => {
    fetchpost()}, 
    [reaction])
  
  return (
    <div>
        <h2 className='text-center mt-4'>AllPost</h2>
            {
              loading ? <img src="/loader1.gif" className='w-50 d-block mx-auto' alt="" /> :

        <table className='table table-striped'>
          <thead className='text-light bg-success'>
            <tr>
              <td>S/N</td>
              <td>Title</td>
              <td>Category</td>
              <td>Status</td>
              <td>Date</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              Allposts?.map(({_id,title, category, date, status}, i)=>{
                return (
                  <tr key={_id}>
                  <td>{i+1}</td>
                  <td>{title}</td>
                  <td>{category}</td>
                  <td className={status === 'Unapproved'? 'text-danger': 'text-success'}>{status}</td>
                  <td>{date}</td>
                  <td><ActionButton id={_id} reaction={reaction}/></td>
                  
                </tr>
                )
              })
            }
              
          </tbody>
        </table>
            }
    </div>
  )
}

export default AllPost