"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname()
  console.log(pathname)
    return (
        <nav className='w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between'>
          <Link href={"/"} className='text-xl font-bold'>NextJs</Link>  
          <div className='flex space-x-6'>
            <Link href="/products" className={`${pathname==="/products"?"text-blue-300 font-extrabold underline":"text-xl font-bold"}`}>products</Link>
             <Link href="/contact" className='hover:text-gray-300'> Contact</Link>
              <Link href="/login" className='hover:text-gray-300'>Login</Link>
                 <Link href="/gallery" className='hover:text-gray-300'>gallery</Link>

          </div>
        </nav>
    );
};

export default Navbar;