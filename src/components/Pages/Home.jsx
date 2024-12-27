import React from 'react';
import About from './About';
import Card from '../Cards/Card';
import ComingSoon from './ComingSoon';

const Home = () => {
  return (
    <div className='home-page'>
        <About />
        <Card />
        <ComingSoon />
    </div>
  )
}

export default Home