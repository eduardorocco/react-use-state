import React from 'react';

const Button = ({ title, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isSelected ? '#f5d159' : '#0829a3',
        color: isSelected ? 'black' : 'white',
        padding: '12px 22px',
        margin: '5px',
        marginTop: '18px',
        cursor: 'pointer',
        borderRadius: '10px',
        border: 'none',
      }}
    >
      {title}
    </button>
  );
};

export default Button;
