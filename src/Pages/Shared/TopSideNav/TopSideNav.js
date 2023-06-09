import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const TopSideNav = () => {
  const [categories,setCategories] = useState([]);
  useEffect(()=> {
    fetch('https://learning-server-site-hrshihab.vercel.app/categories')
    .then(res => res.json())
    .then(data => setCategories(data.tutorial_categories))
  },[])
  return (
    <div style={{display:'flex',justifyContent:'space-around',textDecoration:'none'}} className='mx-auto d-flex flex-wrap '>
      {categories.map(cat => <p style={{marginRight:'10px',marginTop:'10px'}} key={cat.id}>
        <Link to={`/categories/${cat.id}`} style={{ textDecoration: 'none' }}>{cat.tutorial_name}</Link>
      </p>)}
    </div>
  );
};

export default TopSideNav;