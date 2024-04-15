import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title.slice(1, 10)}</h2>

        <div className="card-actions">
          {
            details.length > 200 ?
              <p>{details.slice(0, 190)} <Link to={`/news/${_id}`}><span className='text-green-500'>read more</span></Link></p>
              :
              <p>{details}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default NewsCard;