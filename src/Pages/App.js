import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { BrowserRouter as Router, His} from 'react-router-dom';
import AnimatedRoutes from '../Components/AnimatedRoutes';
import Header from '../Components/Header/header';

function App({}) {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;