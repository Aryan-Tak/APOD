import React , {useState} from 'react';

function Footer({ toggleShow , data }) {
    
    return (
        <div className='font-mono md:flex-row items-center justify-between bg-gray-800 text-white opacity-40 p-4 w-screen  shadow-lg fixed bottom-0 z-20'>
            <div className='flex items-center'>
                <h1 className='text-lg md:text-xl font-semibold'>APOD Project</h1>
            </div>
            <div className='flex items-center justify-between w-full md:w-auto mt-2 md:mt-0'>
                <h1 className='text-2xl md:text-3xl font-bold'>{data?.title}</h1>
                <button 
                onClick={toggleShow}
                className='ml-4'>
                    <img src="src/assets/info.svg" alt="info" className='w-6 h-6 md:w-8 md:h-8 bg-white p-1 rounded-full' />
                </button>
            </div>
        </div>
    );
}

export default Footer;
