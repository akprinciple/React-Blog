import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
	// useEffect(() => {
	// 	getUser()
	// }, [])

	// async function getUser() {
	// 	const token = localStorage.getItem('token');
	// 	try {
	// 		const res = await fetch('http://localhost:5000/auth/getUser', {
	// 			method: 'GET',
	// 			headers: {
	// 				'token': `Bearer ${token}`
	// 				// Add other headers if needed
	// 			}
	// 		});
	
	// 		const data = await res.json();
	// 		console.log(data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
	
	
    
  return (
    <div className='row mx-0'>
        <div className="col-md-2 left_side bg-leo m-0 p-0 " style={{backgroundColor: '#000'}}>
	<div className="nav-link">
		<span className="fas fa-bars p-3 float-right small_screen_bar text-light"></span>
		 <img src="/queens logo.jpg" className="w-50 rounded-circle d-block mx-auto"/><br/> 
		<b className="text-light d-block text-center">Administrator</b>

	</div>
	
		<Link  href=""  className="nav-link border-top border-bottom text-light" title="Dashboard">
			<b className="fas fa-box text-light mr-3"></b>DASHBOARD
		</Link>
        
	<div className="nav-link border-bottom text-light font-weight-bold">
	Navigation
		<b className="fas fa-caret-down text-light float-right"></b>

	</div>
    <Link to='/' className="nav-link border-bottom text-light" title="Home Page">
		<b className="fas fa-ellipsis-h mr-3"></b>
			Homepage
		<b className="fas fa-caret-right text-light float-right"></b>
	</Link>
	<Link to='allpost' className="nav-link border-bottom text-light posts" title="View Posts">
		<b className="fas fa-city mr-3"></b>
			All Posts
		<b className="fas fa-caret-down text-light float-right"></b>
	</Link>
    <Link to='addpost' className="nav-link border-bottom text-light pointer" id="category">
			<b className="fas fa-pen-nib mr-3"></b>
            Add post
		<b className="fas fa-caret-down float-right"></b>
	</Link>
	

		
		
	<Link href="" className="nav-link border-bottom text-light" title="View Members">
		<b className="fas fa-users mr-3"></b>
			View Members
		<b className="fas fa-caret-right text-light float-right"></b>
	</Link>
		
		 <li className="nav-link border-bottom text-light pointer " id="role">
			<b className="fas fa-expand mr-3"></b>
		Roles and Privileges
		<b className="fas fa-caret-down float-right"></b>
	</li>
	
	<Link href="javascript:void(0);" className="nav-link comment  border-bottom text-light" title="Add New Posts">
		<b className="fas fa-plus mr-3"></b>
			Manage Comments
		<b className="fas fa-caret-down text-light float-right"></b>
	</Link>
	
	<Link href="javascript:void(0)" className="nav-link border-bottom text-light page">
		<b className="fas fa-pager mr-3"></b>
		Pages
		<b className="fas fa-caret-down float-right"></b>
	</Link>
	
	
	<Link href="logout.php" className="nav-link border-bottom text-light" title="Logout">
		<b className="fas fa-question mr-3"></b>
			Logout
		<b className="fas fa-caret-right text-light float-right"></b>
	</Link>
</div>
<div className='col-md-10'>
    <Outlet/>
</div>
    </div>
  )
}

export default Admin