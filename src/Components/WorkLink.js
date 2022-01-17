import React from 'react';
import styles from './WorkLink.module.scss';
import PropTypes from "prop-types";
import { ReactComponent as LinkIcon } from '../Images/link.svg';


export class KGButton extends React.Component {

  static propTypes = {
    to: PropTypes.object.isRequired,
    label: PropTypes.object.isRequired
  };

  render() {



    return (
      <a href={this.props.to} className={styles.Link} target="_blank" rel="noopener noreferrer">{this.props.label}&nbsp;&nbsp;<LinkIcon /></a>
      )
    }
}

export default KGButton;
