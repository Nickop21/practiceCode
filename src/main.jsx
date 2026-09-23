import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './components/original/breadcrum/Product.jsx'
import Breadcrum from './components/original/breadcrum/Breadcrum.jsx'
const routes=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/product",
    element:<Breadcrum/>,
  },
  {
    path:"/product/:id",
    element:<Product/>
  },
  
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={routes}>
    <App  />
    </RouterProvider>
  // </StrictMode>,
)
