import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./view/Dashboard.jsx";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'



const router = createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/dashboard', element: <Dashboard/>},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
