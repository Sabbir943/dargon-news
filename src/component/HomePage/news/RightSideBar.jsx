"use client"
import React from 'react';
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { authClient } from '@/lib/auth-client';
const RightSideBar = () => {

    const handleGoogle=async()=>{
    const data = await authClient.signIn.social({
    provider: "google",
      
  });
  console.log(data)
 
    }

    const handlegithub=async()=>{
    const data = await authClient.signIn.social({
    provider: "github",
      
  });
  console.log(data)
 
    }
    return (
        <div className='space-y-3 mt-3'>
         <div  className=''>
          <button onClick={handleGoogle} className="btn flex items-center gap-3 text-blue-400"><FaGoogle /> Login With Google</button>
         </div>
         <div>
          <button  onClick={handlegithub}  className="btn flex items-center gap-3"><FaGithub /> Login With Github</button>
         </div>
        </div>
    );
};

export default RightSideBar;