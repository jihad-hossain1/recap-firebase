import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Home from './components/Home/Home';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className=''>
      {/* <Home></Home> */}
      <Header></Header>
      <div className='mx-10 md:mx-40 border '>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;
