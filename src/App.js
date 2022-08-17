import logo from './logo.svg';
import './App.css';


import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      
      <PersonCard
      firstName={"Doe"}
      lastName={"Jane"}
      age={"Age:45"}
      colorhir={"Hair Color"}>
      </PersonCard>

      <PersonCard
      firstName={"Smith"}
      lastName={"John"}
      age={"Age:88"}
      colorhir={"Hair Color : Brown"}>
      </PersonCard>

      <PersonCard
      firstName={"Fillmore,"}
      lastName={"Millard"}
      age={"Age:50"}
      colorhir={"Hair Color : Brown"}>
      </PersonCard>

      <PersonCard
      firstName={"Smith,"}
      lastName={"Matia"}
      age={"Age:62"}
      colorhir={"Hair Color : Brown"}>
      </PersonCard>
      
    </div>
  );
}

export default App;
