import React from 'react';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';


const Home = () => {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-4 max-w-screen-2xl mx-auto justify-between gap-6 '>
        <div className='text-2xl border-2 border-red-200'><LeftSideNav></LeftSideNav></div>
        <div className='text-2xl border-2 border-red-200'>Coming soon asitece</div>
        <div className='border-2 border-red-200'><RightSideNav></RightSideNav></div>
      </div>

    </>
  );
};

export default Home;