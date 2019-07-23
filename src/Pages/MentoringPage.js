import React from 'react';
import {Row, Col, Container} from 'reactstrap';

import KGButton from "../Components/Button";
import styles from "./MainPage.module.scss";



function MentoringPage() {

    const headline = "Mentoring",
    paragraph1 = "I'm at my best when involved in building a product from the first drafts on a whiteboard to coding the last polishes of the UI, taking a holistic design approach and constantly adjusting the parameters of my role according to the needs of the project.",
    paragraph2 = "Check out some examples of my work below or get in touch to request a full portfolio.",
    button1 = "Get in Touch"

    return <Container>
            <Row className={[styles.Row, "justify-content-between"].join(' ')}>
              <Col md="8" fluid className="text-center text-md-left order-2 order-md-1">
                  <h1>{headline}</h1>
                <a href="mailto:mail@kristofgatter.com"><KGButton green>{button1}</KGButton></a>
              </Col>
            </Row>
        </Container>
}

export default MentoringPage;
