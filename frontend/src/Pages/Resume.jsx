import React from 'react'
import { educationSection, experienceSection, skillsList } from '../assets/constants'
import { FcBusinessman, FcDocument, FcGraduationCap, FcBusinessContact, FcBusiness } from "react-icons/fc";

const Resume = () => {
    return (
        <div className='w-full h-screen flex justify-center overflow-hidden items-center custom-scrollbar '>
            <div className=' mt-20 h-[90%] w-full mr-4   overflow-y-auto custom-scrollbar bg-white rounded-lg shadow-md'>
                <div className='w-full p-10 flex  items-center gap-8 '>
                    <span className='text-4xl font-bold'>Resume</span>
                    <div className=' font-bold border-b-2 w-60 border-blue-300'></div>
                </div>

                <div className='flex md:flex-row flex-col justify-evenly'>
                    <div className='md:w-1/3 w-full  h-fit flex flex-col '>

                        <div className='flex gap-4 px-4'>
                            <FcGraduationCap size={32} />
                            <span className='text-2xl font-semibold'>Education</span>

                        </div>
                        {
                            educationSection.map((item, index) => (

                                <div key={index} className="flex  relative w-full h-32 gap-2 px-4 justify-center  flex-col m-2
group md:hover:bg-blue-600 rounded-lg py-2">
                                    {/* <img src={item.image} alt='item' className="w-[300px] rounded-lg h-[230px] object-cover" /> */}
                                    <h1 className='font-bold md:group-hover:text-white'>{item.year}</h1>
                                    <h1 className='text-[12px] md:group-hover:text-gray-200 text-gray-500 '>{item.name}</h1>
                                    <h1 className='text-[12px] md:group-hover:text-gray-200 text-gray-500 '>{item.college}</h1>
                                </div>


                            ))
                        }
                    </div>
                   
                </div>
                <div className='flex md:flex-row flex-col justify-evenly mt-10 mb-10'>
                    <div className='md:w-1/3 w-full h-fit flex flex-col '>

                        <div className='flex gap-4 px-4 mb-4'>
                            {/* <FcGraduationCap size={32} /> */}
                            <span className='text-2xl font-semibold'>Working Skills</span>

                        </div>
                        <div className='grid grid-cols-4 md:grid-cols-4 gap-8  items-center'>
                            {skillsList.map((item, index) => (
                                <div key={index} className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full' >
                                    <img src={item.icon} alt='icon'
                                        className="w-[60px]" />
                                </div>

                            ))}
                        </div>
                    </div>
                    <div className='md:w-1/3 w-full h-fit flex flex-col '>

                        <div className='flex gap-4 px-4'>
                            {/* <FcBusiness size={32} /> */}
                            <span className='text-2xl font-semibold'>Knowledge</span>

                        </div>


                        <div className='flex gap-3 flex-wrap pt-8'>
                            <span className='p-2 bg-gray-300 rounded-md hover:bg-blue-500 hover:text-white'>Time Management</span>
                            <span className='p-2 bg-gray-300 rounded-md hover:bg-blue-500 hover:text-white'>Quick Learner</span>
                            <span className='p-2 bg-gray-300 rounded-md hover:bg-blue-500 hover:text-white'>Cricket</span>
                            <span className='p-2 bg-gray-300 rounded-md hover:bg-blue-500 hover:text-white'>Music</span>
                            <span className='p-2 bg-gray-300 rounded-md hover:bg-blue-500 hover:text-white'>Watching football</span>
                            <span className='p-2 bg-gray-300 rounded-md hover:bg-blue-500 hover:text-white'>Music</span>
                           
                        </div>




                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resume
