import React from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import RightSideBar from '../Components/RightSideBar'
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from '../Pages/HomePage'
import AboutUs from '../Pages/AboutUs'
import ContactUs from '../Pages/ContactUs'
import ExperiencePage from '../Pages/ExperiencePage'
import ProjectPage from '../Pages/ProjectPage'
import Resume from '../Pages/Resume'
const Route = () => {

    // layout function 

    const Layout = () => {
        return (
            <div className='flex flex-col md:flex-row justify-evenly'>
                <div className='md:w-[25%] w-full h-screen'>
                    <div className='flex md:hidden h-[10%]'>
                        <AboutUs />
                    </div>
                    <div className='h-[90%] flex md:justify-normal justify-center md:h-full'>
                        <LeftSideBar />
                    </div>

                </div>
                <div className='md:w-[60%] w-full h-screen '>
                    <Outlet />
                </div>
                <div className='md:w-[15%] w-full md:flex hidden h-screen '>
                    <RightSideBar />
                </div>


            </div>
        )
    }

    // all routes 

    const BrowserRoute = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />
                },
                {
                    path: "/about",
                    element: <AboutUs />
                },
                {
                    path: "/contact",
                    element: <ContactUs />
                },
                // {
                //     path: "/experience",
                //     element: <ExperiencePage />
                // },
                {
                    path: "/project",
                    element: <ProjectPage />
                },
                {
                    path: "/resume",
                    element: <Resume />
                },
            ]
        }
    ])

    return (
        <RouterProvider router={BrowserRoute} />
    )
}

export default Route
