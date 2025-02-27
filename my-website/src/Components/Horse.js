import React from 'react';
import Button from './Button';


function Horse(){
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
  
        <h1> This is the enigmatic HORSE. He is noble and galliant. And also very funny!</h1>
        
        <h2> He is a great friend to have. Just the other day, he gave me a ride when I was too tired to walk. Very noble indeed!</h2>
        <Button url = 'https://www.youtube.com/watch?v=YSab0E-7hCs' text = 'Show me horses!' />
        <div>
        <h3> Here are some horse facts: </h3>
        <p> Horses can sleep both lying down and standing up. They are very versatile sleepers! </p>
        <p> Horses have the largest eyes of any land mammal. They are very good at seeing things!
        </p>
        <p> Horses come in 3 basic body types: ponies, lights breeds, and heavy breeds. </p>
        <p> Like the bunny, horses are also very social creatures. Horses find safety in a herd and form strong social relationships with each other. 
            They use their senses to recognize familiar horses and spend time with those they have formed friendships with.
            Aw, just like us! </p>
        <img
          className = 'horse'
          src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zIGhkYMWhEmbHVnp4f705c4l-oQpinhgvg&s'
          alt = 'horse'
          style = {{
            width: 360,
            height: 230,
            backgroundColor: '#6fc1eb',
            padding: '10px'
          }}
        
        />
        </div>
      </div>
      
    )
  }

  export default Horse;