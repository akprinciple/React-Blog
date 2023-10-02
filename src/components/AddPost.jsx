import React, { useRef, useState } from 'react'

const AddPost = () => {
  const [loading, setloading] = useState(true)
  const [data, setdata] = useState('')
  const formRef = useRef()
  const [error, seterror] = useState('')
  const handleData = (e)=>{
    const val = e.target.value
    const { name, value, files } = e.target;
    if (name === 'image') {
        setdata(() => ({ ...data, [name]: files[0] }));

        console.log(data);
      } else {
        setdata(() => ({ ...data, [name]: value }));
      }
    }
    const validate =async (e)=>{
      setloading(false)
        e.preventDefault()
       const {title, category, description} = data
       const date = new Date().toLocaleDateString()
       const info = {...data, date}
        if (title === '' || !category || description === '') {
          alert('All fields are required');
        }else{
          const formData = new FormData();
          formData.append('title', data.title);
          formData.append('category', data.category);
          formData.append('description', data.description);
          formData.append('image', data.image);
console.log(formData);
          try {
            
              const req = await fetch('http://localhost:5001/blog/api/v1/addpost', {
                method: 'POST',
                body: formData
              
              })
              const res = await req.json()
              alert(res.message);
              // setdata('')
              // formRef.current.reset
            
          } catch (error) {
            console.log(error);
          }finally{
            setloading(true)
          }
        }
        
    }
  return (
    <div>
       {/* ref={formRef} */}
      <form className='col-md-8 mx-auto mt-5 p-3 shadow rounded'>
        <h4 className='text-center'>Add New Post</h4>
        <label htmlFor="title">Title</label>
        <input type="text" name='title' onChange={handleData} className='form-control mb-3' placeholder='Input Your The Title'/>

        <label htmlFor="category">Category</label>
        <select name="category" id="category" onChange={handleData} className='form-control mb-3'>
          <option value=''>Select category</option>
          <option value="Education">Education</option>
          <option value="Sport">Sport</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <label htmlFor="image">Post Banner</label>
        <input type="file" accept='image/*' name='image' onChange={handleData} className='form-control mb-3' />

        <label htmlFor="Description">Description</label>
        <textarea name="description" id="" onChange={handleData} cols="30" rows="10" className='form-control mb-3' placeholder='Type your Story'></textarea>
       
      <div className='row justify-content-end mx-0'>
      {
              !loading ? <img src="/loader1.gif" className='w-25' alt="" /> :

        <button className='btn btn-dark' id='submit' onClick={validate}>Add Post</button>
}
      </div>
      </form>
    </div>
  )
}

export default AddPost