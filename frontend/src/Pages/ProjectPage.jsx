import React, { useEffect, useState } from 'react'
import { AppText, portfolio } from '../assets/constants'
const ProjectPage = () => {
    const [portfolioList, setPortfolioList] = useState([]);
    const [portfolioListOrg, setPortfolioListOrg] = useState([]);

    useEffect(() => {

        setPortfolioList(portfolio);
        setPortfolioListOrg(portfolio)
    }, [])
    const filterPortfolio = (type) => {
        if (type === 'All') {
            setPortfolioList(portfolioListOrg);
        }
        else {
            const result = portfolioListOrg.filter(item => item.type === type);
            setPortfolioList(result)
            // console.log(result)
        }
    }
    return (
        <div className='w-full h-screen flex justify-center overflow-hidden items-center custom-scrollbar '>
            <div className=' mt-20 h-[90%] w-full mr-4   overflow-y-auto custom-scrollbar bg-white rounded-lg shadow-md'>
                <div className='w-full p-10 flex  items-center gap-8 '>
                    <span className='text-4xl font-bold'>Projects</span>
                    <div className=' font-bold border-b-2 w-60 border-blue-300'></div>
                </div>
                <div className='mt-5 flex justify-center flex-col font-times'>

                    <div className='flex flex-row justify-evenly gap-2 px-4 md:px-72'>
                        <button onClick={() => filterPortfolio('website')} className='border-purple-600 border-2 
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Web App</button>
                        <button onClick={() => filterPortfolio('mobile')} className='border-purple-600 border-2 
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Mobile App</button>
                    </div>
                    <div className='flex flex-col items-center w-full gap-3 content-center md:flex-row 
         p-4 '>
                        {portfolioList.map((item, index) => (
                            <a href={item?.website} className='w-full md:w-[30%]' target='_blank'>
                                <div key={index} className='p-2 flex w-full flex-col m-2 rounded-lg bg-purple-100
                transition-all ease-in-out group hover:scale-110'>
                                    <img src={item.imageUrl} alt='' className="h-[180px] object-cover rounded-lg" />
                                    <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center  font-bold'>{item.title}</h1>
                                    <h1 className='text-[12px] text-gray-500 px-6 pb-3'>{item.desc}</h1>

                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
