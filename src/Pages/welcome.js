import React from 'react';
import jlogo from '../Images/j.png';
import '../CSS/welcome.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Welcome extends React.Component {

    render() {
        
        return (

            <Container className="text-center">

                <br/>
                <br/>
                <br/>
                <br/>


                <Row id="mtCustom">
                    <Col>
                        <img src={jlogo} alt="" className="welcomeLogo"/>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-white welcomeText">
                        <h1>
                            Hello, I'm <span>Jonathan Montoya</span>
                        </h1>
                        <h4>I'm happy you're here!</h4>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Link to="/home">
                            <button className="welcomeBtn">
                                Lets Get Started!
                            </button>
                        </Link>
                    </Col>
                </Row>

            </Container>
        );
    } 


}