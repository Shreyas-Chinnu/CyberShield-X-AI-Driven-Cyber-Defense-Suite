import React from 'react';
import Footer from '../Footer/Footer';
import { useTypewriter, Cursor } from "react-simple-typewriter"

const HomePage = () => {
    const [text] = useTypewriter({
        words: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Next JS Developer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 120
    });

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "./Resume/Shreyas M - Updated.pdf";
        link.download = "Shreyas M - Updated.pdf";
        link.click();
    }

    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row items-center  p-10'>
                <div className='w-full md:w-1/2 flex flex-col dark:bg-black text-black dark:text-white gap-4'>
                    <p className='text-3xl'>Hello, <span>I'm</span></p>
                    <p className='text-6xl font-extrabold'>Shreyas M</p>
                    <p className='text-3xl md:4xl'>{text}<Cursor cursorStyle="|" /></p>

                    <button className='border-2 w-full md:w-1/2 rounded-full shadow-2xl dark:shadow-2xl dark:shadow-gray-700 dark:border-gray-700 p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black' onClick={handleDownload}>
                        Download resume
                    </button>
                </div>
                <div className='w-full md:w-1/2 mt-4 md:mt-0'>
                    <img className="block dark:hidden mx-auto" src="/ImageAssets/Logo.jpg" alt="programming_logo" />
                    <img className="hidden dark:block mx-auto" src="/ImageAssets/Logo.jpg" alt="programming_logo" />
                </div>
            </div>
            
            {/* Footer should be inside the return statement */}
            <Footer />
        </div>
    );
}

export default HomePage;
