import React from 'react';
import bookimage from '../../assets/books.jpg';

const Banner = () => {
    return (
      <div className="flex justify-around items-center p-16 w-full">
        <div>
          <h1>fdsfh</h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div>
          <img className="w-3/12" src={bookimage} alt="" />
        </div>
      </div>
    );
};

export default Banner;