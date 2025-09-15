import logo from './logo.svg';
import './App.css';
import Landing from './comps/landing';
import NavBar from './comps/Navbar';
import Home from './comps/home';
import About from './comps/about';
import Contact from './comps/contact';
import Eleventhstandard from './comps/eleventhstandard';
import UniversityCourses from './comps/university';
import Polytechnic from './comps/Schooling/polytechnic';
import DiplomaCourse from './comps/Schooling/diploma';
import Iti from './comps/Schooling/iti';
import OtherOptions from './comps/Schooling/other';
import Intermediate from './comps/Schooling/intermediate';

import BTech from './comps/University_Courses/BTech';
import BSc from './comps/University_Courses/BSc';
import BA from './comps/University_Courses/BA';
import MTech from './comps/University_Courses/MTech';
import MSc from './comps/University_Courses/MSc';
import BBA from './comps/University_Courses/BBA';
import MBA from './comps/University_Courses/MBA';
import BCom from './comps/University_Courses/BCom';
import MBBS from './comps/University_Courses/MBBS';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        {/* Other branches */}
        <Route path="/eleventhstandard" element={<Eleventhstandard />} />
        <Route path="/university" element={<UniversityCourses />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/polytechnic" element={<Polytechnic />} />
        <Route path="/diploma" element={<DiplomaCourse />} />
        <Route path="/iti" element={<Iti />} />
        <Route path="/other" element={<OtherOptions />} />

        {/* University sub-courses */}
        <Route path="/BTech" element={<BTech />} />
        <Route path="/BSc" element={<BSc />} />
        <Route path="/BA" element={<BA />} />
        <Route path="/MTech" element={<MTech />} />
        <Route path="/MSc" element={<MSc />} />
        <Route path="/BBA" element={<BBA />} />
        <Route path="/MBA" element={<MBA />} />
        <Route path="/BCom" element={<BCom />} />
        <Route path="/MBBS" element={<MBBS />} />
      </Routes>
    </Router>
  );
}

export default App;
