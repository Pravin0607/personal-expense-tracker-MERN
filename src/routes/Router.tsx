import DashboardLayout from "@/layouts/DashboardLayout";
import Ai from "@/pages/Ai";
import Categories from "@/pages/Categories";
import Dashboard from "@/pages/Dashboard";
import Expenses from "@/pages/Expenses";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import PageNotFound from "@/pages/PageNotFound";
import Reports from "@/pages/Reports";
import SignUp from "@/pages/SignUp";

import { createBrowserRouter } from "react-router-dom";

const Router= createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/dashboard/',
        element:<DashboardLayout/>,
        children:[
            {
                path:'',
                element:<Dashboard/>
            },
            {
                path:'expenses',
                element:<Expenses/>
            },
            {
                path:"reports",
                element:<Reports/>   
            },
            {
                path:"categories",
                element:<Categories/>
            },
            {
                path:"ai",
                element:<Ai/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'*',
        element:<PageNotFound/>
    }
]);

export default Router;