import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from './Layout';
import { About, Home, Contact, User, Github, githubInfoLoader, SubAbout, AlternateAbout, MainAbout } from './components';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<MainAbout/>}>
          <Route path='' element={<About/>} />
          <Route path='subabout' element={<SubAbout/>} />
          <Route path='alternateabout' element={<AlternateAbout/>} />
        </Route>
        <Route path='contact' element={<Contact/>} />
        <Route path='user/:userId' element={<User/>} />
        <Route loader={githubInfoLoader} path='github' element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
