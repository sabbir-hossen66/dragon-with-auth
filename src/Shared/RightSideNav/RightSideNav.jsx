import React from 'react';
import { BsGoogle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className='p-4 flex flex-col gap-2'>
        <h2>Login with</h2>
        <button className=' btn btn-outline'>
          <BsGoogle />
          Google
        </button>
        <button className=' btn btn-outline'>
          <FaGithub />
          Github
        </button>
      </div>

      <div className='p-4 flex flex-col'>
        <h2>Find Us On</h2>
        <a className='flex items-center border rounded-t-lg p-2' href="">
          <BiLogoFacebookCircle className='mr-2' />
          <span>facebook</span>
        </a>
        <a className='flex items-center border-x p-2' href="">
          <FaTwitterSquare className='mr-2' />
          <span>Twitter</span>
        </a>
        <a className='flex items-center border rounded-b-lg p-2' href="">
          <IoLogoInstagram className='mr-2' />
          <span>Instagram</span>
        </a>
      </div>
      {/* q-zone */}
      <div className='p-4 flex flex-col gap-2'>
        <h2>q-zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;