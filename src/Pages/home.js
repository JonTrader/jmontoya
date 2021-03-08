import React from 'react';
import '../CSS/home.css';
import '../CSS/navigation.css';
import photo from '../Images/jonathanmontoya.png'
import stockquotes from '../Images/stockquotes.gif'
import ms from '../Images/ms.gif'
import designpad from '../Images/designpad.gif'
import scorekeeper from '../Images/scorekeeper.gif'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import jlogo from '../Images/j.png';
import { Link } from 'react-router-dom';

const toAbout = () => {
    const section = document.querySelector( '#about' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  const toProjects = () => {
    const section = document.querySelector( '#projects' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

export default class Home extends React.Component {

    render() {
        return (

            <div>
                <Navbar expand="lg" variant="dark" className="navbarAnimation">

                    <Container>
                            
                        <Navbar.Brand>
                            <Link>
                                <img src={jlogo} className="navLogo" alt=""/>
                            </Link>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="lines" />

                            <Navbar.Collapse id="basic-navbar-nav">

                                <Nav className="ml-auto">
                                    
                                    <span className="mr-4 nav-link" onClick={toAbout}>About</span>
                                    
                                    <span className="nav-link" onClick={toProjects}>Projects</span>
                                    
                                    {/* <Link className="nav-link" to="/contact">Contact</Link> */}

                                </Nav>

                        </Navbar.Collapse>

                    </Container>

                </Navbar>
                <hr className="navLine" />

                <Container className="content">

                    <Row id="intro">

                        <Col lg={6} className="order-2 order-lg-1">

                            <h1>Hello, my name is</h1>

                            {/* d9e2ff */}

                            <div>
                                <h2>Jonathan Montoya.</h2>
                            </div>

                            <br/>

                            <div>
                                <p>I am a, soon to graduate, computer scientist excited to be introduced into the tech industry/world.</p>
                            </div>

                            <br/>

                            <a href="https://drive.google.com/file/d/19nVjrlqV3IRRW2eyxpBduX7wmmIfJaZb/view?usp=sharing">
                                <button>Resume</button>
                            </a>
                        </Col>

                        <Col className="align-self-center text-center order-1 order-lg-2" lg={6}>
                            <span className="web">
                                <p>WELCOME!</p>
                            </span>
                        </Col>

                    </Row>


                    <Row id="about">
                        <Col lg={6}>
                            <h2>About Me</h2>
                            <br/>
                            <p>I love making websites and apps. I enjoy the challenge that comes with programming and the creativity it requires. It challenges me in many ways and motivates me to always improve, this is why I love doing this.</p>
                            <br/>

                            <p>Here are a few languages/technologies that I have worked with:</p>

                            <ul>
                                <li>Java</li>
                                <li>HTML & CSS</li>
                                <li>JavaScript</li>
                                <li>MySQL</li>
                                <li>Git</li>
                            </ul>

                            <p>And I am currently in the process of learning and working with:</p>

                            <ul>
                                <li>Express</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                            </ul>
                        </Col>

                        <Col className="text-center align-self-center " lg={6}>
                            <img src={photo} className="photo" alt="" />
                        </Col>
                    </Row>


                    <Row id="projects">
                        <h2>Some Projects Of Mine:</h2>

                        <Row>

                            <Col className="text-center" lg={6}>

                                <div className="project" lg={6}>
                                    <h6>Scorekeeper</h6>
                                    <a href="https://github.com/JonTrader/scorekeeper">
                                        <img src={scorekeeper} alt=""/>
                                    </a>
                                </div>

                                <div className="project">
                                    <h6>Stock Market Sector Performance & Chart</h6>
                                    <a href="https://github.com/JonTrader/projectdos">
                                        <img src={stockquotes} alt=""/>
                                    </a>
                                </div>
                            </Col>

                            <Col className="text-center">

                                <div className="project">
                                    <h6>Minesweeper</h6>
                                    <a href="https://github.com/JonTrader/Minesweeper">
                                        <img src={ms} alt=""/>
                                    </a>
                                </div>

                                <div className="project">
                                    <h6>Design Pad - Drag & Drop</h6>
                                    <a href="https://github.com/JonTrader/design-pad">
                                        <img src={designpad} alt=""/>
                                    </a>
                                </div>



                            </Col>

                        </Row>

                    </Row>

                </Container>

            </div>



        )
    }

}