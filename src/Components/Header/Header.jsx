
import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {

  return (
    <div className='text-center max-w-screen-2xl mx-auto justify-between'>
      <img src={logo} alt="" />
      <h2 className='text-2xl'>time:{moment().format("dddd, MMMM-D-YYYY, h:mm:ss a")}</h2>
    </div>
  );
};

export default Header;