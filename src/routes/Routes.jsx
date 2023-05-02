import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/main/Main';
import Home from '../pages/home/Home';
import BlogPages from '../pages/blog/BlogPages';
import SingleDetail from '../pages/singleDetail/SingleDetail';

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
                path:'/category',
                element:<SingleDetail></SingleDetail>,
            }
        ]
    }
])

export default router;