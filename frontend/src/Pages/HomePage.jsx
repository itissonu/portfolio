import React from 'react'
import { aboutSection } from '../assets/constants'
const HomePage = () => {
    return (
        <div className='w-full h-screen flex justify-center overflow-hidden  items-center custom-scrollbar '>
            <div className=' mt-20 h-[90%] w-full mr-4   overflow-y-auto custom-scrollbar bg-white rounded-lg shadow-md'>
                <div className='w-full p-10 flex  items-center gap-8 '>
                    <span className='text-4xl font-bold'>About</span>
                    <div className=' font-bold border-b-2 w-60 border-blue-300'></div>
                </div>
                <div className='w-full flex justify-center items-center   flex-col gap-2'>
                    <p className='w-[90%] h-full'>
                        I am a diligent and innovative full-stack developer with a passion for crafting robust and user-centric web applications. With a solid foundation in both frontend and backend technologies, I excel in leveraging the latest tools and frameworks to deliver seamless and intuitive user experiences. My expertise lies in designing and implementing scalable architectures, optimizing performance, and ensuring seamless integration across the stack. I thrive in dynamic environments where I can apply my problem-solving skills and collaborate with cross-functional teams to bring creative ideas to life. As a proactive learner, I am committed to staying abreast of emerging technologies and best practices in the ever-evolving field of web development.
                    </p>
                </div>
                <div className='text-2xl px-10 pt-4 font-semibold '>What I Do !</div>
                <div className='w-full h-fit flex md:flex-row md:flex-wrap flex-col mb-10'>
                    {
                        aboutSection.map((item, index) => (

                            <div key={index} className="flex  relative w-full md:w-[45%] h-80 items-center justify-center flex-col m-2
                group md:hover:bg-purple-600 rounded-lg py-2">
                                <img src={item.image} alt='item' className="w-[300px] rounded-lg h-[230px] object-cover" />
                                <h1 className='font-bold md:group-hover:text-white'>{item.title}</h1>
                                <h1 className='text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7'>{item.desc}</h1>
                            </div>


                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage
