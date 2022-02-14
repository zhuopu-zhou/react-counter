import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import ConditionalRender from "./ConditionalRender";
import Coffees from "./Coffees";

function App() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [userName, setUserName] = useState("");
  useEffect(()=>{setUserName("")},[])
  return (
    <div className="App">
      <header className="App-header">
        {/* {userName && <ConditionalRender username={userName} />}
        <button
        onClick={()=>setUserName("emil")}
        >btn</button>
        <h2>Toggle: {toggle? "ON":"OFF"}</h2>
        <button
        onClick={()=>setToggle(!toggle)}
        >btn</button> */}
        <h1>Counter: {counter}</h1>
        <button
        onClick={()=>setCounter(counter + 1)}
        >+</button>
        <button
        onClick={()=>setCounter(0)}
        >reset</button>
        <button
        onClick={()=>setCounter(counter - 1)}
        >-</button>
        <Coffees/>
      </header>
    </div>
  );
}

export default App;
