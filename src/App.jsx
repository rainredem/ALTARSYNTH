import * as Tone from 'tone';
import { useState } from 'react';

import Keyboard from './components/Keyboard.jsx';

import fireGif from './assets/fire.gif';

function App() {
  const [fire, setFire] = useState(false);

  async function start() {
    await Tone.start();
  }

  return (
    <div
      style={{
        background: '#080604',

        color: 'white',

        minHeight: '100vh',

        textAlign: 'center',

        paddingTop: '40px',
      }}
    >
      <h1>RITUAL SYNTH</h1>
      <button onClick={start}>START RITUAL</button>
      <div
        style={{
          height: '350px',

          display: 'flex',

          justifyContent: 'center',

          alignItems: 'center',
        }}
      >
        {fire && (
          <img
            src={fireGif}
            style={{
              width: '280px',

              filter: 'drop-shadow(0 0 30px orange)',
            }}
          />
        )}
      </div>
      <Keyboard setFire={setFire} />{' '}
    </div>
  );
}

export default App;
