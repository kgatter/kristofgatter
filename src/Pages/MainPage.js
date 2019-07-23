import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import {LINKS} from "../Links";
import {Link} from "react-router-dom";
import portrait from "../Images/portrait.png"

import KGButton from "../Components/Button";
import styles from "./MainPage.module.scss";



function MainPage() {

    const headline = "I build digital products that feel right and make sense.",
    button1 = "Get in Touch",
    paragraph1 = "Digital product development is a complicated process where working siloed can lead to a lot of frustration of the people involved. In my experience, the best way to avoid this is by being committed to a closely integrated, agile design and development process.",
    paragraph2 = "I believe that user research, understanding strategic goals and working closely with developers and other stakeholders are all equally important in achieving the best results.",
    button2 = "Read More About How I Work",
    paragraph3 = "Despite being a designer first, over the course of my career I have accumulated a lot of experience in mentoring – design thinking methods, facilitating workshops, user tests and creating courses on how to code and design digital products.",
    paragraph4 = "I regularly put this experience to use during the design process; e.g. to map out user journeys in a workshop with other stakeholders or conduct in-person user interviews.",
    button3 = "Read More About Mentoring"

    return <Container>
            <Row className={[styles.Row, "justify-content-between"].join(' ')}>
                <Col md="7" fluid className="text-center text-md-left order-2 order-md-1">
                    <h1>{headline}</h1>
                    <a href="mailto:mail@kristofgatter.com"><KGButton green>{button1}</KGButton></a>
                </Col>
                <Col md="4" className="text-center text-md-right order-1 order-md-2">
                  <img className={styles.Portrait} src={portrait} alt="Kristof Gatter's Portrait"/>
                </Col>
            </Row>
            <Row className={styles.Row}>
              <Col md="8">
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
                <Link to={LINKS.WORK}><KGButton purple>{button2}</KGButton></Link>
              </Col>
            </Row>
            <Row className={styles.Row}>
              <Col md="8">
                <p>{paragraph3}</p>
                <p>{paragraph4}</p>
                <Link to={LINKS.MENTORING}><KGButton sand>{button3}</KGButton></Link>
              </Col>
            </Row>
        </Container>
}

export default MainPage;