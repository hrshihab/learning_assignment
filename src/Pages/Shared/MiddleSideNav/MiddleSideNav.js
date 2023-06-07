import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardDisplay from '../Card/CardDisplay';

const MiddleSideNav = () => {

  const descriptions = useLoaderData();
  
  return (
    <div>
      {
        <CardDisplay cards ={descriptions[0]} ></CardDisplay>
      }
      
    </div>
  );
};

export default MiddleSideNav;