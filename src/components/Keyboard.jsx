import { useEffect, useState } from "react";


import {

kick,
snare,
hat,
bass,
pad,
lead,
fx,
fire,
wind

} from "../audio/engine.js";



export default function Keyboard({

setFire

}){


const [active,setActive]=useState([]);


const [fireOn,setFireOn]=useState(false);



const keys={


4:"C2",

5:"Ab1",

6:"Bb1",


7:[
"C4",
"Eb4",
"G4"
],


8:[
"Ab3",
"C4",
"Eb4"
],


9:"C5",

0:"Eb5"


};





function press(key){


if(active.includes(key))
return;


setActive(prev=>[
...prev,
key
]);



switch(key){


case "1":

kick.triggerAttackRelease(
"C1",
"8n"
);

break;



case "2":


const state=!fireOn;


setFireOn(state);

setFire(state);



if(state){

fire.triggerAttack();

}

else{

fire.triggerRelease();

}


break;



case "3":

wind.triggerAttack();

break;



case "4":
case "5":
case "6":

bass.triggerAttack(
keys[key]
);

break;



case "7":
case "8":

pad.triggerAttack(
keys[key]
);

break;



case "9":
case "0":

lead.triggerAttack(
keys[key]
);

break;



case " ":

fx.triggerAttackRelease(
"C6",
"2n"
);

break;


}

}





function release(key){


setActive(prev=>
prev.filter(
x=>x!==key
)
);



switch(key){


case "4":
case "5":
case "6":

bass.triggerRelease();

break;



case "7":
case "8":

pad.triggerRelease(
keys[key]
);

break;



case "9":
case "0":

lead.triggerRelease();

break;



case "3":

wind.triggerRelease();

break;


}

}





useEffect(()=>{


function down(e){

const key=e.key.toLowerCase();


if(
[
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
" "
]
.includes(key)
){

press(key);

}

}



function up(e){

release(
e.key.toLowerCase()
);

}



window.addEventListener(
"keydown",
down
);


window.addEventListener(
"keyup",
up
);



return()=>{

window.removeEventListener(
"keydown",
down
);


window.removeEventListener(
"keyup",
up
);


};


},[fireOn]);







return(

<div className="keyboard">


<div className="buttons">


{

[
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
" "
]

.map(key=>(


<button

key={key}


onMouseDown={()=>
press(key)
}


onMouseUp={()=>
release(key)
}


className={
active.includes(key)
?
"active"
:
""
}


>

{
key===" "
?
"FX"
:
key
}


</button>


))


}


</div>


</div>

)

}
