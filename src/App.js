import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Prepublish from './Components/prepublish.js';
import Header from './Components/Header/header.js'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Header/>
        <Prepublish />
      </header>
    </div>
  );
}

export default App;
