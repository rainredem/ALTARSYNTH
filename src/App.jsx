import Keyboard from "./components/Keyboard.jsx";
import "./App.css";


function App(){

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

<img

src="/fire.gif"

className="fire"

/>

</div>



<Keyboard />


</div>

)

}


export default App;
