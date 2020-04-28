import React from 'react';
import './homepage.styles.scss';

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>GPU</h1>
            <span className='title'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Processor</h1>
            <span className='title'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Motherboard</h1>
            <span className='title'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>RAM Module</h1>
            <span className='title'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Monitor</h1>
            <span className='title'>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
