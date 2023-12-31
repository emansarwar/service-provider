
import './App.css';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/services';
import About from './components/About';
import Nav1 from './components/Shared/Header/Nav1';
import { Container } from '@mui/material';
import NavFinal from './components/Shared/Header/NavFinal';
function App() {
  return (
    <div className="App">
      
      <Router>
        <NavFinal></NavFinal>
        <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/about/*" element={<About />} />
      </Routes>
      </Container>
      </Router>
      
      
    </div>
  );
}

export default App;
