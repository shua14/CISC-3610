import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home"

export default function App() {
  return (
    <div className="App">
       <nav className='app--nav'>
         <Router>
             <Routes className='routes'>
               <Route exact path='/' element={<Home />} />
             </Routes>
         </Router>
       </nav>
    </div>
  );
}


