import { getNewsDetails } from '@/lib/data';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CiBookmark } from "react-icons/ci";
import { FaArrowRight, FaShareSquare } from "react-icons/fa";
import {  FaStar } from 'react-icons/fa6';
import { IoEye } from "react-icons/io5";

export const generateMetadata =async({params})=>{
const {id}=await params ;
const news=await getNewsDetails(id);
console.log(news);
return{
    title: news.data[0].title,
   description: news.details,
}
}
const DetailsPage =async ({params}) => {
    const {id}=await params;
    const newsDetails=await getNewsDetails(id);
    const item=newsDetails.data[0];
    console.log(item)
    
    
    return (
       
           <div className="w-10/12 mx-auto card bg-base-100 shadow-sm my-7">

            <div className="">



                <div className='flex justify-between items-center bg-base-300 p-3 rounded-2xl'>
                    <div className='flex gap-4 items-center'>
                        <Image
                            src={item.author?.img}
                            width={40}
                            height={40}
                            className='rounded-full'
                            alt="Shoes" />

                        <div>
                            <p className='font-bold'>{item.author?.name}</p>
                            <p className='text-gray-500'>{item.author?.published_date}</p>
                        </div>

                      
                    </div>

                    <div className='flex text-xl gap-3'>
                        <CiBookmark />
                        <FaShareSquare />
                    </div>


                </div>


               <h2 className="card-title my-5">{item.title}</h2>
                <Image src={item.image_url} width={500} height={500} alt='images'/>
                <p className='my-4 text-gray-500'>{item.details}</p>
                <div className="card-actions justify-start">
                    <Link href={`/category/${item.category_id}`}><button className="btn text-white bg-red-500">See All in category<FaArrowRight/></button></Link>
                    
                </div>
                <div className='flex justify-between items-center'>

                <div className='flex items-center gap-3 my-5'>
                 <div className='flex text-amber-600 '>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    
                </div>
                <div>
                    <p className='text-black'>{item.rating?.number}</p>
                </div>

                </div>
                <div className='flex items-center gap-3'>
                    <IoEye className='text-lg' />
                    <p>{item.total_view}k</p>
                </div>
               
                </div>
               
               
            </div>
        </div>
    );
};

export default DetailsPage;