import './App.css';
import Table from './Table'

// Cara memahami Komponen dan props (properti)
/**
 * Komponen ada 2:
 * 1. Class 
 * 
 * Contoh:
 * function Welcome(props) {
    return <h1>Halo, {props.name}</h1>;
}
 * 2. Fungsi
 * class Welcome extends React.Component {
  render() {
    return <h1>Halo, {this.props.name}</h1>;
  }
}
 * 
 * 
 * 
 * 
 */






// create component with function
function Biodata(props){
  return <span> {props.name}
                {props.age}
                {props.gender}
                {props.compentency}
  </span>
}

function Greeting(props){
  return  <span><Biodata name={props.name}/>
              <Biodata age={props.age}/>
              <Biodata gender={props.gender}/>
              <Biodata compentency={props.compentency}/>
         </span>
}



// create conmponent with Class

// class Man extends Component{
//   render(){
//     return (
//       <div>
//         <h1><Greeting/></h1>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
    <div id="body">
        <table>
         <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Kelamin</th>
            <th>Kompetensi</th>
         </tr>
         <tr>
            <td><Greeting name="Doni"/></td>
            <td><Greeting age="20"/></td>
            <td><Greeting gender="laki-laki"/></td>
            <td><Greeting compentency="Mengaji"/></td>
        </tr>
        <tr>
            <td><Greeting name="Joko"/></td>
            <td><Greeting age="22"/></td>
            <td><Greeting gender="laki-laki"/></td>
            <td><Greeting compentency="Mengambang"/></td>
        </tr>
     </table>

    </div>
    <div className="container">
        <Table />
      </div>
    </div>
  );
}

export default App;
