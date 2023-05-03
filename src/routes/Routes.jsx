import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/main/Main';
import Home from '../pages/home/Home';
import BlogPages from '../pages/blog/BlogPages';
import SingleDetail from '../pages/singleDetail/SingleDetail';
import SingleData from '../pages/singleData/SingleData';
import SingleChef from '../pages/singleDetail/SingleChef';
import Login from '../layout/Login/Login';
import Register from '../layout/Register/Register';

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog-page',
                element:<BlogPages></BlogPages>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }

        ]
    },
    {
        path:'/category',
        element:<SingleDetail></SingleDetail>,
      children:[
        {
            path:':id',
            element:<SingleChef></SingleChef>,
            loader:({params})=>fetch(`http://localhost:5000/data/${params.id}`)
        }
      ]
    }
    
])
export default router;