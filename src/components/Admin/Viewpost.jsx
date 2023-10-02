import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ApproveButton from './ApproveButton'
import UpdateButton from './UpdateButton'
import Banner from './Banner'

const Viewpost = () => {
    const {id} = useParams()
    
    const [reaction, setreaction] = useState(1)
    const [Allposts, setAllposts] = useState()
    const [data, setdata] = useState()
  const [loading, setloading] = useState(true)
  function handleData(e) {
    let name = e.target.name
    let val = e.target.value

    setdata({...data, [name]: val})
  }
  
  const fetchpost = async()=>{

// moltr
    try {
      
      const data = await fetch('http://localhost:5001/blog/api/v1/viewpost/'+id);
      const res = await data.json()
      setAllposts(res)
      setdata(res)
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }finally{
      setloading(false)
    }
  }
  useEffect(() => {
    fetchpost()}, 
    [])
  return (
    <div>
        {
             loading ? <img src="/loader1.gif" className='w-25' alt="" /> :
             <div>

            <form className='col-md-10 mx-auto mt-5 shadow p-4 rounded'> 
            <h4 className='border-bottom border-success'>Edit Post</h4>
            <div className='row mx-0 justify-content-between'>
            <div className=''>
              <b>Date Posted: </b> {Allposts.date}
            </div>
            <div>
             
              <ApproveButton status={Allposts} reaction={reaction}/>
            </div>
            </div>
                <label htmlFor="title">Title</label>
        <input type="text" name='title' onChange={handleData} defaultValue={Allposts.title} className='form-control mb-3' placeholder='Input Your The Title'/>

        <label htmlFor="category">Category</label>
        <select name="category" id="category" onChange={handleData} className='form-control mb-3'>
          <option defaultValue={Allposts.category}>{Allposts.category}</option>
          <option value="Education">Education</option>
          <option value="Sport">Sport</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <label htmlFor="Description">Description</label>
        <textarea name="description" id="" defaultValue={Allposts.description} onChange={handleData} cols="30" rows="10" className='form-control mb-3' placeholder='Type your Story'></textarea>
       
     <UpdateButton loading={loading} data={data}/>
            </form>
            <Banner data={Allposts}/>

             </div>
        }
    </div>
  )
}

export default Viewpost