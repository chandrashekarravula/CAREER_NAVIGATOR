import logo from './logo.svg';
import './App.css';
import Landing from './comps/landing';
import NavBar from './comps/Navbar';
import Home from './comps/home';
import About from './comps/about';
import Contact from './comps/contact';
import Eleventhstandard from './comps/eleventhstandard';
import UniversityCourses from './comps/university';
import Polytechnic from './comps/polytechnic';
import DiplomaCourse from './comps/diploma';
import Iti from './comps/iti';
import OtherOptions from './comps/other';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intermediate from './comps/intermediate';


function App() {
  return (

    <Router>
    <NavBar />
    
    <Routes>
    <Route path="/" element={<Landing />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/eleventhstandard" element={<Eleventhstandard />} />
      <Route path="/university" element={<UniversityCourses/>} />
      <Route path="/intermediate" element={<Intermediate/>}/>
      <Route path="/polytechnic" element={<Polytechnic/>}/>
      <Route path="/diploma" element={<DiplomaCourse/>}/>
      <Route path="/iti" element={<Iti/>}/>
      <Route path="/other" element={<OtherOptions/>}/>
      
     
    </Routes>
    <Routes>
      
      <Route path="/" element={<Landing />} />
      <Route path="/About" element={<About />} />
      
    </Routes>
    <Routes>
      
      <Route path="/" element={<Landing />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
   
  </Router>
 

  );
}

export default App;

