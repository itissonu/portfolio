import React, { useState } from 'react'

import fb from "../assets/fb.png"
import insta from "../assets/insta3.png"
import git from "../assets/git2.png"
import linledin from "../assets/linkedin2.png"
import resume from "../assets/cv.pdf"
import { FcPhone, FcFeedback, FcCalendar, FcDownload, FcList } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import RightSideBar from './RightSideBar'
import AboutUs from '../Pages/AboutUs'
const LeftSideBar = () => {
    const [togle, setTogle] = useState(false);
    return (
        <div className='w-full h-screen flex justify-center md:justify-start '>
            {/* <div className=' justify-end items-end w-full pr-5 fixed md:hidden flex z-30 '>
                <button onClick={() => setTogle(state => !state)} ><FcList size={28} /></button>
                <AboutUs />
            </div> */}
            <div className='w-[90%] h-[95%] flex relative flex-col md:mt-0  items-center '>
               
                <div className='w-[90%] flex flex-col items-center h-[75%] mt-40  bg-white  rounded-lg shadow-2xl'>
                    <div className='mt-20 items-center text-center  w-[90%] h-10'>
                        <span className='uppercase font-bold text-xs py-2 px-4 rounded-md '>
                            Soumya Ranjan Sahu
                        </span>
                    </div>
                    <div className=' items-center text-center  w-[90%] h-10'>
                        <span className='uppercase  font-semibold hover:bg-blue-500 hover:text-white cursor-pointer text-xs py-2 px-4 rounded-md  bg-gray-200'>
                            SoftWare developer
                        </span>
                    </div>
                    <div className='flex justify-evenly mt-4 w-[70%] h-10 '>
                        <a href="https://www.facebook.com" target='blank'><img src={fb} className='object-cover w-6 h-6' alt="" /></a>
                        <a href="https://www.instagram.com" target='blank'><img src={insta} className='object-cover w-10 h-6' alt="" /></a>
                        <a href="https://github.com/itissonu" target='blank'><img src={git} className='object-cover w-6 h-6' alt="" /></a>
                        <a href="http://www.linkedin.com/in/soumya-ranjan-sahu-064398248/" target='blank'><img src={linledin} className='object-cover w-6 h-6' alt="" /></a>



                    </div>
                    <div className='bg-gray-300 rounded-md shadow-md w-[90%] h-[40%] flex flex-col justify-evenly'>
                        <div className='flex gap-4 items-center border-gray-200 border-b-2 w-full h-1/4'><FcPhone size={26} />
                            <div className='flex flex-col'>
                                <p className='text-xs'>phone</p>
                                <p className='font-bold'>9777026811</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center border-gray-200 border-b-2 w-full h-1/4'><FcFeedback size={26} />
                            <div className='flex flex-col'>
                                <p className='text-xs'>E-mail</p>
                                <a href='mailto:soumyasundarmohapatra@gmail.com' target='blank' className=' text-wrap text-xs font-bold'>srssoumyaranjansahu123@gmail.com</a>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center border-gray-200 border-b-2 w-full h-1/4'><FaLocationDot className='text-red-500' size={26} />
                            <div className='flex flex-col'>
                                <p className='text-xs'>Location</p>
                                <p className='font-bold'>Bhubaneswar , India</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center  w-full h-1/4'><FcCalendar size={26} />
                            <div className='flex flex-col'>
                                <p className='text-xs'>Birthday</p>
                                <p className='font-bold'>13-oct , 2000</p>
                            </div>
                        </div>

                    </div>


                    <a href={resume} className='mt-10 w-full h-12 flex justify-center items-center' download="Resume" > <button className='bg-blue-500 hover:bg-blue-900 text-white font-bold rounded-md h-full w-1/2 flex px-2 justify-start gap-2 items-center text-xs'>  <FcDownload size={22} />DOWNLOAD-CV</button></a>

                </div>
            </div>
        </div>
    )
}

export default LeftSideBar
