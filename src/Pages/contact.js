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

    handleChange = (event) =>
    {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

    }

    handleSubmit = (event) =>
    {
        event.preventDefault();

        this.setState({
            disabled: true,
            emailSent: true
        })


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

                            <Form onSubmit={this.handleSubmit}>

                                <Form.Row className="justify-content-around">
                                    <Form.Group as={Col} xs={8} md={4}>
                                        <Form.Label htmlFor="fullName" className="text-white pl-1">Full Name</Form.Label>
                                        <Form.Control id="fullName" name="name" value={this.state.name} type="text" placeholder="Name" required={true} onChange={this.handleChange}/>
                                    </Form.Group>

                                    <Form.Group as={Col} xs={8} md={4}>
                                        <Form.Label htmlFor="email" className="text-white pl-1">Email</Form.Label>
                                        <Form.Control id="email" name="email" type="email" value={this.state.email} placeholder="Email Address" required={true} onChange={this.handleChange} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row className="justify-content-around">

                                    <Form.Group as={Col} xs={8} md={10}>
                                        <Form.Label htmlFor="message" className="text-white pl-1">Message</Form.Label>
                                        <Form.Control id="message" name="message" value={this.state.message} as="textarea" rows="12" required={true} onChange={this.handleChange}/>
                                    </Form.Group>

                                </Form.Row>

                                <Row className="justify-content-center mt-2">
                                        <Button type="submit" className="submitBtn" disabled={this.state.disabled}>
                                            Send
                                        </Button>
                                </Row>

                                {this.state.emailSent === true && <p className="success-msg" >Email Sent</p> }
                                {this.state.emailSent === false && <p className="err-msg" >Email Not Sent</p> }

                            </Form>

                        </Col>
                    </Row>
                    
                </Container>

            </div>

        );
    }   

}