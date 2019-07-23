import React from 'react';
import {LINKS} from "../Links";
import {Link} from "react-router-dom";
import classNames from 'classnames';


import {Row, Col, Container} from 'reactstrap';
import styles from "./NavBar.module.scss"


function NavBar() {

    let navClasses = classNames({
      'NavBar': true,
      'BackButton': false
    })

    return <nav className={navClasses}>
      <Container>
          <Row>
            <Col>
              Kristof Gatter <b>Digital Product Designer</b>
            </Col>
          </Row>
      </Container>
    </nav>
}

export default NavBar;
