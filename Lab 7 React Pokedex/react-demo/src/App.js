
import './App.css';

function Pokemon(props) {
  return (
  <div className ="pokemon">
      <h1>{props.name}</h1> 
    <img src ={props.image} alt={props.name} /> 
    <p>Type: {props.type}</p>
    
  </div>
  );
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
    
        <h1>Pokedex</h1>
        <div >
        <Pokemon className= "pokemon" name ="Dusktox" image="images/Dustox.png" type="Bug / Poison" />
        <Pokemon className= "pokemon" name="Jirachi" image="images/Jirachi.png" type="Steel / Psychic"/>
        <Pokemon  className="pokemon" name="Surskit" image="images/Surskit.png" type="Bug / Water" />
</div>

          
        
        
      </header>
    </div>
  );
}

export default App;
