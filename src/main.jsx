import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PanelControl from './pages/PanelControl'
<<<<<<< HEAD
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
=======
>>>>>>> 6e50b29055121fd7e9f3a036daa41bdbc8c26264
import './index.css'
import Login from './pages/auth/Login'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/PanelControl',
    element: <PanelControl />
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
