import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";
import Auth from "../layouts/Auth";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Main from "../components/Main";
import Lessons from "../components/pages/Lessons";
import LessonPage from "../components/pages/LessonPage";
import PrivateRoute from "./PrivateRoute";
import Tutorial from "../components/pages/Tutorials";
import AboutUs from "../components/pages/AboutUs";
import Profile from "../components/pages/Profile";
import UpdateProfile from './../components/pages/UpdateProfile';
import NotFound from './../components/pages/NotFound';


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
                path: "/lessons",
                element: <Lessons></Lessons>
            },
            {
                path: 'lesson/:id',
                element: <PrivateRoute> <LessonPage></LessonPage></PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch('/spanish_words.json');
                    const data = await res.json();
                    const lessonId = Number(params.id);
                    const lessonWords = data.filter(word => word.lesson_no === lessonId);
                    return lessonWords;
                }
            },
            {
                path :'/tutorials',
                element: <PrivateRoute><Tutorial></Tutorial> </PrivateRoute>
            },
            {
                path : '/aboutUs',
                element : <AboutUs></AboutUs>
            },
            {
                path :'/profile',
                element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
            },
            {
                path : '/profile/updateProfile',
                element : <PrivateRoute> <UpdateProfile></UpdateProfile> </PrivateRoute>
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
            }

        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>,
    }

]);

export default Router;