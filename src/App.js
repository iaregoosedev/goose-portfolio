import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Prepublish from './Components/prepublish.js';
import Header from './Components/Header/header.js';
import Hero from './Components/Hero/hero.js';
import AboutMe from './Components/AboutMe/aboutMe.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Hero />
        <AboutMe/>
      </header>
    </div>
  );
}

export default App;