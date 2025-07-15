import logo from './logo.svg';
import './App.css';

function App() {
//constante
  const name = "Hello World";
//variable
  const element = <h1>Hello</h1>
//objet

  const etudiant = {
    nom : "boukhris",
    prenom : "Abir"
  }
  //fonction
  

  return (
    <div className="App">
      <header className="App-header">
      
      {name}
      {element}
      <h1>{etudiant.nom}<br></br> {etudiant.prenom}</h1>
      </header>
    </div>
  );
}

export default App;
