import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styles from './WorkItem.module.scss';
import classNames from 'classnames';
import {Button} from 'reactstrap';

export class WorkItem extends React.Component {

  render() {

    const itemClasses = classNames(
        styles.WorkItem,
        this.props.className,
    );

    return (
      <div className={itemClasses}>
        <Container>
          <Row>
            <Col>
              <h1>{this.props.headline}</h1>
            </Col>
          </Row>
          { this.props.image ?
          <Row>
            <Col xs={12}>
              <img width="100%" src={this.props.image} />
            </Col>
          </Row>
          : null }
          <Row>
            <Col md="8">
              <p className={styles.paragraph}>{this.props.paragraph}</p>
            </Col>
          </Row>
        </Container>
        </div>
      )
    }
}

export default WorkItem;
