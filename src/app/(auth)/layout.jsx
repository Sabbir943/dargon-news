import NavBar from '@/component/shared/NavBar';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    );
};

export default AuthLayout;