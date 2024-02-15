import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './pages/About.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { Wrapper } from './wrapper/Wrapper.jsx'


const router = createBrowserRouter([
  {
    element: <Wrapper/>,
    children: [
      {
        path: '/about',
        element: <About/> 
      },
      {
        path: "/",
        element: <HomePage/>
      }
    ]
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
