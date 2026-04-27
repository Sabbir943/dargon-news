'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLinks = ({href,children}) => {
    const pathName=usePathname();
    const isActive=pathName===href;
    return (
        <>
        
        <Link className={`${isActive?"text-blue-600 border-b border-b-blue-600":""}`} href={href}>{children}</Link>
        </>
    );
};

export default MyLinks;