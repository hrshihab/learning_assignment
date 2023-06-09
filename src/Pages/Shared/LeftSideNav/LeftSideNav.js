import React from 'react';
import { Link, useParams, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const LeftSideNav = () => {
  const { id } = useParams(); // Get the category ID from the URL params
  const topicsData = useLoaderData();
  useTitle('Topics')

  if(!topicsData) return null ;


  // Find the topics based on the category ID
  const category = topicsData.find(category => category.tutorial_category_id === parseInt(id));
  const categoryTopics = category ? category.topics : [];

  return (
    <div>
      <h2>Topics</h2>
      {/* Render the topics based on the category */}
      {categoryTopics.map(topic => (<p >
        <Link key={topic.id} to={`/topics/${topic.id}`} style={{textDecoration:'none'}}>
          {topic.topic_name}
        </Link>
      </p>
       
      ))}
     
    </div>
  );
};

export default LeftSideNav;
