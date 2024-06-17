import React from 'react';

function Main(props) {
    const { data } = props; // Destructure 'data' from props

    return (
        <div className='flex-grow bg-cover flex justify-center items-center'>
            <img src={data?.hdurl} alt={data?.title || "BgImage"} className='max-w-full max-h-full' />
        </div>
    );
}

export default Main;
