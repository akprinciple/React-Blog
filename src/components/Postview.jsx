import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Postview = () => {
    const {id} = useParams()
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const fetchpost = async ()=>{

        try {
            
            const res = await axios.get('http://localhost:5001/blog/api/v1/viewpost/'+id)
            setdata(res.data)
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
    const {_id, title, description, category, date, image} = data
    useEffect(() => {
      fetchpost()}, 
      [])
  return (
    <div>
       <div role="main" className="main">

<section className="page-header page-header-modern bg-color-light-scale-1 page-header-md">
    <div className="container">
        <div className="row">
            <div className="col-md-12 align-self-center p-static order-2 text-center">										<span className="sub-title text-dark">Check out our Latest News!</span>							</div>							<div className="col-md-12 align-self-center order-1">
                <ul className="breadcrumb d-block text-center">
                    <li><Link to={'/'}>Home</Link></li> &nbsp;
                    <i className='fas fa-caret-right'></i> &nbsp;
                    <li className="">Blog</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<div className="container py-4">

    <div className="row">
        <div className="col">
            <div className="blog-posts single-post">

                <article className="post post-large blog-single-post border-0 m-0 p-0"><div className="post-image ms-0">
                      
                            <img src={image} className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                      
                    </div>

                    <div className="post-date ms-0">
                        {/* <span className="day">{data.date.split('-')[2].split('T')[0]}</span> */}
                        <span className="month">Oct</span>
                    </div>

                    <div className="post-content ms-0">

                        <h2 className="font-weight-semi-bold"><Link to={`/`+_id}>{title}</Link></h2>

                        <div className="post-meta">
                            <span><i className="far fa-user"></i> By <a href="#">Admin</a> </span>
                            <span><i className="far fa-folder"></i> <Link>{category}</Link> </span>
                            <span><i className="far fa-comments"></i> <a href="#">122 Comments</a></span>
                        </div>
                        <div className='text-justify'>
                       {description}
                        </div>
                        <div className="post-block mt-5 post-share">
                            <h4 className="mb-3">Share this Post</h4>

                            <div className="addthis_inline_share_toolbox"></div>
                            
                        </div>

                        <div className="post-block mt-4 pt-2 post-author">
                            <h4 className="mb-3">Author</h4>
                            <div className="img-thumbnail img-thumbnail-no-borders d-block pb-3">
                               
                                    <img src="/avatar2.png" alt=""/>
                               
                            </div>
                            <p><strong className="name"><a href="#" className="text-4 pb-2 pt-2 d-block">John Doe</a></strong></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui. </p>
                        </div>
<div id="comments" className="post-block mt-5 post-comments">
                            <h4 className="mb-3">Comments (122)</h4>

                            <ul className="comments">
                                <li>
                                    <div className="comment">
                                        <div className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                            <img className="avatar" alt="" src="face23.jpg"/>
                                        </div>
                                        <div className="comment-block">
                                            <div className="comment-arrow"></div>
                                            <span className="comment-by">
                                                <strong>John Doe</strong>
                                                <span className="float-end">
                                                    <span> <a href="#"><i className="fas fa-reply"></i> Reply</a></span>
                                                </span>
                                            </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.</p>
                                            <span className="date float-end">January 12, 2022 at 1:38 pm</span>
                                        </div>
                                    </div>

                                    <ul className="comments reply">
                                        <li>
                                            <div className="comment">
                                                <div className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                                    <img className="avatar" alt="" src="image 2.png"/>
                                                </div>
                                                <div className="comment-block">
                                                    <div className="comment-arrow"></div>
                                                    <span className="comment-by">
                                                        <strong>John Doe</strong>
                                                        <span className="float-end">
                                                            <span> <a href="#"><i className="fas fa-reply"></i> Reply</a></span>
                                                        </span>
                                                    </span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                    <span className="date float-end">January 12, 2022 at 1:38 pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment">
                                                <div className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                                    <img className="avatar" alt="" src="avatar2.png"/>
                                                </div>
                                                <div className="comment-block">
                                                    <div className="comment-arrow"></div>
                                                    <span className="comment-by">
                                                        <strong>John Doe</strong>
                                                        <span className="float-end">
                                                            <span> <a href="#"><i className="fas fa-reply"></i> Reply</a></span>
                                                        </span>
                                                    </span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                    <span className="date float-end">January 12, 2022 at 1:38 pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="comment">
                                        <div className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                            <img className="avatar" alt="" src="vite.svg"/>
                                        </div>
                                        <div className="comment-block">
                                            <div className="comment-arrow"></div>
                                            <span className="comment-by">
                                                <strong>John Doe</strong>
                                                <span className="float-end">
                                                    <span> <a href="#"><i className="fas fa-reply"></i> Reply</a></span>
                                                </span>
                                            </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <span className="date float-end">January 12, 2022 at 1:38 pm</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="comment">
                                        <div className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                            <img className="avatar" alt="" src="loader2.gif"/>
                                        </div>
                                        <div className="comment-block">
                                            <div className="comment-arrow"></div>
                                            <span className="comment-by">
                                                <strong>John Doe</strong>
                                                <span className="float-end">
                                                    <span> <a href="#"><i className="fas fa-reply"></i> Reply</a></span>
                                                </span>
                                            </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <span className="date float-end">January 12, 2022 at 1:38 pm</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>

                        <div className="post-block mt-5 post-leave-comment">
                            <h4 className="mb-3">Leave a comment</h4>

                            <form className="contact-form p-4 rounded bg-color-grey" action="https://www.okler.net/previews/porto/9.9.0/php/contact-form.php" method="POST">			
                                <div className="p-2">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <label className="form-label required font-weight-bold text-dark">Full Name</label>
                                            <input type="text" value="" data-msg-required="Please enter your name." maxlength="100" className="form-control" name="name" required/>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label className="form-label required font-weight-bold text-dark">Email Address</label>
                                            <input type="email" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100" className="form-control" name="email" required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label className="form-label required font-weight-bold text-dark">Comment</label>
                                            <textarea maxlength="5000" data-msg-required="Please enter your message." rows="8" className="form-control" name="message" required></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col mb-0">
                                            <input type="submit" value="Post Comment" className="btn btn-primary btn-modern" data-loading-text="Loading..."/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </article>

            </div>
        </div>
    </div>

</div>
    </div>
    </div>

  )
}

export default Postview