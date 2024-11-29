import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
