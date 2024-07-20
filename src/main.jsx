import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Home/Home';
import Jobs from './Components/Header/Jobs/Jobs';
import AppliedJob from './Components/Header/AppliedJob/AppliedJob';
import About from './Components/Header/AppliedJob/About/About';
import Blogs from './Components/Header/AppliedJob/About/Blogs/Blogs';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/applied",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
