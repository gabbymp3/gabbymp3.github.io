import React from 'react';
import Button from './Button';


function Bunny (){
    return (
      <div
        style={{
        backgroundColor: '#EDE597',
        textAlign: 'center',
        padding: '20px',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
  
      }}
      >
        <h1> This is the magnificent BUNNY. </h1>
        <h2> She is stunning and beautiful. And also incredibly smart. </h2>
        <Button url= 'https://www.reddit.com/r/Rabbits/' text = 'Show me bunnies!' />
        <h3> Here are some bunny facts: </h3>
        <p> A single bunny is a lonely bunny. Apparently, they are very social creatures and 
          can become easily depresssed if they are alone. Sad :(
        </p>
        <p> Bunnies can live for up to 12 years! They're an investment. Invest with care and intention!</p>
        <p> Most rabbits can turn their ears 180 degrees. They are masters of hearing! </p>
        <p> Baby rabbits are called 'kittens', much like baby cats. Aw! </p>
        <div>
        <img
          className = 'bunny'
          src = 'https://www.thepetvet.co.uk/storage/app/uploads/public/a26/140/126/648_464_0_0_crop/iStock-1209922648.jpg'
          alt = 'Bunny'
          style = {{
            width: 300,
            height: 230,
            backgroundColor: '#6fc1eb',
            padding: '10px'
          }}
        />
        </div>
      </div>
    );
  }

  export default Bunny;