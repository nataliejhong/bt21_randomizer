import logo from "./bt21_photos/bts.png";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/random");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="bt21-logo" alt="bt21" />
        <h2>Choose your BT21 Character</h2>
        <button onClick={handleClick}>Random</button>
      </header>
    </div>
  );
}

export default App;
