import ProductCard from '@/app/components/Products/ProductCard';
import { IProduct } from '@/type';
import React from 'react';

const Productsapage = async() => {
    const res = await fetch('http://localhost:5000/products',{
      cache:"no-store"
    });
    const products = await res.json();
    // console.log(products)
    return (
        <div>
            <h1 className='text-center'>All products</h1>
            <div className='grid grid-cols-3 gap-4 w-[90%] mx-auto'>
              {
  products.map((product: IProduct) => {
    return <ProductCard key={product.id} product={product} />
  })
}

            </div>
            
        </div>
    );
};

export default Productsapage;