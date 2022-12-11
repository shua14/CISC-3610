import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Resume() {

const [selected, setSelected] = useState("About Me");

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" onClick={() => setSelected("About Me")}>My Resume</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" eventKey="About Me" onClick={() => setSelected("About Me")}>About Me</Nav.Link>
            <Nav.Link href="#education" eventKey="Education" onClick={() => setSelected("Education")}>Education</Nav.Link>
            <Nav.Link href="#skills" eventKey="Skills" onClick={() => setSelected("Skills")}>Skills</Nav.Link>
            <Nav.Link href="#experience" eventKey="Experience" onClick={() => setSelected("Experience")}>Experience</Nav.Link>
            <Nav.Link href="#portfolio" eventKey="Portfolio" onClick={() => setSelected("Portfolio")}>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {selected == "About Me" &&
    <>
      <header>About Me</header>
      <p>Jay Luxenberg</p>
      <p>Brooklyn, NY 11234</p>
      <p>(929) 233-2424 | shualuxenberg@gmail.com | github.com/shua14 | linkedin.com/in/jay-luxenberg</p>
    </>
    }

    {selected == "Education" &&
    <>
      <header>Education</header>
      <p>BS, Computer Science, Brooklyn College, CUNY Graduating: December 2022</p>
       <ul>
         <li>Relevant Coursework: Data Structures and Algorithms, Java OOP, Computer Architecture, Databases</li>
       </ul>
       <p>NYC Tech Talent Pipeline(TTP)</p>
       <ul>
         <li>Selected for NYC Tech Talent Pipeline Web Development Residency program which provides hands-on training in full-stack web development, learned HTML, CSS, JavaScript, Git, SQL, PostgreSQL, Node, Express, and React</li>
      </ul>
    </>
    }

    {selected == "Skills" &&
    <>
      <header>Skills</header>
        <ul>
         <li>Programming Languages: Java, JavaScript, Python, HTML, CSS</li>
         <li>Frameworks: React, Redux, Next, Express</li>
         <li>Technologies: NodeJS, Rest APIs, PostgreSQL, Sequelize, Netlify, Heroku, Git/GitHub, Bitbucket, MQL4, Apache Flink, AWS, Docker, Jira, Confluence</li>
       </ul>
    </>
    }  

    {selected == "Experience" &&
    <>
      <header>Experience</header>
      <p>Atlassian Summer 2022 Software Engineer Intern</p>
      <ul>
        <li>Backend developer responsible for building a data pipeline using Apache Flink, AWS Kinesis Streams, AWS KDA, and AWS S3</li>
        <li>Worked in an agile environment with teammates from different time zones</li>
      </ul>
      <p>Computer Doctors 911, Inc, Brooklyn, NY September 2019 – May 2022 Customer Service IT Support</p>
    </>
    }

    {selected == "Portfolio" &&
    <>
      <header>Portfolio</header>
      <p>
        <strong>Trivial Trivia</strong> -  
        <a href="https://github.com/shwarzbergzelda/trivial-trivia-frontend"> https://github.com/shwarzbergzelda/trivial-trivia-frontend</a>
        <ul>
            <li>
            Created Trivia game with a team of 4 using React JS for the frontend that receives questions from an external Trivia API and stores a user's score on a database and displays them ranked on a leaderboard page
            <a href="https://trivial-trivia.netlify.app/"> https://trivial-trivia.netlify.app/</a>
            </li>
            <li>
            Implemented the backend with Sequelize to store user quiz scores to display on a leaderboard page, and created cookies to store User session information after every user login
            </li>
        </ul>
        <strong href="https://github.com/shua14/Sheeshcoin">Sheeshcoin Cryptocurrency</strong> -
        <a href="https://github.com/shua14/Sheeshcoin"> https://github.com/shua14/Sheeshcoin</a>
        <ul>
            <li>
            Created a cryptocurrency backend using Python and Flask with a graphical frontend interface using React JS
            </li>
            <li>
            Implemented functionally that allows currency transfer between wallets, mining new transactions, and a view of the transaction pool
            </li>
        </ul>
        <strong>Bank Account System</strong> -
        <a href="https://github.com/shua14/Bank-Account-System"> https://github.com/shua14/Bank-Account-System</a>
        <ul>
            <li>
            Created an object oriented bank account system with Java that allowed users to create new Savings or Checking accounts, check balances, or deposit and withdraw funds
            </li>
        </ul>
        </p>
    </>
    }
    <div id="footer"><Link to="/">Back Home</Link></div>
    </>
  );
}