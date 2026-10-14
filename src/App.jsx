import { useState } from "react";

import Keyboard from "./components/Keyboard.jsx";

import {
  reverb,
  delay,
  masterFilter
} from "./audio/engine.js";

import "./App.css";


function App(){


const [fire,setFire] = useState(false);



function changeReverb(e){

if(reverb){

reverb.wet.value =
Number(e.target.value);

}

}



function changeDelay(e){

if(delay){

delay.wet.value =
Number(e.target.value);

}

}



function changeFilter(e){

if(masterFilter){

masterFilter.frequency.value =
Number(e.target.value);

}

}




return(

<div className="app">


<h1>
ALTAR SYNTH
</h1>


<p className="subtitle">
ведьминский ритуал на передвижение дедлайнов
</p>



<p className="hint">
нажмите 2 для начала ритуала
</p>




<div className="altar">


{
fire &&

<img

src="/fire.gif"

className="fire"

/>

}


</div>




<div className="effects">


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





<Keyboard

setFire={setFire}

/>


</div>

)

}


export default App;
