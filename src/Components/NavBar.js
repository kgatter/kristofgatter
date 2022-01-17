import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import classNames from 'classnames';
import PropTypes from "prop-types";


import {Row, Col, Container} from 'reactstrap';
import styles from "./NavBar.module.scss"
import { ReactComponent as BackButton } from '../Images/backbutton.svg';


export class NavBar extends React.Component {

    static propTypes = {
      location: PropTypes.object.isRequired,
    };

    render() {

    const { location } = this.props;
    const currentLocationHome = location.pathname.length > 1;

    const navClasses = classNames(
      styles.NavBar,
      'text-center text-md-left'
    );

    const backButtonClasses = classNames(
      styles.BackButton,
      {[styles.visible]: true}
    );

    const locationDisplayClasses = classNames(
      styles.displayLocation,
    );

    const locationDisplayText = location.pathname.split('/',2);

    return <nav className={navClasses}>
      <Container>
          <Row>
            <Col className={styles.NavCol}>
              <Link className={styles.BackLink} to={"/"}>
                {currentLocationHome ? <BackButton className={backButtonClasses} /> : null}
                <span>Reuven I. Kristof Gatter <b>Digital Product Designer</b></span>
              </Link>
              {currentLocationHome ? <span className={locationDisplayClasses}>{locationDisplayText}</span> : null}
            </Col>
          </Row>
      </Container>
    </nav>
    }
}

const NavBarWithRouter = withRouter(NavBar);

export default NavBarWithRouter;
