import logo from './bt21_photos/bts.png';
// import koya from './bt21_photos/koya.jpeg';
// import chimmy from './bt21_photos/chimmy.jpeg';
// import kooky from './bt21_photos/kooky.jpeg';
// import mang from './bt21_photos/mang.jpeg';
// import rj from './bt21_photos/rj.jpeg';
// import shooky from './bt21_photos/shooky.jpeg';
// import tata from './bt21_photos/tata.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="bt21-logo" alt="bt21"/>
        <h2>
          Choose your BT21 Character
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here Test
        </a>
        {/* <section>
          <img id="koya" class="hidden" src={koya}>
          <img id="chimmy" class="hidden" src={chimmy}>
          <img id="kooky" class="hidden" src={kooky}>
          <img id="mang" class="hidden" src={mang}>
          <img id="rj" class="hidden" src={rj}>
          <img id="shooky" class="hidden" src={shooky}>
          <img id="tata" class="hidden" src={tata}>
        /> */}
      </header>
    </div>
  );
}

export default App;
