import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { HashRouter as Router, His} from 'react-router-dom';
import AnimatedRoutes from '../Components/AnimatedRoutes';
import Header from '../Components/Header/header';
import Navbar from '../Components/Navbar/navbar';

function App({}) {
  return (
    <div className="App">
      
      <Router>
        {/* <Header/> */}
        {/* <Navbar/> */}
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;