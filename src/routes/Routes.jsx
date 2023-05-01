import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/main/Main';
import Home from '../pages/home/Home';
import BlogPages from '../pages/blog/BlogPages';

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
            }
        ]
    }
])

export default router;