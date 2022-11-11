import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects"
import Cartoon from "./Components/Cartoon"
import Labs from './Components/Labs';
import ColorChart from './Components/ColorChart';

export default function App() {
  return (
    <div className="App">
       <nav className='app--nav'>
         <Router basename="/CISC-3610">
             <Routes className='routes'>
               <Route exact path='/' element={<Home />} />
               <Route exact path='/projects' element={<Projects />} />
               <Route exact path='/cartoon' element={<Cartoon />} />
               <Route exact path='/labs' element={<Labs />} />
               <Route exact path='/colorchart' element={<ColorChart />} />
             </Routes>
         </Router>
       </nav>
    </div>
  );
}


