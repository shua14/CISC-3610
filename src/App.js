import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects/Projects"
import Cartoon from "./Components/Projects/Cartoon"
import Animation from "./Components/Projects/Animation"
import TextForm from './Components/Projects/TextForm';
import Labs from './Components/Labs/Labs';
import ColorChart from './Components/Labs/ColorChart';
import SoundMachine from './Components/Labs/SoundMachine';

export default function App() {
  return (
    <div className="App">
       <nav className='app--nav'>
         <Router basename="/CISC-3610">
             <Routes className='routes'>
               <Route exact path='/' element={<Home />} />
               <Route exact path='/projects' element={<Projects />} />
               <Route exact path='/projects/cartoon' element={<Cartoon />} />
               <Route exact path='/projects/animation' element={<Animation />} />
               <Route exact path='/projects/textform' element={<TextForm />} />
               <Route exact path='/labs' element={<Labs />} />
               <Route exact path='/labs/colorchart' element={<ColorChart />} />
               <Route exact path='/labs/soundmachine' element={<SoundMachine />} />
             </Routes>
         </Router>
       </nav>
    </div>
  );
}


