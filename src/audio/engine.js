import * as Tone from "tone";


// =====================
// MASTER
// =====================

const master =
new Tone.Gain(0.85)
.toDestination();




// =====================
// DRUM / RITUAL HIT
// =====================


const drumComp =
new Tone.Compressor({

threshold:-18,

ratio:5

})
.connect(master);



export const kick =
new Tone.MembraneSynth({

volume:0,

pitchDecay:0.05,

octaves:5,


envelope:{

attack:0.001,

decay:0.45,

sustain:0

}

})
.connect(drumComp);





export const snare =
new Tone.NoiseSynth({

volume:-4,


envelope:{

attack:0.001,

decay:0.2,

sustain:0

}

})
.connect(drumComp);





export const hat =
new Tone.MetalSynth({

volume:-8,

frequency:250,


envelope:{

attack:0.001,

decay:0.05

}

})
.connect(drumComp);







// =====================
// BASS / EARTH
// =====================


const bassFilter =
new Tone.Filter({

frequency:450,

type:"lowpass"

});



const bassDist =
new Tone.Distortion({

distortion:0.25

});



bassFilter
.connect(bassDist)
.connect(master);



export const bass =
new Tone.MonoSynth({

volume:-2,


oscillator:{

type:"fatsawtooth"

},


envelope:{

attack:0.05,

decay:0.3,

sustain:0.8,

release:1

}


})
.connect(bassFilter);







// =====================
// PAD / SPIRIT
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

decay:10,

wet:0.7

});



padFilter
.connect(padChorus)
.connect(padReverb)
.connect(master);




export const pad =
new Tone.PolySynth(

Tone.Synth,

{

volume:-7,


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
// LEAD / SPELL
// =====================


const leadFilter =
new Tone.Filter({

frequency:3200,

type:"lowpass"

});



const leadDelay =
new Tone.PingPongDelay({

delayTime:"8n",

feedback:0.4,

wet:0.35

});



const leadReverb =
new Tone.Reverb({

decay:4,

wet:0.4

});



leadFilter
.connect(leadDelay)
.connect(leadReverb)
.connect(master);





export const lead =
new Tone.MonoSynth({

volume:3,


oscillator:{

type:"triangle"

},



envelope:{

attack:0.02,

decay:0.2,

sustain:0.4,

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

volume:-2,


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



const fireReverb =
new Tone.Reverb({

decay:5,

wet:0.5

});



fireFilter
.connect(fireReverb)
.connect(master);




export const fire =
new Tone.NoiseSynth({

volume:5,


noise:{

type:"pink"

},


envelope:{

attack:0.05,

decay:0.5,

sustain:0.4,

release:1

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



const windReverb =
new Tone.Reverb({

decay:8,

wet:0.7

});



windFilter
.connect(windReverb)
.connect(master);




export const wind =
new Tone.NoiseSynth({

volume:-2,


noise:{

type:"white"

},


envelope:{

attack:1,

decay:2,

sustain:0.6,

release:3

}

})
.connect(windFilter);
