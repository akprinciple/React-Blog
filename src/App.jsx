import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './font/css/all.min.css'
import './bootstrap/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootPage from './components/RootPage'
import Admin from './components/Admin/Admin'
import Index from './components/Admin/Index'
import AddPost from './components/AddPost'
import AllPost from './components/AllPost'
import FormData from './components/FormData'
import Viewpost from './components/Admin/Viewpost'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import Postview from './components/Postview'



function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage/>,
      children: [
        {
          index: true,
          element: <LandingPage/>
          // <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est accusantium quam, ducimus magnam aperiam tempora ea vitae eos esse delectus odit. Recusandae neque nostrum blanditiis, eaque minus excepturi reiciendis nulla.</h1>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'signup',
          element:<FormData/>
        },{
          path: ':id',
          element: <Postview/>
        }
      ]
    },
    {
      path: '/admin',
      element: <Admin/>,
      children: [
        {
          index: true,
          element: <Index/>
        },
        {
          path: 'addpost',
          element: <AddPost/>
        },{
          path: 'allpost',
          element: <AllPost/>
        },
        {
          path: 'viewpost/:id',
          element: <Viewpost/>
        }
      ]
    },
    {
      path: '*',
      element: <h1>Page not Found</h1>
    }
  ])
  return (
    <>
    
    
    <RouterProvider router={router}></RouterProvider>
   
    </>
  )
}

export default App
