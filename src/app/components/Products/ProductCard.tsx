import { IProduct } from '@/type';
import Image from 'next/image';
import React from 'react';



const ProductCard = ({product}:{product:IProduct}) => {
    return (
        <div className='bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300'>
            <div className='relative w-full h-52 object-contain'>
                <Image
                src={product?.image}
                alt={product?.product_name}
                width={1500}
                height={800}
                className='rounded-t-lg h-56'></Image>

            </div>
            
            <div className='p-6'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-bold text-gray-800'>
                        {product?.product_name}
                    </h2>

                </div>
               
            </div>
        </div>
    );
};

export default ProductCard;