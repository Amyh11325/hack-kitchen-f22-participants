import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './gallery.css';

import kitchenNightmares from "../img/kitchen-nightmares.jpg";
import masterChef from "../img/masterchef.jpg";
import hellsKitchen from "../img/hells-kitchen.jpg";

export default function Gallery() {
    return (
        <>
            <h1>Gallery</h1>
            <Row>
                <Container fluid>
                    <Col xs={6} md={2}>
                        <div class="container">
                            <figure>
                                <img src={kitchenNightmares} width={500} height={800} class="image"/>
                                <a href="https://www.youtube.com/watch?v=1OGYUhNCMPk">
                                    <div class ="overlay">
                                        <div class="text"> <i>Kitchen Nightmares</i> (2007-2014) </div>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div class="container">
                            <figure>
                                <img src={masterChef} width={250} height={400} class="image"/>
                                <a href="https://www.youtube.com/watch?v=8NxIcbIIV8E">
                                    <div class ="overlay">
                                        <div class="text"> <i>MasterChef</i> (2010-Present) </div>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div class="container">
                            <figure>
                                <img src={hellsKitchen} width={250} height={400} class="image"/>
                                <a href= "https://www.youtube.com/watch?v=RDV2eubmfIE">
                                    <div class ="overlay">
                                        <div class="text"> <i>Hell's Kitchen</i> (2005-Present) </div>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </Col>
                </Container>
            </Row>
        </>
    );
};