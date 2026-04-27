import Link from 'next/link';
import React from 'react';
import { Button } from "@heroui/react";

const NotFoundPage = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center'>
            <h1 className='text-4xl font-bold text-red-600 mb-4'>
                404 - Page Not Found
            </h1>
            <p className='mb-6 text-gray-500'>
                The page you are looking for doesn’t exist.
            </p>
            <Link href="/">
                <Button color="primary">Go Back Home</Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;