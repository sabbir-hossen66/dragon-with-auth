import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
  const [apies, setApies] = useState([]);
  useEffect(() => {
    fetch('api.json')
      .then(res => res.json())
      .then(data => setApies(data))
  }, [])
  return (
    <div>
      <h2>{apies.length}</h2>
      {
        apies.map(api => <Link className='block'
          key={api.id} to={`/api/${api.id}`} >
          {api.name}
        </Link>)
      }

    </div>
  );
};

export default LeftSideNav;