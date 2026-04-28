import LeftSideBar from '@/component/HomePage/news/LeftSideBar';
import RightSideBar from '@/component/HomePage/news/RightSideBar';
import { getCategory, getCategoryDetails } from '@/lib/data';
import React from 'react';

const NewsDetails = async ({ params }) => {
    const { id } = await params
    const data = await getCategory();

    const dataTitle = data.data.news_category

    const categoryDetails = await getCategoryDetails(id);
    const news = categoryDetails.data;
    return (
        <div className="grid grid-cols-12 w-10/12 mx-auto my-10 gap-7">
            <LeftSideBar dataTitle={dataTitle} activeId={id} />

            <div className=" col-span-6">
                <h1>All news</h1>

                {
                    news.map((item, id) => (
                        <div className="border my-4" key={id}>
                            <p>{item.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className=" col-span-3 ">
                <p className="text-lg font-semibold">LogIn</p>
                <RightSideBar />
            </div>

        </div>
    );
};

export default NewsDetails;