import * as Tone from "tone";


// =====================
// MASTER
// =====================

const master =
new Tone.Gain(0.9)
.toDestination();




// =====================
// DRUMS / RITUAL HIT
// =====================


const drumComp =
new Tone.Compressor({

threshold:-18,

ratio:5

})
.connect(master);



const stoneReverb =
new Tone.Reverb({

decay:1.2,

wet:0.25

})
.connect(drumComp);




// тело удара

const stoneBody =
new Tone.MembraneSynth({

volume:4,

pitchDecay:0.01,

octaves:2,


oscillator:{

type:"sine"

},


envelope:{

attack:0.001,

decay:0.18,

sustain:0,

release:0.1

}

})
.connect(stoneReverb);




// верхний удар

const stoneImpact =
new Tone.NoiseSynth({

volume:10,


noise:{

type:"white"

},


envelope:{

attack:0.001,

decay:0.04,

sustain:0

}

})
.connect(stoneReverb);




export const kick = {


triggerAttackRelease(note,time){


stoneBody.triggerAttackRelease(

"C2",

"16n"

);


stoneImpact.triggerAttackRelease(

"32n"

);


}

};







// =====================
// EXTRA DRUMS
// =====================


export const snare =
new Tone.NoiseSynth({

volume:0,


envelope:{

attack:0.001,

decay:0.25,

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
// EARTH BASS
// =====================


const bassFilter =
new Tone.Filter({

frequency:600,

type:"lowpass"

});



const bassDist =
new Tone.Distortion({

distortion:0.2

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
// SPIRIT PAD
// =====================


const padFilter =
new Tone.Filter({

frequency:1600,

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

wet:0.65

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
// SPELL LEAD
// =====================


const leadFilter =
new Tone.Filter({

frequency:3000,

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

decay:4,

wet:0.35

});



leadFilter
.connect(leadDelay)
.connect(leadReverb)
.connect(master);




export const lead =
new Tone.MonoSynth({

volume:5,


oscillator:{

type:"triangle"

},


envelope:{

attack:0.02,

decay:0.25,

sustain:0.45,

release:1.2

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



const fireReverb =
new Tone.Reverb({

decay:5,

wet:0.4

});



fireFilter
.connect(fireReverb)
.connect(master);



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

volume:-1,


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
