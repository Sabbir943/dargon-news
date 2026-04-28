import React from 'react';
import { PacmanLoader } from "react-spinners";
const loading = () => {
    return (
        <div className=''>
            <PacmanLoader className='mx-auto my-10' color='#87CEEB' size={40} />
        </div>
    );
};

export default loading;