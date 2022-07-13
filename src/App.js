import './App.css';
import Home from '../src/Components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';


function App() {
  return (
    <Router>
<Navbar />
    <Routes>
   
     <Route exact path="/" element={<Home />}/>
     <Route exact path="/about" element={<About />}/>
    </Routes>

</Router>
   
  );
}

export default App;
