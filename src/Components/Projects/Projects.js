import { Link } from 'react-router-dom'

export default function Projects(){
    return(
        <>
        <header>Projects</header>
        <div className="tiles">
            <div className="card"><Link to='/projects/cartoon'>Cartoon</Link></div>
            <div className="card"><Link to='/projects/animation'>Animation</Link></div>
            <div className="card"><Link to="/projects/textform">Text Form</Link></div>
            <div className="card"><Link to="/projects/voicerecognition">Voice Recognition</Link></div>
            <div className="card"><Link to="/projects/datavisualization">Data Visualization</Link></div>
            <div className="card"><Link to="/projects/draganddrop">Drag and Drop</Link></div>
        </div>
        <div id="footer"><Link to="/">Back Home</Link></div>
        </>
    );
}