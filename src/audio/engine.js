import * as Tone from "tone";


// =====================
// MASTER
// =====================

const master =
new Tone.Gain(1)
.toDestination();




// =====================
// DRUMS
// =====================


const drumComp =
new Tone.Compressor({

threshold:-20,

ratio:5

})
.connect(master);



export const kick =
new Tone.MembraneSynth({

volume:15,

pitchDecay:0.08,

octaves:7,


envelope:{

attack:0.001,

decay:1,

sustain:0,

release:0.3

}

})
.connect(drumComp);





export const snare =
new Tone.NoiseSynth({

volume:2,


envelope:{

attack:0.001,

decay:0.3,

sustain:0

}

})
.connect(drumComp);





export const hat =
new Tone.MetalSynth({

volume:-4,

frequency:250,


envelope:{

attack:0.001,

decay:0.05

}

})
.connect(drumComp);







// =====================
// BASS
// =====================


const bassFilter =
new Tone.Filter({

frequency:600,

type:"lowpass"

});



const bassDist =
new Tone.Distortion({

distortion:0.15

});



bassFilter
.connect(bassDist)
.connect(master);



export const bass =
new Tone.MonoSynth({

volume:8,


oscillator:{

type:"fatsawtooth"

},


envelope:{

attack:0.05,

decay:0.25,

sustain:0.9,

release:1

}

})
.connect(bassFilter);








// =====================
// PAD
// =====================


const padFilter =
new Tone.Filter({

frequency:1700,

type:"lowpass"

});



const padChorus =
new Tone.Chorus({

frequency:0.8,

depth:0.8,

wet:0.5

})
.start();



const padReverb =
new Tone.Reverb({

decay:8,

wet:0.6

});



padFilter
.connect(padChorus)
.connect(padReverb)
.connect(master);



export const pad =
new Tone.PolySynth(

Tone.Synth,

{

volume:-3,


oscillator:{

type:"triangle"

},


envelope:{

attack:1.5,

decay:1,

sustain:0.8,

release:4

}

}

)
.connect(padFilter);







// =====================
// LEAD
// =====================


const leadFilter =
new Tone.Filter({

frequency:3200,

type:"lowpass"

});



const leadDelay =
new Tone.PingPongDelay({

delayTime:"8n",

feedback:0.35,

wet:0.35

});



const leadReverb =
new Tone.Reverb({

decay:3,

wet:0.35

});



leadFilter
.connect(leadDelay)
.connect(leadReverb)
.connect(master);



export const lead =
new Tone.MonoSynth({

volume:6,


oscillator:{

type:"triangle"

},


envelope:{

attack:0.02,

decay:0.2,

sustain:0.5,

release:1

}

})
.connect(leadFilter);







// =====================
// FX
// =====================


const fxReverb =
new Tone.Reverb({

decay:8,

wet:0.7

})
.connect(master);



export const fx =
new Tone.Synth({

volume:2,


oscillator:{

type:"sine"

},


envelope:{

attack:0.4,

release:4

}

})
.connect(fxReverb);







// =====================
// FIRE
// =====================


const fireFilter =
new Tone.Filter({

frequency:900,

type:"lowpass"

});


fireFilter.connect(master);



export const fire =
new Tone.NoiseSynth({

volume:4,


noise:{

type:"pink"

},


envelope:{

attack:1,

decay:1,

sustain:1,

release:2

}

})
.connect(fireFilter);







// =====================
// WIND
// =====================


const windFilter =
new Tone.Filter({

frequency:1200,

type:"highpass"

});


windFilter.connect(master);



export const wind =
new Tone.NoiseSynth({

volume:0,


noise:{

type:"white"

},


envelope:{

attack:1,

decay:2,

sustain:0.7,

release:3

}

})
.connect(windFilter);
