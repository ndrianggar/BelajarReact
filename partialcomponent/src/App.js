import logo from './logo.svg';
import './App.css';

// cara buat komponen dengan fungsi
function Comment(props){
  return <h1>Halo, {props.name}</h1>
}


function formatDate(date){
  return date.toLocaleDateString();
}

//sebelum diekstrak komponent dalam react
function Person(props){
  return (
    <div className='Person'>
      <PersonInfo 
        user= {props.author}/>  
      
      {/* <div className='PersonInfo'>
        <img className='Man' 
          src={props.author.manUrl}
          alt={props.author.name}/>
        <div className='PersonInfo-name'>
          {props.author.name}
        </div>
      </div> */}
      <div className='Person-teks'>
        {props.text}
      </div>
      <div className='Person-date'>
        {formatDate(props.date)}
      </div>
    </div>
  )
}


// Setelah di ekstrak
function PersonInfo(props){
  return (
  <div className='PersonalInfo'>
      <Man author={props.user} />
  <div className='PersonalInfo-name'>
    {props.user.name}
  </div>
</div>
  );
}


function Man(props){
  return(
    <img className='Man'
    src={props.author.manUrl}
    alt={props.author.name}
    />
  )
}

const person = {
  date:  new Date(),
  text: 'Akhirnya bisa juga belajar react!',
  author: {
      name:'Joni',
      manUrl:'https://cdn.pixabay.com/photo/2022/05/22/15/02/pizza-7213599_1280.jpg'
  },
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person
            date={person.date}
            text={person.text}
            author={person.author}
         />
      </header>
      <Comment name="Joni Of The Man"/>
      <Comment name="Joni Of The Man"/>
      <Comment name="Joni Of The Man"/>
    </div>
  );
}



export default App;
