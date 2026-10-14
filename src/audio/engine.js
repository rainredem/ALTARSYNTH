import * as Tone from "tone";


// =====================
// GLOBAL EFFECTS
// =====================

export const reverb =
new Tone.Reverb({

    decay:5,

    wet:0.5

});


export const delay =
new Tone.PingPongDelay({

    delayTime:"8n",

    feedback:0.3,

    wet:0.3

});


export const masterFilter =
new Tone.Filter({

    frequency:2500,

    type:"lowpass"

});



// цепочка мастера

masterFilter
.connect(delay)
.connect(reverb)
.toDestination();





// =====================
// DRUMS
// =====================


export const kick =
new Tone.MembraneSynth({

volume:5,

pitchDecay:0.05,

envelope:{

attack:0.001,

decay:0.5,

sustain:0

}

})
.connect(masterFilter);





export const snare =
new Tone.NoiseSynth({

volume:0,

envelope:{

attack:0.001,

decay:0.2,

sustain:0

}

})
.connect(masterFilter);





export const hat =
new Tone.MetalSynth({

volume:-4,

frequency:250

})
.connect(masterFilter);







// =====================
// BASS
// =====================


export const bass =
new Tone.MonoSynth({

volume:8,


oscillator:{

type:"fatsawtooth"

},


envelope:{

attack:0.05,

decay:0.25,

sustain:0.8,

release:1

}

})
.connect(masterFilter);








// =====================
// PAD
// =====================


export const pad =
new Tone.PolySynth(

Tone.Synth,

{

volume:-3,


oscillator:{

type:"triangle"

},


envelope:{

attack:1,

release:3

}

}

)
.connect(masterFilter);







// =====================
// LEAD
// =====================


export const lead =
new Tone.MonoSynth({

volume:5,


oscillator:{

type:"triangle"

},


envelope:{

attack:0.02,

release:1

}

})
.connect(masterFilter);







// =====================
// FX
// =====================


export const fx =
new Tone.Synth({

volume:2

})
.connect(masterFilter);








// =====================
// FIRE
// =====================


export const fire =
new Tone.NoiseSynth({

volume:4,


noise:{

type:"pink"

},


envelope:{

attack:1,

sustain:1,

release:2

}

})
.connect(masterFilter);






// =====================
// WIND
// =====================


export const wind =
new Tone.NoiseSynth({

volume:-1,


noise:{

type:"white"

},


envelope:{

attack:1,

sustain:0.7,

release:3

}

})
.connect(masterFilter);
