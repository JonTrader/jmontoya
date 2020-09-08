import React from 'react';
import '../CSS/contact.css';
import Navigation from './navigation.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'










export default class Contact extends React.Component {

    render() {
        
        return (

        <div>
            
            <Navigation />
            <hr className="navLine"></hr>

            <Container className="mb-5">

                <Row className="justify-content-center">

                    <Col xs={11} lg={8} className="containerSquare">

                        <Row>
                            <Col className="text-center fontSquares">
                                <h3>Contact Me</h3> 
                                <hr className="contactLine"/>
                            </Col>
                        </Row>

                        <form onSubmit={this.handleSubmit}>
                        
                            <Row className="justify-content-center fontSquares">
                                <Col xs={7} md={5} className="mb-5">
                                    Name
                                    <input
                                    type="text" 
                                    placeholder="Name" 
                                    onFocus={(e) => e.target.placeholder = ""} 
                                    onBlur={(e) => e.target.placeholder = "Name"}  
                                    required={true} className="contactInput" 
                                    />
                                </Col>

                                <Col xs={7} md={5} className="mb-5" >
                                    Email Address
                                    <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    onFocus={(e) => e.target.placeholder = ""} 
                                    onBlur={(e) => e.target.placeholder = "Email Address"} 
                                    required={true} className="contactInput" />
                                </Col>
                            </Row>

                            <Row className="pt-3 fontSquares justify-content-center">
                                <Col xs={8} md={10}>
                                    Message
                                    <textarea type="text" required={true} className="contactTextarea"/>
                                </Col>
                            </Row>

                            <Row className="justify-content-center">
                                    <Button type="submit" variant="primary" size="lg" className="mt-5 submitBtn">
                                        Send
                                    </Button>
                            </Row>

                            <Row className="justify-content-center text-white">
                                <p>
                                    Feature not working at the moment. Please contact me directly.
                                </p>
                            </Row>
                        </form>

                    </Col>
                </Row>
                
            </Container>

        </div>

        );
    }   

}