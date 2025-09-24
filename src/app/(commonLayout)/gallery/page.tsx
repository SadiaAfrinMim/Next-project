import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div>
            <h1 className='text-center'>Regular Image Tag</h1>
            <img src="https://i.ibb.co.com/7tPVqq49/Sagingan-Festival.png" alt=""  width={500} height={500} className='mx-auto'/>
            <h1 className='text-center'>next.js Image Tag</h1>
             <Image src="https://i.ibb.co.com/7tPVqq49/Sagingan-Festival.png" alt="next image"  width={500} height={500} className='mx-auto'/>
        </div>
    );
};

export default GalleryPage;