import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects"
import Cartoon from "./Components/Cartoon"

export default function App() {
  return (
    <div className="App">
       <nav className='app--nav'>
         <Router>
             <Routes className='routes'>
               <Route exact path='/' element={<Home />} />
               <Route exact path='/projects' element={<Projects />} />
               <Route exact path='/cartoon' element={<Cartoon />} />
             </Routes>
         </Router>
       </nav>
    </div>
  );
}


