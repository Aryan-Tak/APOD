import React from 'react';

function SideBar({toggleShow , data}) {
    

    return (
        <div 
        onClick={toggleShow}
        className='fixed top-0 right-0 flex flex-col mt-2 w-80 opacity-80 h-screen bg-white shadow-lg overflow-y-auto z-21'>
            <div className='flex flex-col justify-center p-4'>
                <h1 className='text-lg gap-1 mb-2 font-mono font-medium'>{data?.title}</h1>
            </div>
            <div className='flex flex-col justify-center bg-white p-4 gap-1'>
                <h2>{data?.date}</h2>
                <p className='text-center text-base gap-1 font-mono font-medium'>
                    {data?.explanation}
                </p>
            </div>
            {/* <div className='flex justify-center p-4'>
                <button
                onClick={toggleShow}
                className='rounded-full hover:shadow-md'>
                    <img src="src/assets/back.svg" alt="backButton" className='w-12 h-12 hover:w-16 hover:h-16' />
                </button>
            </div> */}
        </div>
    );
}

export default SideBar;
