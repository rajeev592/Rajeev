import { useState } from "react";
import './Counter.css'
function Counter() {
const [counter,setcounter] = useState(0) ;

return(
    <div id="Counter">
        <h1>{counter}</h1>
        <div>
            <button onClick={() => {setcounter(counter+1)}}>Increment</button>
            <button onClick={() => {setcounter(counter-1)}}>Decrement</button>
        </div>
    </div>
)

}

export default Counter;