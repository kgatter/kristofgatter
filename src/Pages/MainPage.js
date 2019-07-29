import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import {LINKS} from "../Links";
import {Link} from "react-router-dom";
import portrait from "../Images/portrait.png";
import ImageWorkedfor from "../Images/workedfor.png";
import ImageWorkedwith from "../Images/workedwith.png";

import KGButton from "../Components/Button";
import pageStyles from "./PageLayout.module.scss";
import styles from "./MainPage.module.scss";




function MainPage() {

    const headline = "I build digital products that feel right and make sense.",
    button1 = "Get in Touch",
    paragraph1 = "Digital product development is a complicated process. Thinking and working siloed can cause a lot of frustration for all people involved.\nIn my experience, the best way to avoid this is by being committed to a closely integrated, agile design and development process.\n\nI believe that user research, understanding strategic goals and working closely with developers and other stakeholders are all equally important in achieving the best results.",
    button2 = "Read More About My Work",
    paragraph2 = "Despite being a designer first, over the course of my career I have accumulated a lot of experience in mentoring – using design thinking methods, facilitating workshops, conducting user tests and creating adult education courses about coding and designing digital products.\n\nI regularly put this experience to use during the design process; e.g. to map out user journeys in a workshop with other stakeholders or conduct in-person user interviews.",
    button3 = "Read More About Mentoring",
    workedfor = "Brands I Have Worked For",
    workedwith = "Agencies I Have Worked With"

    return <Container>
            <Row className={[pageStyles.Row, "justify-content-between"].join(' ')}>
                <Col xs={12} md={7} fluid className="text-center text-md-left order-2 order-md-1">
                    <h1 className={styles.Headline}>{headline}</h1>
                    <a href="mailto:mail@kristofgatter.com"><KGButton green>{button1}</KGButton></a>
                </Col>
                <Col md="4" className="text-center text-md-right order-1 order-md-2">
                  <img className={styles.Portrait} src={portrait} alt="Kristof Gatter's Portrait"/>
                </Col>
            </Row>
            <Row className={pageStyles.Row}>
              <Col xs={12} lg={10} xl={8}>
                <p>{paragraph1}</p>
                <Link to={LINKS.WORK}><KGButton purple>{button2}</KGButton></Link>
              </Col>
            </Row>
            <Row className={pageStyles.Row}>
              <Col xs={12} lg={10} xl={8}>
                <p>{paragraph2}</p>
                <Link to={LINKS.MENTORING}><KGButton sand>{button3}</KGButton></Link>
              </Col>
            </Row>
            <Row className={pageStyles.Row}>
              <Col>
                <h1>References</h1>
                <h3>{workedfor}</h3>
                <img className={styles.LogoGraveyard} src={ImageWorkedfor} />
              </Col>
            </Row>
            <Row className={pageStyles.Row}>
              <Col>
                <h3>{workedwith}</h3>
                <img className={styles.LogoGraveyard} src={ImageWorkedwith} />
              </Col>
            </Row>
            <Row className={pageStyles.Row}>
              <Col>
                <h2>Let's talk about how we can work together.</h2>
                <a href="mailto:mail@kristofgatter.com"><KGButton green>{button1}</KGButton></a>
              </Col>
            </Row>
        </Container>
}

export default MainPage;
