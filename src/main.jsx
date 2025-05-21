import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { toGetGithubInfo } from './components/GIthub/Github.jsx'

// Method-1: To create router
/*const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: "",
        element: <Home />
      },
      {path: "about",
      element: <About />},
      {path: "contact-us",
        element: <Contact />
      }
    ]
  }
])*/

// Method-2: Another way to create router with Route tags
const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={toGetGithubInfo}
      path='github' 
      element={<Github />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
