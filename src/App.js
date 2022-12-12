import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects/Projects"
import Cartoon from "./Components/Projects/Cartoon"
import Animation from "./Components/Projects/Animation"
import TextForm from './Components/Projects/TextForm';
import VoiceRecognition from './Components/Projects/VoiceRecognition';
import DataVisualization from './Components/Projects/DataVisualization';
import Labs from './Components/Labs/Labs';
import ColorChart from './Components/Labs/ColorChart';
import SoundMachine from './Components/Labs/SoundMachine';
import Resume from './Components/Labs/Resume';
import DragAndDrop from './Components/Projects/DragAndDrop';

export default function App() {
  useEffect(() => {
    document.title = "CISC. 3610"
}, [])
  
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
               <Route exact path='/projects/voicerecognition' element={<VoiceRecognition />} />
               <Route exact path='/projects/datavisualization' element={<DataVisualization />} />
               <Route exact path='/projects/draganddrop' element={<DragAndDrop />} />
               <Route exact path='/labs' element={<Labs />} />
               <Route exact path='/labs/colorchart' element={<ColorChart />} />
               <Route exact path='/labs/soundmachine' element={<SoundMachine />} />
               <Route exact path='/labs/resume' element={<Resume />} />
             </Routes>
         </Router>
       </nav>
    </div>
  );
}


