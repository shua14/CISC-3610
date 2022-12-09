import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Resume() {

const [selected, setSelected] = useState("About Me");

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Resume</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" eventKey="About Me" onClick={() => setSelected("About Me")}>About Me</Nav.Link>
            <Nav.Link href="#link">Education</Nav.Link>
            <Nav.Link href="#experience" eventKey="Experience" onClick={() => setSelected("Experience")}>Experience</Nav.Link>
            <Nav.Link href="#link">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {selected == "About Me" &&
        <header>About Me</header>
    }  

    {selected == "Experience" &&
        <header>Experience</header>
    }

    </>
  );
}
// import React from "react";
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

// function NavigationBar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="#home">About Me</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#education">Education</Nav.Link>
//           <Nav.Link href="#skills">Skills</Nav.Link>
//           <NavDropdown title="Experience" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#technical-experience">Technical Experience</NavDropdown.Item>
//             <NavDropdown.Item href="#technical-projects">Technical Projects</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default function Resume(){
//   return (
//     <>
//       <NavigationBar />
//       <h1 id="education">About Me</h1>
//       <p>Jay Luxenberg</p>
//       <p>Brooklyn, NY 11234</p>
//       <p>(929) 233-2424 | shualuxenberg@gmail.com | github.com/shua14 | linkedin.com/in/jay-luxenberg</p>
      
//       <h1 id="education">Education</h1>
//       <p>BS, Computer Science, Brooklyn College, CUNY Graduating: December 2022</p>
//       <ul>
//         <li>Relevant Coursework: Data Structures and Algorithms, Java OOP, Computer Architecture, Databases</li>
//       </ul>
//       <p>NYC Tech Talent Pipeline(TTP)</p>
//       <ul>
//         <li>Selected for NYC Tech Talent Pipeline Web Development Residency program which provides hands-on training in full-stack web development, learned HTML, CSS, JavaScript, Git, SQL, PostgreSQL, Node, Express, and React</li>
//       </ul>

//       <h1 id="skills">Skills</h1>
//       <ul>
//         <li>Programming Languages: Java, JavaScript, Python, HTML, CSS</li>
//         <li>Frameworks: React, Redux, Next, Express</li>
//         <li>Technologies: NodeJS, Rest APIs, PostgreSQL, Sequelize, Netlify, Heroku, Git/GitHub, Bitbucket, MQL4, Apache Flink, AWS, Docker, Jira, Confluence</li>
//       </ul>

//       <h1 id="technical-experience">Technical Experience</h1>
//       <p>Atlassian Summer 2022 Software Engineer Intern</p>
//       <ul>
//         <li>Backend developer responsible for building a data pipeline using Apache Flink, AWS Kinesis Streams, AWS KDA, and AWS S3</li>
//         <li>Worked in an agile environment with teammates from different time zones</li>
//       </ul>
//       <p>Computer Doctors 911, Inc, Brooklyn, NY September 2019 – May 2022 Customer Service IT Support</p>
//     </>
//   );
// }
