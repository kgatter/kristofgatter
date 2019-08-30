import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import {LINKS} from "../Links";
import {Link} from "react-router-dom";

import KGButton from "../Components/Button";
import WorkItem from "../Components/WorkItem";
import WorkLink from '../Components/WorkLink';

import pageStyles from "./PageLayout.module.scss";

import ImageAtlantisKY1 from "../Images/Work/AtlantisKY1.png";
import ImageSI from "../Images/Work/SI.png";
import VideoAvec from "../Images/Work/avecapp.mp4";
import ImageAvec from "../Images/Work/avecapp.png";
import ImageModulor from "../Images/Work/modulorMobile.png";

function WorkPage() {

    const headline = "I have a methodical and pragmatic approach to my work.",
    paragraph1 = "I'm at my best when involved in building a product from the first drafts on a whiteboard to coding the last polishes of the UI, taking a holistic design approach and constantly adjusting the parameters of my role according to the needs of the project.",
    paragraph2 = "Check out some examples of my work below or get in touch to request a full portfolio.",
    paragraph3 = "To get a fuller picture, feel free to get in touch with me and request a more extensive PDF portfolio.",
    button1 = "Get in Touch",
    button2 = "Request a Portfolio",
    atlantisH1 = "Atlantis KY1 (2019)",
    atlantisP1 = `Atlantis KY1 is a productivity software for machine workers and process engineers, created by Hackerbay, built on their Atlantis platform. I was the principal designer on the project. I facilitated several workshops with the CEO, the CTO and project management, helping to transform the vision of the product into an actual working MVP in less than three months. \n\nBesides the theoretical and UX/UI work, I've been involved with creating branding assets, presentations, as well as writing code for the UI.`,
    siH1 = "Small Improvements (2015-2016)",
    siP1 = `Small Improvements is a performance management tool, offered as a SaaS solution to mid-sized companies. During my involvement with the company, I have worked as a UX Designer and a UI Developer. As part of one of three development teams, I was responsible for the UX rework of several key features like "Cycle Creation", and the flagship feature "360 Feedback". \n\nI was also involved with transitioning the app from an old-school static layout to a responsive one and had the opportunity to work with angularJS and React. After joining as a strong advocate of user-centered design principles, user tests became a regular occurrence, despite the company having done only one of them in its 4-year existence altogether before I had joined.`,
    valoraH1 = "Avec App (2019)",
    valoraP1="Avec is a convenience store brand created by Valora, a Swiss retail holding company operating mainly in German-speaking countries. Working with the Hackerbay development team, we created a mobile app for Avec X, the experimental, cashierless flagship store of the brand located in Zurich's Central Station.\n\nThe app enables a fully cashierless shopping experience. Customers can scan and pay items directly on their phones and can even use the app to unlock the doors at night or whenever no support personnel is present. After a successful test run in April 2019, a rollout of this system to other locations in Switzerland is underway.",
    modulorH1 = "Modulor (2018)",
    modulorP1 = "Modulor is a large arts supply retailer in Berlin, with a unique standing among artists and architects across the city. As a freelance UX consultant for their online division, I have helped optimize their current online retail offerings in several ways. Among many smaller upgrades, several iterations on the UX/UI of their online furniture configurator including a mobile-friendly version and improving the product detail view esp. on mobile devices were the most impactful. I also had an impact on the product design process itself: I advocated for the introduction of a living styleguide enabling the in-house graphic desiger to directly tweak the look and feel of UI elements in the store, moving the development process toward a more agile one.\n\nThese improvements were made possible by workshops with employees from all departments of the company; mapping out customer journeys as well as vigorous user- and A/B testing, extensive discussions with employees about and advocacy for a leaner product design process were all necessary in order to generate buy-in across the board."


    return <div>
        <Container>
            <Row className={pageStyles.Row}>
              <Col lg={9} xs={12}>
                  <h1>{headline}</h1>
                    <p>{paragraph1}</p>
                    <p>{paragraph2}</p>
                    <a href="mailto:mail@kristofgatter.com?subject=Requesting a Portfolio&body=I'm interested in more of your work. Please send me a PDF portfolio."><KGButton green>{button2}</KGButton></a>
              </Col>
            </Row>
        </Container>
        <WorkItem
          className={pageStyles.Row}
          headline={atlantisH1}
          paragraph={atlantisP1}
          image={ImageAtlantisKY1}
          worklink={<WorkLink to="http://atlantishq.com" label="Atlantis"/>}
        />
        <WorkItem
          className={pageStyles.Row}
          headline={valoraH1}
          paragraph={valoraP1}
          video={VideoAvec}
          poster={ImageAvec}
          worklink={<WorkLink to="https://hackerbay.com/case-study/valora-avec" label="Hackerbay Case Study"/>}
        />
        <WorkItem
          className={pageStyles.Row}
          headline={modulorH1}
          paragraph={modulorP1}
          image={ImageModulor}
          worklink={<WorkLink to="https://www.modulor.de/" label="Modulor"/>}
        />
        <WorkItem
          className={pageStyles.Row}
          headline={siH1}
          paragraph={siP1}
          image={ImageSI}
          worklink={<WorkLink to="https://www.small-improvements.com/" label="Small Improvements"/>}
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
