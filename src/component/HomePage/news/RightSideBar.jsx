import React from 'react';
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const RightSideBar = () => {
    return (
        <div className='space-y-3 mt-3'>
         <div  className=''>
          <button className="btn flex items-center gap-3 text-blue-400"><FaGoogle /> Login With Google</button>
         </div>
         <div>
          <button className="btn flex items-center gap-3"><FaGithub /> Login With Github</button>
         </div>
        </div>
    );
};

export default RightSideBar;