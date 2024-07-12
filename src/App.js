import { useState } from "react";

function App() {      

  const [couter, setCouter] = useState(1)

  const handleIncrease = () => {
    setCouter(couter + 1)
  }

  
  const truIncrease = () => {
    setCouter(couter - 1)
  }

  return (
    <div className="App" style={{padding: 20}}> 
      <h1>{couter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={truIncrease} style={{marginLeft: 10}}>tru</button>
    </div>
  );
}

export default App;
