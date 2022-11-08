import '../styles/Projects.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Projects(){
    return(
        <>
        <header>Projects</header>
        <div className="tiles">
            <div className="cartoon"><Link to='/cartoon'>Cartoon</Link></div>
        </div>
        </>
    );
}