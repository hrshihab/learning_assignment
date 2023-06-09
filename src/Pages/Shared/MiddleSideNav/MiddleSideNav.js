import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardDisplay from '../Card/CardDisplay';
import useTitle from '../../../hooks/useTitle';

const MiddleSideNav = () => {
  useTitle('Tutorial')

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