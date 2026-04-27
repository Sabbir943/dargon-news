import Header from '@/component/shared/Header';
import NavBar from '@/component/shared/NavBar';
import NewsDisplay from '@/component/shared/NewsDisplay';

import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <NewsDisplay/>
            <NavBar/>
            {children}
        </div>
    );
};

export default MainLayout;