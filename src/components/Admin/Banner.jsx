import React, { useState } from 'react'

const Banner = ({data}) => {
    const [loading, setloading] = useState(true)
    const [image, setimage] = useState()
    const id = data._id
    const handleData = (e)=>{
        
        const {files } = e.target;
        setimage(() => ({'image': files[0]}));
    }
    async function update(params) {
        params.preventDefault()
        console.log(image);
        const formData = new FormData();
        formData.append('image', image.image);
        
  try {
      const UpdateData = await fetch('http://localhost:5001/blog/api/v1/updateimage/'+id, {
          method: 'PATCH',
          body: formData
      })
      const res = await UpdateData.json()
      alert(res.message)
      if (res.message === 'Image Successfully Updated') {
        // router('../allpost')
        window.location.reload()
      }
  } catch (error) {
      
  }
        
        
  }
  return (
    <div>
         <form className='col-md-10 mx-auto my-4'>
            <h4 className='border-bottom border-success'>Update Image</h4>
            <img src={data.image} alt={data.image} name='image' className='w-100'/>
            <input type="file" name="image" id="" className='form-control mt-2' onChange={handleData} />
            <input type="submit" value="Update image" className='btn btn-success mt-2' onClick={update}/>
        </form>
    </div>
  )
}

export default Banner