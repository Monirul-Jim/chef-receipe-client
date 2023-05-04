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
import PrivateRoute from './privateRoute/PrivateRoute';
import ErrorElement from '../layout/errorPage/ErrorElement';
import SingleChefDetails from '../pages/singlechef/SingleChefDetails';

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
            element:<PrivateRoute><SingleChef></SingleChef></PrivateRoute> ,
            loader:({params})=>fetch(`http://localhost:5000/data/${params.id}`)
        },
        // {
        //     path:':id',
        //     element:<SingleChefDetails></SingleChefDetails>,
        //     loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        // }
      ]
    },
    {
        path: "*",
        element:<ErrorElement></ErrorElement> ,
      },
    
])
export default router;