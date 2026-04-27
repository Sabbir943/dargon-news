import React from 'react';
import logoImg from '../../assets/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";
const Header = () => {
    return (
        <div className='text-center space-y-3 py-8'>
            <Image src={logoImg} width={300} height={300} alt='logoImg' className='mx-auto'/>
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), " EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;