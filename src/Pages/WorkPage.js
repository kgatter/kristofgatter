import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import {LINKS} from "../Links";
import {Link} from "react-router-dom";

import KGButton from "../Components/Button";
import WorkItem from "../Components/WorkItem";
import pageStyles from "./PageLayout.module.scss";

import ImageAtlantisKY1 from "../Images/Work/AtlantisKY1.png";
import ImageSI from "../Images/Work/SI.png";
import VideoAvec from "../Images/Work/avecapp.mp4";
import ImageAvec from "../Images/Work/avecapp.png";

function WorkPage() {

    const headline = "I have a methodical and pragmatic approach to my work.",
    paragraph1 = "I'm at my best when involved in building a product from the first drafts on a whiteboard to coding the last polishes of the UI, taking a holistic design approach and constantly adjusting the parameters of my role according to the needs of the project.",
    paragraph2 = "Check out some examples of my work below or get in touch to request a full portfolio.",
    paragraph3 = "To get a fuller picture, feel free to get in touch with me and request a more extensive PDF portfolio.",
    button1 = "Get in Touch",
    button2 = "Request a Portfolio",
    atlantisH1 = "Atlantis KY1 (2019)",
    atlantisP1 = `Atlantis KY1 is a productivity software for machine workers and process engineers, created by Hackerbay, built on their Atlantis platform. I was the principal designer on the project. I facilitated several workshops with the CEO, the CTO and project management, helping to transform the vision of the product into an actual working MVP in less than three months. \n\nBesides the theoretical and UX/UI work, I've been involved with creating branding assets, copy, as well writing code for the UI.`,
    siH1 = "Small Improvements (2015-2016)",
    siP1 = `Small Improvements is a performance management tool, offered as a SaaS solution to mid-sized companies. During my involvement with the company, I have worked as a UX Designer and a UI Developer. As part of one of three development teams, I was responsible for the UX rework of several key features like "Cycle Creation", and the flagship feature "360 Feedback". \n\nI was also involved with transitioning the app from an old-school static layout to a responsive one and had the opportunity to work with angularJS and React. After joining as a strong advocate of user-centered design principles, user tests became a regular occurrence, despite the company having done only one of them in its 4-year existence altogether before I had joined.`,
    valoraH1 = "Avec App (2019)",
    valoraP1="Avec is a convenience store brand created by Valora, a Swiss retail holding company operating mainly in German-speaking countries. Working with the Hackerbay development team, we created a mobile app for Avec X, the experimental, cashierless flagship store of the brand located in Zurich's Central Station.\n\nThe app enables a fully cashierless shopping experience. Customers can scan and pay items directly on their phones and can even use the app to unlock the doors at night or whenever no support personnel is present. After a successful test run in April 2019, a rollout of this system to other locations in Switzerland is underway."

    return <div>
        <Container>
            <Row className={pageStyles.Row}>
              <Col lg={9} xs={12}>
                  <h1>{headline}</h1>
                    <p>{paragraph1}</p>
                    <p>{paragraph2}</p>
                  <a href="mailto:mail@kristofgatter.com"><KGButton green>{button1}</KGButton></a>
              </Col>
            </Row>
        </Container>
        <WorkItem
          className={pageStyles.Row}
          headline={atlantisH1}
          paragraph={atlantisP1}
          image={ImageAtlantisKY1}
        />
        <WorkItem
          className={pageStyles.Row}
          headline={valoraH1}
          paragraph={valoraP1}
          video={VideoAvec}
          poster={ImageAvec}
        />
        <WorkItem
          className={pageStyles.Row}
          headline={siH1}
          paragraph={siP1}
          image={ImageSI}
        />
        <Container>
          <Row>
            <Col lg={8}>
              <p>{paragraph3}</p>
                <a href="mailto:mail@kristofgatter.com?subject=Requesting a Portfolio&body=I'm interested in more of your work. Please send me a PDF portfolio."><KGButton green>{button2}</KGButton></a>
              <p></p>
            </Col>
          </Row>
        </Container>
      </div>
}

export default WorkPage;
