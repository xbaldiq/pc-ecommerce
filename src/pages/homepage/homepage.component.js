import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const Homepage = (props) => {
  return (
    <div className='homepage'>
      <Directory history={props.history} />
    </div>
  );
};

export default Homepage;
