import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Prepublish from './Components/prepublish.js';
import Header from './Components/Header/header.js';
import Hero from './Components/Hero/hero.js';
import AboutMe from './Components/AboutMe/aboutMe.js'
import PorfolioGallery from './Components/PortfolioGallery/portfolioGallery.js';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Hero />
        <AboutMe/>
        <PorfolioGallery/>
        <Resume/>
      </header>
    </div>
  );
}

export default App;