import { useState } from "react";
import "./App.css";
import StateLifting from "./components/stateLifting";
import {Panel, Accordion} from "./components/StateLifting2";


function App() {
const [name, setName] = useState("")

  return <div className="App">
   {/* <StateLifting title='child1' name={name} setName={setName} /> */}
   {/* <StateLifting title='child2' name={name} setName={setName} /> */}
   {/* <p>I am inside parent component and value of name is: {name}</p> */}

   <Accordion />
  </div>;
}

export default App;
