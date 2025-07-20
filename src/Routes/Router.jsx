import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";
import Auth from "../layouts/Auth";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Main from "../components/Main";
import AboutUs from "../components/pages/AboutUs";
import NotFound from './../components/pages/NotFound';
import ForgetPassword from "../components/pages/ForgetPassword";
import AddVisa from "../components/pages/AddVisas";
import PrivateRoute from "./PrivateRoute";
import AllVisas from "../components/pages/AllVisas";
import VisaDetails from './../components/pages/VisaDetails';
import MyApplications from "../components/pages/MyApplications";
import MyAddedVisas from "../components/pages/MyAddedVisas";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "",
                element: <Main></Main>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: "/addvisa",
                element: <PrivateRoute> <AddVisa></AddVisa> </PrivateRoute>
            },
            {
                path: "/visas",
                element: <AllVisas></AllVisas>
            },
            {
                path: "/visa/:id",
                element: <PrivateRoute> <VisaDetails></VisaDetails> </PrivateRoute>
            },
            {
                path : "/myApplications",
                element : <PrivateRoute> <MyApplications></MyApplications> </PrivateRoute>
            },
              {
                path : "/myAddedVisa",
                element : <PrivateRoute> <MyAddedVisas></MyAddedVisas> </PrivateRoute>
            }

        ]
    },
    {
        path: 'auth',
        element: <Auth></Auth>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/forget-password',
                element: <ForgetPassword></ForgetPassword>
            }

        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>,
    }

]);

export default Router;