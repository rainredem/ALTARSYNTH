import { useState } from "react";

import Keyboard from "./components/Keyboard.jsx";

import {
reverb,
delay,
masterFilter
} from "./audio/engine.js";

import "./App.css";


function App(){


function changeReverb(e){

reverb.wet.value =
e.target.value;

}



function changeDelay(e){

delay.wet.value =
e.target.value;

}



function changeFilter(e){

masterFilter.frequency.value =
e.target.value;

}




return(

<div className="app">


<h1>
ALTAR SYNTH
</h1>


<p className="subtitle">
ведьминский ритуал на передвижение дедлайнов
</p>



<div className="controls">


<label>

REVERB

<input

type="range"

min="0"

max="1"

step="0.01"

defaultValue="0.5"

onChange={changeReverb}

/>

</label>



<label>

DELAY

<input

type="range"

min="0"

max="1"

step="0.01"

defaultValue="0.3"

onChange={changeDelay}

/>

</label>



<label>

FILTER

<input

type="range"

min="500"

max="5000"

defaultValue="2500"

onChange={changeFilter}

/>

</label>


</div>



<Keyboard />



</div>

)

}


export default App;
