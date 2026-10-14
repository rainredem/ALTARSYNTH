import * as Tone from 'tone';

// =====================
// MASTER
// =====================

const master = new Tone.Gain(0.85).toDestination();

// =====================
// DRUMS
// =====================

const drumComp = new Tone.Compressor({
  threshold: -18,
  ratio: 5,
}).connect(master);

export const kick = new Tone.MembraneSynth({
  pitchDecay: 0.05,

  octaves: 5,

  envelope: {
    attack: 0.001,
    decay: 0.45,
    sustain: 0,
  },
}).connect(drumComp);

const snareVerb = new Tone.Reverb({
  decay: 1.5,

  wet: 0.25,
}).connect(drumComp);

export const snare = new Tone.NoiseSynth({
  volume: -5,

  envelope: {
    attack: 0.001,
    decay: 0.2,
    sustain: 0,
  },
}).connect(snareVerb);

export const hat = new Tone.MetalSynth({
  volume: -8,

  frequency: 250,

  envelope: {
    attack: 0.001,
    decay: 0.05,
  },
}).connect(drumComp);

// =====================
// BASS
// =====================

const bassFilter = new Tone.Filter({
  frequency: 350,

  type: 'lowpass',
});

const bassDist = new Tone.Distortion({
  distortion: 0.2,
});

bassFilter.connect(bassDist).connect(master);

export const bass = new Tone.MonoSynth({
  volume: -2,

  oscillator: {
    type: 'fatsawtooth',
  },

  envelope: {
    attack: 0.05,
    decay: 0.25,
    sustain: 0.8,
    release: 1,
  },
}).connect(bassFilter);

// =====================
// PAD
// =====================

const padFilter = new Tone.Filter({
  frequency: 1800,

  type: 'lowpass',
});

const padChorus = new Tone.Chorus({
  frequency: 0.8,

  depth: 0.8,

  wet: 0.5,
}).start();

const padReverb = new Tone.Reverb({
  decay: 10,

  wet: 0.65,
});

padFilter.connect(padChorus).connect(padReverb).connect(master);

export const pad = new Tone.PolySynth(
  Tone.Synth,

  {
    volume: -8,

    oscillator: {
      type: 'triangle',
    },

    envelope: {
      attack: 1.5,
      decay: 1,
      sustain: 0.8,
      release: 4,
    },
  }
).connect(padFilter);

// =====================
// NEW LEAD
// =====================

const leadFilter = new Tone.Filter({
  frequency: 2800,

  type: 'lowpass',
});

const leadDelay = new Tone.PingPongDelay({
  delayTime: '8n',

  feedback: 0.35,

  wet: 0.35,
});

const leadReverb = new Tone.Reverb({
  decay: 3.5,

  wet: 0.35,
});

leadFilter.connect(leadDelay).connect(leadReverb).connect(master);

export const lead = new Tone.MonoSynth({
  volume: 2,

  oscillator: {
    type: 'triangle',
  },

  filter: {
    frequency: 2500,
    Q: 2,
  },

  envelope: {
    attack: 0.02,

    decay: 0.25,

    sustain: 0.35,

    release: 1.2,
  },
}).connect(leadFilter);

// =====================
// ARP
// =====================

const arpDelay = new Tone.PingPongDelay({
  delayTime: '16n',

  feedback: 0.35,

  wet: 0.45,
}).connect(master);

export const arp = new Tone.Synth({
  oscillator: {
    type: 'triangle',
  },
}).connect(arpDelay);

// =====================
// FX
// =====================

const fxReverb = new Tone.Reverb({
  decay: 8,

  wet: 0.7,
}).connect(master);

export const fx = new Tone.Synth({
  volume: -3,

  oscillator: {
    type: 'sine',
  },

  envelope: {
    attack: 0.4,

    release: 4,
  },
}).connect(fxReverb);
// =====================
// RITUAL FX
// =====================

const fireFilter = new Tone.Filter({
  frequency: 800,

  type: 'lowpass',
});

const fireReverb = new Tone.Reverb({
  decay: 4,

  wet: 0.5,
});

fireFilter.connect(fireReverb).connect(master);

export const fire = new Tone.NoiseSynth({
  volume: -8,

  noise: {
    type: 'pink',
  },

  envelope: {
    attack: 0.05,
    decay: 0.4,
    sustain: 0.2,
    release: 1,
  },
}).connect(fireFilter);

const windFilter = new Tone.Filter({
  frequency: 1200,

  type: 'highpass',
});

const windReverb = new Tone.Reverb({
  decay: 8,

  wet: 0.7,
});

windFilter.connect(windReverb).connect(master);

export const wind = new Tone.NoiseSynth({
  volume: -10,

  noise: {
    type: 'white',
  },

  envelope: {
    attack: 1,
    decay: 2,
    sustain: 0.5,
    release: 3,
  },
}).connect(windFilter);
