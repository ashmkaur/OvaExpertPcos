import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client"; 
import './index.css'
import React from "react";
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Lifestyle from './pages/lifestyle.jsx';
import Home from './Components/Home.jsx';
import Signup from './pages/Signup.jsx';
import Login from './Components/Logincomponent.jsx';
import Explore from './pages/explore.jsx';
import Counsel from './pages/counsel.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
<link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"></link>

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <Login />
            ),
        },
        {
            path: "/signup",
            element: (
                <Signup/>
            ),
        },
        {
            path: "/explore",
            element: (
                <Explore/>
            ),
        },
        {
          path: "/lifestyle",
          element: (
              <Lifestyle/>
          ),
      },
      {
        path: "/counsel",
        element: (
            <Counsel/>
        ),
    }
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)