import React from 'react';
import photo from '../Images/jonathanmontoya.png'
import '../CSS/about.css';
import Navigation from './navigation.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class About extends React.Component {

    render() {

        return (

            <div>
                <Navigation />
                <hr className="navLine"></hr>

                <Container className="my-5">
                    <Row className="justify-content-center">

                        <Col xs={11} lg={8} className="aboutColumn">

                            <Row className="align-items-center photoText text-white px-3 mt-2">

                                <Col xl={4}>
                                    <img src={photo} className="photo" alt=""/>
                                </Col>

                                <Col xl={2} className="photoTitle d-none d-xl-inline">
                                    <h4>Name:</h4>
                                    <h4>Age:</h4>
                                    <h4>Education:</h4>
                                </Col>

                                <Col xl={6} className="photoInfo">
                                    <h4>Jonathan Montoya</h4>
                                    <h4>24 Years Old</h4>
                                    <h4>BS in Computer Science</h4>
                                </Col>
                                
                            </Row>

                            <br/>

                            <Row className="text-white description px-3">
                                <Col xs={12} className="">
                                    <p>
                                        I am an aspiring Web Developer and Software Engineer with a great passion for computers, coding and technology in general. 
                                        I have experience in Java, HTML, CSS, JavaScript & React. I'm currently learning advanced Java Programming Language, CSS and 
                                        different libraries within CSS such as Bootstrap 4. I also aspire to learn advanced JavaScript, React and much more. 
                                    </p>
                                    <br />
                                    <p>
                                        I took a while to transition into Computer Science. I transferred from some Engineerings to others and finally decided to study Computer Science. 
                                        After my first coding class I found a huge desire to keep learning, which allowed me to finally decide to choose Computer Science as my major.
                                    </p>
                                    <br />
                                    <p>
                                        Other than my passion for coding and programming, I also find passion in Photography and Sports (mainly Soccer). I consider myself a 
                                        great problem-solver, an excellent peer that is able to work in teams, a great individual that is also able to work alone and have the patience and adaptibility 
                                        to be able to work in any environment.
                                    </p>
                                </Col>
                            </Row>

                            <Row className="justify-content-center my-2">
                                <a href="https://drive.google.com/file/d/19nVjrlqV3IRRW2eyxpBduX7wmmIfJaZb/view?usp=sharing" className="resume">
                                    View/Download Resume
                                </a>
                            </Row>
                            
                        </Col>

                    </Row>
                </Container>
            </div>

        )


    }


}