import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import {Button} from 'reactstrap';

export class KGButton extends React.Component {

  render() {

    const buttonClasses = classNames(
        styles.Button,
        this.props.className,
        {
        [styles.Button_green]: this.props.green,
        [styles.Button_purple]: this.props.purple,
        [styles.Button_sand]: this.props.sand
        }
    );

    return (
        <Button
           tag="span"
           className={buttonClasses}
           {...this.props}
           >
           {this.props.children}
        </Button>
      )
    }
}

export default KGButton;
