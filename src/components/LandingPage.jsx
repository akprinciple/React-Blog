import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const [post, setpost] = useState([])
    const [loading, setloading] = useState(false)
const fetchData = async()=>{
setloading(true)
  try {
    const response = await axios.get('http://localhost:5001/blog/api/v1/allposts')
    setpost(response.data)
    // console.log(data); 
  } catch (error) {
    console.log(error);
  }finally{
setloading(false)

  }
}
function monthSet(mon) {
  let dat = new Date()
  dat.setMonth(mon-1)
  return dat.toLocaleString('en-US',{month: 'short'})
}
useEffect(() => {
  fetchData()
  
}, [])

  return (
    <div className='mx-0 mt-3'>
      <h1 className='col-md-11 mx-auto my-3 text-primary'>
        <marquee behavior="" direction="">Welcome to LeotechWorld Forum  </marquee>
      </h1>
      <div className=" col-md-11 mx-auto">
						<div className="col-lg-3 position-sticky float-left">
							<aside className="sidebar">								
              <form method="get">									
              <div className="input-group mb-3 pb-1">										
              <input className="form-control text-1" placeholder="Search..." name="s" id="s" type="text"/>										
              <button type="submit" className="btn btn-dark text-1 p-2"><i className="fas fa-search m-0 p-1" style={{fontSize: '12px'}}></i></button>
              </div>
              	</form>
                								
          <h5 className="font-weight-semi-bold pt-4">Categories</h5>
          <ul className="nav nav-list flex-column mb-5">	
          <li className="nav-item"><a className="nav-link" href="#">Design (2)</a></li>
          		<li className="nav-item">										
              <a className="nav-link active" href="#">Photos (4)</a>										
                </li>									
                <li className="nav-item"><a className="nav-link" href="#">Videos (3)</a></li>	
                <li className="nav-item"><a className="nav-link" href="#">Lifestyle (2)</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Technology (1)</a></li>
                </ul>								
                <div className="tabs tabs-dark mb-4 pb-2">									
                <ul className="nav nav-tabs">										
                <li className="nav-item"><a className="nav-link show active text-1 font-weight-bold text-uppercase" href="#popularPosts" data-bs-toggle="tab">Popular</a>
                </li>										
                <li className="nav-item">
                  <a className="nav-link text-1 font-weight-bold text-uppercase" href="#recentPosts" data-bs-toggle="tab">Recent</a>
                  </li>									
                  </ul>									
                  <div className="tab-content">										
                  <div className="tab-pane active" id="popularPosts">											
                  <ul className="simple-post-list">												
                  <li>													
                    <div className="post-image">														
                    <div className="img-thumbnail img-thumbnail-no-borders d-block">
                      <a href="">																
                      <img src="face23.jpg" width="50" height="50" alt=""/>
                      </a>														
                      </div>													
                      </div>													
                      <div className="post-info">														
                      <a href="">Nullam Vitae Nibh Un Odiosters</a>	
                      <div className="post-meta">Nov 10, 2022</div>													
                      </div>												
                      </li>												
                      <li>													
                        <div className="post-image">														
                        <div className="img-thumbnail img-thumbnail-no-borders d-block">
                      <a href="blog-post.html">																
                      <img src="image 2.png" width="50" height="50" alt=""/>															
                      </a>														
                      </div>													
                      </div>													
                      <div className="post-info">														
                      <a href="blog-post.html">Vitae Nibh Un Odiosters</a>														
                      <div className="post-meta">Nov 10, 2022</div>													
                      </div>												
                      </li>												
                      <li>													
                        <div className="post-image">														
                        <div className="img-thumbnail img-thumbnail-no-borders d-block">	
                        														<a href="blog-post.html">	
                    <img src="loader2.gif" width="50" height="50" alt=""/>															</a>														</div>													</div>													<div className="post-info">														
                      <a href="blog-post.html">Odiosters Nullam Vitae</a>														
                      <div className="post-meta">															 Nov 10, 2022														</div>													</div>												</li>											</ul>										</div>										<div className="tab-pane" id="recentPosts">											<ul className="simple-post-list">												<li>													<div className="post-image">														<div className="img-thumbnail img-thumbnail-no-borders d-block">															<a href="blog-post.html">																<img src="img/blog/square/blog-24.jpg" width="50" height="50" alt=""/>															</a>														</div>													</div>													<div className="post-info">														<a href="blog-post.html">Vitae Nibh Un Odiosters</a>														<div className="post-meta">															 Nov 10, 2022														</div>													</div>												</li>												<li>													<div className="post-image">														<div className="img-thumbnail img-thumbnail-no-borders d-block">															<a href="blog-post.html">																
                      <img src="avatar2.png" width="50" height="50" alt=""/>															</a>														</div>													</div>													<div className="post-info">														<a href="blog-post.html">Odiosters Nullam Vitae</a>								
              	<div className="post-meta">	Nov 10, 2022</div>
                </div>												
                </li>												
                <li><div className="post-image">
                  <div className="img-thumbnail img-thumbnail-no-borders d-block">
                    <a href="blog-post.html">
                      <img src="vite.svg" width="50" height="50" alt=""/>
                      </a>														
                      </div>													
                      </div>													
                      <div className="post-info">														
                      <a href="blog-post.html">Nullam Vitae Nibh Un Odiosters</a>
                      <div className="post-meta">Nov 10, 2022</div>													
                      </div>												
                      </li>											
                      </ul>										
                      </div>									
                      </div>								
                      </div>								
              <h5 className="font-weight-semi-bold pt-4">About Us</h5>								
              <p>Nulla  </p>							</aside>
						
            </div>
						<div className="col-lg-9 float-right">
            {
              
                loading ? <img src="/loader1.gif" className='w-50 d-block mx-auto' alt="" /> :
  
     post.map(({_id, title, description,category, image, status, date}, i)=>{ return(
            

       <div key={_id} className='blog-posts'>
							

								<article className="post post-large">
									<div className="post-image">
										
                    <Link to={_id}>
											<img src={image} style={{height: '250px', objectFit: 'cover'}} className=" w-100 img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                    </Link>
									
									</div>

									<div className="post-date">
										<span className="day"> {date.split('-')[2].split('T')[0]}</span>
										<span className="month">{monthSet(date.split('-')[1])}</span>
									</div>

									<div className="post-content">

										<h2 className="font-weight-semibold text-6 line-height-3 mb-3">
                    <Link to={_id}>{title}</Link></h2>
                    <p>{description.substr(0, 400)} [...]</p>
										<div className="post-meta">
											<span><i className="far fa-user"></i> By <a href="#">Admin</a> </span>
											<span><i className="far fa-folder"></i> <a href="#">{category}</a> </span>
											<span><i className="far fa-comments"></i> <a href="#">{1078+i} Comments</a></span>
											<span className="d-block d-sm-inline-block float-sm-end mt-3 mt-sm-0">
                      <Link to={_id} className="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
										</div>

									</div>
								</article>
</div>
     )})}

</div>
<div className="clearfix"></div>
</div>
      </div>
  )
}

export default LandingPage