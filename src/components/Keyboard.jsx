import { useEffect, useState } from 'react';

import {
  kick,
  snare,
  hat,
  bass,
  pad,
  lead,
  fx,
  fire,
  wind,
} from '../audio/engine.js';

export default function Keyboard() {
  const [active, setActive] = useState([]);

  const [layers, setLayers] = useState({
    fire: false,
    wind: false,
  });

  const keys = {
    4: 'C2',
    5: 'Ab1',
    6: 'Bb1',

    7: ['C4', 'Eb4', 'G4'],

    8: ['Ab3', 'C4', 'Eb4'],

    9: 'C5',

    0: 'Eb5',
  };

  function toggleLayer(name, sound) {
    setLayers((prev) => {
      const state = !prev[name];

      if (state) {
        sound.triggerAttack();
      } else {
        sound.triggerRelease();
      }

      return {
        ...prev,

        [name]: state,
      };
    });
  }

  function press(key) {
    setActive((prev) => [...prev, key]);

    switch (key) {
      case '1':
        kick.triggerAttackRelease('C1', '8n');

        break;

      case '2':
        toggleLayer('fire', fire);

        break;

      case '3':
        toggleLayer('wind', wind);

        break;

      case '4':
      case '5':
      case '6':
        bass.triggerAttack(keys[key]);

        break;

      case '7':
      case '8':
        pad.triggerAttack(keys[key]);

        break;

      case '9':
      case '0':
        lead.triggerAttack(keys[key]);

        break;

      case ' ':
        fx.triggerAttackRelease('C6', '2n');

        break;
    }
  }

  function release(key) {
    setActive((prev) => prev.filter((item) => item !== key));

    switch (key) {
      case '4':
      case '5':
      case '6':
        bass.triggerRelease();

        break;

      case '7':
      case '8':
        pad.triggerRelease(keys[key]);

        break;

      case '9':
      case '0':
        lead.triggerRelease();

        break;
    }
  }

  useEffect(() => {
    function down(e) {
      const key = e.key.toLowerCase();

      if (
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' '].includes(key)
      ) {
        press(key);
      }
    }

    function up(e) {
      release(e.key.toLowerCase());
    }

    window.addEventListener('keydown', down);

    window.addEventListener('keyup', up);

    return () => {
      window.removeEventListener('keydown', down);

      window.removeEventListener('keyup', up);
    };
  }, []);

  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' '];

  return (
    <div>
      <h2>RITUAL CONTROLS</h2>

      <div>
        {buttons.map((key) => (
          <button
            key={key}
            onMouseDown={() => press(key)}
            onMouseUp={() => release(key)}
            style={{
              margin: '8px',

              padding: '20px',

              background:
                active.includes(key) ||
                (key === '2' && layers.fire) ||
                (key === '3' && layers.wind)
                  ? '#ff6600'
                  : '#222',

              color: 'white',

              border: '1px solid white',
            }}
          >
            {key === ' ' ? 'FX' : key}
          </button>
        ))}
      </div>
    </div>
  );
}
