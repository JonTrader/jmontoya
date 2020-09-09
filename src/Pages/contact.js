import React from 'react';
import '../CSS/contact.css';
import Navigation from './navigation.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    render() {
        
        return (

            <div>
                
                <Navigation />
                <hr className="navLine"></hr>


                <Container className="my-5">

                    <Row className="justify-content-center">

                        <Col xs={11} lg={8} className="containerSquare">

                            <Row>
                                <Col className="text-center fontSquares">
                                    <h3>Contact Me</h3> 
                                    <hr className="contactLine"/>
                                </Col>
                            </Row>
                            <br/>
                            <br/>

                            <Form>

                                <Form.Row className="justify-content-around">
                                    <Form.Group as={Col} xs={8} md={4} controlId="formGridName">
                                        <Form.Label className="text-white pl-1">Name</Form.Label>
                                        <Form.Control type="text" placeholder="Name" required={true}/>
                                    </Form.Group>

                                    <Form.Group as={Col} xs={8} md={4} controlId="formGridEmail">
                                        <Form.Label className="text-white pl-1">Email</Form.Label>
                                        <Form.Control type="email" placeholder="Email Address" required={true} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row className="justify-content-around">

                                    <Form.Group as={Col} xs={8} md={10} controlId="formGridMessage">
                                        <Form.Label className="text-white pl-1">Message</Form.Label>
                                        <Form.Control className="contactTextarea" type="text" required={true}/>
                                    </Form.Group>

                                </Form.Row>

                                <Row className="justify-content-center mt-2">
                                        <Button type="submit" className="submitBtn">
                                            Send
                                        </Button>
                                </Row>

                            </Form>

                        </Col>
                    </Row>
                    
                </Container>

            </div>

        );
    }   

}