import React, { useState } from 'react';
import { contactusbg, phone } from '../assets';
import { AppText } from '../assets/constants';
// import SectionHeading from '../Shared/SectionHeading';
import toast from 'react-hot-toast';

function ContactUs() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Show loader when submit button is clicked

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                message
            })
        };

        try {
            const response = await fetch("https://my-portfolio-server-7zjh.onrender.com/send-email", options);
            console.log('response', response)
            if (response.ok) {
                toast.success("Message sent successfully");
            } else {
                toast.error("Error occurred while sending message");
            }

        } catch (error) {
            console.error('Error:', error);
            toast.error("Error occurred while sending message");
        } finally {
            setEmail("");
            setMessage("");
            setIsLoading(false); // Hide loader after the operation is complete
        }
    };

    return (
        <div className='w-full h-full flex justify-center overflow-y-auto items-center custom-scrollbar '>
            <div className=' mt-20 h-[90%] w-full mr-4 flex flex-col  bg-white rounded-lg shadow-md'>
                <div className='w-full p-10 flex h-[10%] items-center gap-8 '>
                    <span className='text-4xl font-bold'>Contact Me</span>
                    <div className=' font-bold border-b-2 w-60 border-blue-300'></div>
                </div>
                <div className='w-full md:px-32  px-10  h-[10%] flex flex-col   gap-4 '>
                    <span className='text-gray-300 md:text-lg text-xs font-bold'>Contact Me To Discuss And Collaborate.</span>
                    {/* <span className='text-lg font-bold w-full '> Ready to Discuss And communicate</span> */}
                </div>
                <div className='flex flex-col md:flex-row items-center gap-2 justify-evenly h-[80%]   px-10 py-20'>
                    <div className='md:w-[50%] w-[40%] h-[40%] md:h-full'>
                        <img src={contactusbg} alt='contact' className="w-[100%] mr-10 md:h-40% object-cover " />

                    </div>
                    <div className=' md:w-[50%] w-full h-[60%] md:h-full flex flex-col justify-center'>
                        <div className='flex flex-col '>
                            <label className='text-gray-400 '>Email</label>
                            <input
                                type="text"
                                placeholder='yourname@gmail.com'
                                className='border-[1.5px] px-2 h-10 focus:outline-none border-purple-300 hover:border-purple-500 rounded-md'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-gray-400 '>Message</label>
                            <textarea
                                type="text"
                                rows={7}
                                placeholder='Type your message here'
                                className='border-[1.5px] px-2 hover:border-purple-500 focus:outline-none border-purple-300 rounded-md'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button
                                className='transition-all ease-in-out hover:scale-110 bg-purple-500 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-white  rounded-md'
                                onClick={handleSubmit}
                                disabled={isLoading} // Disable the button when loading
                            >
                                {isLoading ? ( // Show loader if isLoading is true
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2-7.938A7.96 7.96 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"></path>
                                    </svg>
                                ) : (
                                    "Submit"
                                )}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    );
}

export default ContactUs;
