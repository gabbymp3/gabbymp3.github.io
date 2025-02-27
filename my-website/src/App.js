import './App.css';
import React from 'react';
import Bunny from './Components/Bunny';
import Button from './Components/Button';
import Horse from './Components/Horse';
import Ethel from './Components/Ethel';
import YoutubeEmbed from './Components/YoutubeEmbed';
import Game from './Components/Game';



const user = {
  name: 'Gabriella Messenger',
  imageUrl: 'https://avatars.githubusercontent.com/u/77449094?v=4',
  imageSize: 100,
};




function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='avatar'
        src={user.imageUrl}
        alt={'user.name'} 
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}/>
        <p>
          Hello and welcome to my website! Enjoy your stay.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=nulvWqYUM8k"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nosferatu (2024) trailer :)
        </a>
      </header> 
    </div>
  );
}


function App() {
  return (
    <div
      style={{
        backgroundColor: '#806481',
        minHeight: '100vh',
        padding: '5px',
        fontFamily: 'Lobster',
      }}
    >
      <App1 />
      <Bunny />
      <Horse />
      <Ethel />
      <div className="App">
      <h1>Borzoi dog taking a bath by himself</h1>
      <YoutubeEmbed embedId={'sZW5jySoFTM'} />
      </div>
      <Game />

    </div>
  );
}




export default App;