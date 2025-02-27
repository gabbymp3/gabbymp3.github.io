import Button from './Button';

function Ethel() {
    return (
      <div
        style={{
          backgroundColor: '#EDE597',
          textAlign: 'center',
          display: 'flex',
          padding: '20px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>This is the lovely Ethel Cain. I quite like her music and style.</h1>
        <h2>One day I hope to see her in concert!</h2>
        <Button url = 'https://www.tumblr.com/mothercain' text = 'Show me her Tumblr!' />
        <h3> Here are some of my favorites of hers:  </h3>
        <p> Sunday Morning: Knuckle Velvet, Casings, Head in the Wall  </p>
        <p> Inbred: Crush  </p>  
        <p> Preacher's Daughter: Family Tree, Gibson Girl, Sun Bleached Flies </p>
        <p> Perverts: Punish, Amber Waves, Vacillator  </p>   
        <div> 
        <img
          className="ethel"
          alt="ethel"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrumXY-vOOJGTWcchvEWeaCh-UEx2ozTQr3g&s"
          style={{
            width: 300,
            height: 400,
            backgroundColor: '#6fc1eb',
            padding: '10px',
            marginTop: '20px',
          }}
        />
        </div>
      </div>
    );
  }

    export default Ethel;