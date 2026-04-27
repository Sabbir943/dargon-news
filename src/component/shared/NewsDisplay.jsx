import React from 'react';
import Marquee from "react-fast-marquee";
const news = [
  {
    id: 1,
    description: "New AI technology is transforming the future of software development."
  },
  {
    id: 2,
    description: "Bangladesh launches a new metro rail expansion project in Dhaka."
  },
  {
    id: 3,
    description: "Global tech companies are investing heavily in cloud computing."
  },
  {
    id: 4,
    description: "University students are showing increased interest in competitive programming."
  }
];


const NewsDisplay = () => {
    return (
        <div className='w-10/12 mx-auto flex justify-between items-center bg-slate-300 p-4'>
            <button className='btn bg-red-600 px-5 py-2 font-bold text-white'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
              {
                news.map(n=>{
                    return <p className='mx-7 text-red-500' key={n.id}>{n.description}</p>
                })
              }
            </Marquee>
            
        </div>
    );
};

export default NewsDisplay;