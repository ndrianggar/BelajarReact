import './App.css';

function Clock(props) {
  return (
    <div>
      <h1>Halo, dunia!</h1>
      <h2>Jam {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

const waktu = <Clock/>;

function App() {
  return (
    <div className="ParentBox">
      <p id="timer">{waktu}</p>
     
    </div>
  );}

  



export default App;
