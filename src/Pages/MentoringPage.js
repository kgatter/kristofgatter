import React from 'react';
import {Row, Col, Container} from 'reactstrap';

import KGButton from "../Components/Button";
import pageStyles from "./PageLayout.module.scss";

import WorkItem from "../Components/WorkItem";
import WorkLink from '../Components/WorkLink';

import ImageDiplom from "../Images/Work/udk.jpg";
import ImageDessau from "../Images/Work/dessau.jpg";



function MentoringPage() {

    const headline = "I work as part of a team.",
    paragraph1 = "The role of designer shoudn't be an isolated one. Working closely with developers and other stakeholders on any given project is of paramount importance to generating buy-in and achieving the best possible results.\n\nRead about a couple of examples below on how I strive to make this happen in my own design projects and what I do to advance the cause of agile, siloless digital product creation in general.",
    button1 = "Get in Touch",
    teachingH1 = "Teaching",
    teachingP1 = 'Because I believe you can’t be a good digital product designer without understanding and using the underlying technologies, I have created a course curriculum and a bespoke teaching app in order to teach web tech to students studying visual communcations at the Berlin University of Arts, my alma mater.\n\nThe course ran 2013-2017, and utilized a custom web-app running on node.js / socket.io to bring interactive exercises and code examples directly on the students’ computers’ screens.\n\nDeveloping the app and the coursework was part of my own diploma at the university in 2014.\n\nI was also mentor-in-residence at Startup Institute, an adult education startup based in Boston, during their brief tenure in Berlin, teaching a course on UX and human centered design.',
    oxH1 = "Ox Collective & Berliner Philharmoniker (2018–)",
    oxP1 = "Ox Collective is a design collective based in Berlin. They are the creators of the award-winning Digital Concert Hall app of the Berliner Philharmoniker. I have been working with them to create a strategy on how to move their client toward a more structured and fact-based decision-making process concerning their digital products.",
    workshopsH1 = "Innovation Workshops",
    workshopsP1 = 'I regularly participate as a design mentor in workshops for startups and established companies interested in innovation – e.g. the accelerator camp Power to Idea in cooperation with the online magazine Gründerszene and the innovation agency Ignore Gravity seen in the photo. I usually help participants with input on visual stroytelling, creating pitch presentations and mock-ups.'

    return <Container>
            <Row className={pageStyles.Row}>
              <Col md="8" fluid>
                  <h1>{headline}</h1>
                  <p>{paragraph1}</p>
                <a href="mailto:mail@kristofgatter.com"><KGButton green>{button1}</KGButton></a>
              </Col>
            </Row>
            <WorkItem
              className={pageStyles.Row}
              headline={workshopsH1}
              paragraph={workshopsP1}
              image={ImageDessau}
            />
            <WorkItem
              className={pageStyles.Row}
              headline={oxH1}
              paragraph={oxP1}
              worklink={<WorkLink to="http://oxcollective.com/" label="Ox Collective" />}
            />
            <WorkItem
              className={pageStyles.Row}
              headline={teachingH1}
              paragraph={teachingP1}
              image={ImageDiplom}
            />
        </Container>
}

export default MentoringPage;
