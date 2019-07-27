import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styles from './WorkItem.module.scss';
import classNames from 'classnames';
// import {Button} from 'reactstrap';
import ReactPlayer from 'react-player'

export class WorkItem extends React.Component {

  render() {

    const itemClasses = classNames(
        styles.WorkItem,
        this.props.className,
    );
    const ReactPlayerConfig = {
      file: {
        attributes: {
          poster: this.props.poster,
        }
      }
    }

    return (
      <div className={itemClasses}>
        <Container>
          <Row>
            <Col>
              <h1>{this.props.headline}</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={6} >
              <p className={styles.paragraph}>{this.props.paragraph}</p>
            </Col>
            { this.props.image ?
              <Col lg={6}>
                <img className={styles.image} width="100%" src={this.props.image} />
              </Col>
            : null }
            { this.props.video ?
              <Col lg={6} >
                <ReactPlayer
                  className={styles.ReactPlayer}
                  url={this.props.video}
                  playing
                  loop
                  controls={false}
                  width="70%"
                  height="auto"
                  volume="0"
                  muted={true}
                  config={ReactPlayerConfig}
                  playsinline
                  />
              </Col>
            : null }

          </Row>
        </Container>
        </div>
      )
    }
}

export default WorkItem;
