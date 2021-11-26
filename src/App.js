
import './App.css';

import Navbar from './pages/navbar/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import BecomeModel from './pages/becomemodel/BecomeModel';
function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/become-a-model" element={<BecomeModel />}></Route>
          {/* <Route path="/we-offer" element={</>}></Route> */}
          {/* <Route path="/about" element={<About/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/about" element={<About/>}></Route> */}

        </Routes>
      </Router>

    </>
  );
}

export default App;
