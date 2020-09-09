import React from 'react';
import '../CSS/home.css';
import Navigation from './navigation.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


export default class Home extends React.Component {

    render()
    {
        return(
            
            <div>
                <Navigation />
                <hr className="navLine"/>

                <Container>
                    <Row className="text-center">
                        <div className="homeCenter">
                            <h2>Welcome!</h2>
                        </div>
                    </Row>
                </Container>

            </div>



        )
    }

}