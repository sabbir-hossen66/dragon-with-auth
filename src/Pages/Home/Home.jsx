import React from 'react';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';
import { useLoaderData } from "react-router-dom";
import NewsCard from '../NewsCard/NewsCard'



const Home = () => {
  const news = useLoaderData()
  console.log(news);
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-4 max-w-screen-2xl mx-auto justify-between gap-6 '>
        <div className='text-2xl border-2 border-red-200'><LeftSideNav></LeftSideNav></div>
        {/* here is news section */}
        <div className='text-2xl border-2 border-red-200'>
          {
            news.map(singleNews => <NewsCard
              key={singleNews.id}
              news={singleNews}
            ></NewsCard>)
          }
        </div>
        <div className='border-2 border-red-200'><RightSideNav></RightSideNav></div>
      </div>

    </>
  );
};

export default Home;