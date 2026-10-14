import { useState } from "react";

import Keyboard from "./components/Keyboard.jsx";

import "./App.css";


function App(){


const [fire,setFire] = useState(false);

const [wind,setWind] = useState(false);



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



{
wind &&

<div className="wind">

</div>

}



</div>





<Keyboard

setFire={setFire}

setWind={setWind}

/>



</div>

)

}


export default App;
