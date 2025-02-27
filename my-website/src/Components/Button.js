import React from 'react';

function Button ({url, text}) {
    return (
      <button
      onClick={() => window.open(url)}
      style={{
        backgroundColor: '#db83d0',
        padding: '10px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        color: 'black',
      }}
    >
      {text}
    </button>
    );
  }


export default Button;
  