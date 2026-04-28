import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { FaShareSquare } from "react-icons/fa";
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { IoEye } from "react-icons/io5";

const NewsCard = ({ item }) => {
    console.log(item)
    return (
        <div className="card bg-base-100 shadow-sm my-7">

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

                        {/* <div className='flex text-xl gap-3'>
                        <CiBookmark />
                        <FaShareSquare />
                    </div> */}
                    </div>

                    <div className='flex text-xl gap-3'>
                        <CiBookmark />
                        <FaShareSquare />
                    </div>


                </div>


               <h2 className="card-title my-5">{item.title}</h2>
                <Image src={item.image_url} width={500} height={500} alt='images'/>
                <p className='line-clamp-3 my-4 text-gray-500'>{item.details}</p>
                <div className="card-actions justify-start">
                    <Link href={`news/${item._id}`}><button className="btn text-blue-500">Read More..</button></Link>
                    
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

export default NewsCard;