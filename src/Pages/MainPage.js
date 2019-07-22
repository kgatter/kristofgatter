import React from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import {LINKS} from "../Links";
import {Link} from "react-router-dom";



function MainPage() {

    return <div>
        <Container>
            <Row>
                <Col md="8">
                    <h1>Kristof Gatter <b>Digital Product Designer</b></h1>
                    <h2>I build digital products that feel right and make sense.</h2>
                    <p>Digital product development is a complicated process where working siloed can lead to a lot of frustration. I am committed to a closely integrated agile design and development process.</p>
                    <p>I have methodical and pragmatic approach. I'm at my best when involved from the first drafts on a whiteboard to coding the last polishes of the UI, taking a holistic design approach and adjusting the parameters of my role according to the needs of the project. I believe that user research, understanding strategic goals and working closely with developers and other stakeholders are all equally important in achieving the best results.</p>
                    <p>Despite being a designer first, over the course of my career I have accumulated a lot of experience in mentoring – design thinking methods, facilitating workshops, user tests and creating courses on how to code and design digital products.</p>
                    <p>I regularly put this experience to use during the design process; e.g. to map out user journeys in a workshop with other stakeholders or conduct in-person user interviews.</p>
                </Col>
            </Row>
        </Container>

    </div>
}

export default MainPage;
