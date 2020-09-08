import React from 'react';
import stockquotes from '../Images/stockquotes.gif'
import ms from '../Images/ms.gif'
import designpad from '../Images/designpad.gif'
import favoritelinks from '../Images/favoritelinks.gif'
import '../CSS/projects.css';
import Navigation from './navigation.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Projects extends React.Component {

    render() {

        return (

        <div>

            <Navigation />
            <hr className="navLine"></hr>
            <br/>
            <br/>
            <br/>

            <Container className="projectsContainer">

                <Row className="justify-content-around imgProjects">


                    <Col lg={5}>
                        <a href="https://github.com/JonTrader/projectdos">
                            <img src={stockquotes} className="projectImgs my-2" alt=""/>
                        </a>
                    </Col>
                    
                    <Col lg={5}>
                        <a href="https://github.com/JonTrader/Minesweeper">
                            <img src={ms} className="projectImgs my-2" alt=""/>
                        </a>
                    </Col>

                </Row>

                <br/>

                <Row className="justify-content-around imgProjects">
                    <Col lg={5}>
                        <a href="https://github.com/JonTrader/design-pad">
                            <img src={designpad} className="projectImgs my-2" alt=""/>
                        </a>
                    </Col>

                    <Col lg={5}>
                        <a href="https://github.com/JonTrader/favLinks">
                            <img src={favoritelinks} className="projectImgs my-2" alt=""/>
                        </a>
                    </Col>

                </Row>

            </Container>
            
        </div>


        );
    }
}