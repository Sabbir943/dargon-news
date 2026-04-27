
import React from 'react';
import MyLinks from './MyLinks';
import avatar from '@/assets/user.png'
import Image from 'next/image';

const NavBar = () => {
    return (
        <div className='flex justify-between items-center mt-5 w-10/12 mx-auto'>
           <div>
          </div>
          <div>
          <ul className='flex gap-4'>
            <li><MyLinks href={'/'}>Home</MyLinks></li>
            <li><MyLinks href={'/about'}>About</MyLinks></li>
            <li><MyLinks href={'/career'}>Career</MyLinks></li>
            
          </ul>
          </div>
          <div className='flex justify-between items-center gap-6 '>
            <Image src={avatar} width={30} height={30} alt='avatar image'/>
            <button className='bg-purple-600 text-white px-5 py-2 rounded-2xl '>LogIn</button>
          </div>
        </div>
    );
};

export default NavBar;