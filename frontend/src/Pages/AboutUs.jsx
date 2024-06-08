
import React, { useEffect, useState } from 'react'
import { FcBusinessman, FcDocument, FcGraduationCap, FcBusinessContact, FcBusiness } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';
const AboutUs = () => {
    const location = useLocation();
    const [path, setpath] = useState("");
    useEffect(() => {
        setpath(location?.pathname);
    }, [location?.pathname])
    const navigate = useNavigate();
    return (
        <div className=' w-full h-screen flex items-start justify-center'>
            <div className='w-full h-20 py-2 flex  gap-2 items-center justify-center bg-white rounded-md shadow-md'>
                <button onClick={() => navigate("/")} className={` hover:bg-blue-500 ease-in-out  duration-300 hover:text-white flex flex-col justify-evenly items-center w-2/3 h-full rounded-md ${path === "/" ? "bg-blue-500 text-white" : "bg-gray-300"} `}>
                    <IoHome className='text-pink-500' size={24} />
                    <p className='text-xs font-bold'>Home</p>
                </button>

                <button onClick={() => navigate("/resume")} className={` hover:bg-blue-500  duration-300 hover:text-white flex flex-col justify-evenly items-center w-2/3 h-full rounded-md ${path === "/resume" ? "bg-blue-500 text-white" : "bg-gray-300"} `}>
                    <FcDocument size={24} />
                    <p className='text-xs font-bold'>Resume</p>
                </button>
                <button onClick={() => navigate("/project")} className={` hover:bg-blue-500  duration-300 hover:text-white flex flex-col justify-evenly items-center w-2/3 h-full rounded-md ${path === "/project" ? "bg-blue-500 text-white" : "bg-gray-300"} `}>
                    <FcBusiness size={24} />
                    <p className='text-xs font-bold'>Projects</p>
                </button>
                <button onClick={() => navigate("/experience")} className={` hover:bg-blue-500  duration-300 hover:text-white flex flex-col justify-evenly items-center w-2/3 h-full rounded-md ${path === "/experience" ? "bg-blue-500 text-white" : "bg-gray-300"} `}>
                    <FcGraduationCap size={24} />
                    <p className='text-xs font-bold'>Blogs</p>
                </button>
                <button onClick={() => navigate("/contact")} className={` hover:bg-blue-500  duration-300 hover:text-white flex flex-col justify-evenly items-center w-2/3 h-full rounded-md ${path === "/contact" ? "bg-blue-500 text-white" : "bg-gray-300"} `}>
                    <FcBusinessContact size={24} />
                    <p className='text-xs font-bold'>contact</p>
                </button>

            </div>
        </div>
    )
}



export default AboutUs
