import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const CardDisplay = ({cards}) => {
  const {description,topic_name,image_link,example} = cards;
  return (
    <Card style={{ width: '40rem' }}>
      <Card.Img variant="top"  style={{height:'300px' }} src={image_link} />
      <Card.Body>
        <Card.Title>{topic_name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{example}</ListGroup.Item>
      </ListGroup>
 
     
    </Card>
  );
};

export default CardDisplay;