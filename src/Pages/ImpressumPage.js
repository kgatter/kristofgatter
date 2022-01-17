import React from 'react';
import {Row, Col, Container} from 'reactstrap';

import pageStyles from "./PageLayout.module.scss";


function ImpressumPage() {

    return <Container>
            <Row className={[pageStyles.Row, "justify-content-between"].join(' ')}>
                <Col xs={12} md={7} fluid className="text-center text-md-left order-2 order-md-1">
                  <h1>Impressum</h1>
                    <p>Kristof Gatter<br />
                    Freiberuflicher Designer<br />Weserstr 77<br />12059 Berlin
                      </p>
                      <p>
                        E-Mail: <a href="mailto:mail@kristofgatter.com">mail@kristofgatter.com</a><br />
                      </p>
                      <p>Umsatzsteuer-ID:<br />DE257795740</p>
                </Col>
            </Row>
            <Row>
              <Col>
                <h2>Font License</h2>
                <p>This font software is the property of Commercial Type.</p>
                <p>You may not modify the font software, use it on another website, or install it on a computer.</p>
                <p>Copyright (C) 2019 Schwartzco Inc.</p>
                <p>License: 1907-USRMIG</p>
              </Col>
            </Row>
        </Container>
}

export default ImpressumPage;
