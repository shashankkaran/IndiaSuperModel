
import './App.css';
import ScrollToTop from './pages/scroll/ScrollToTop';
import Navbar from './pages/navbar/Navbar'
import Footer from './pages/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import BecomeModel from './pages/becomemodel/BecomeModel';
import Weoffer from './pages/weoffer/Weoffer';
import Testimonial from './pages/testimonial/Testimonial';
import Portfolio from './pages/portfolio/Portfolio';
// import PortfolioAdmin from './pages/portfolio/PortfolioAdmin';
function App() {


  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/become-a-model" element={<BecomeModel/>}></Route>
          <Route path="/we-offer" element={<Weoffer/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/testimonial" element={<Testimonial/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          {/* <Route path="/portfolio-admin" element={<PortfolioAdmin/>}></Route> */}
   

        </Routes>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
