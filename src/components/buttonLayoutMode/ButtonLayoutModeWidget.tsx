import { classStyleDefinition }                 from './classStyleDefinition';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import React from 'react';
import clsx from 'clsx';

/**
 * Present a button with available layout modes in a drop down menu style
 */
const ButtonLayoutModeWidget: React.FC = () => {

  const classStyles = classStyleDefinition();
  

  const handleClick = () => {
    console.info(`You clicked `);
  };


  return (
      <ButtonGroup size="small" aria-label="small outlined button group" className={classStyles.root}>
        <Button className={classStyles.button} >Single Column</Button>
        <Button className={clsx(classStyles.button, classStyles.selected)}>Grid Horizontal</Button>
        <Button className={classStyles.button}>Grid Vertical</Button>
        <Button className={classStyles.button}>Columns</Button>
        <Button className={classStyles.button}>Columns (Compact)</Button>
        <Button className={classStyles.button}>Rows</Button>
        <Button className={classStyles.button}>Rows (Compact)</Button>
      </ButtonGroup>
  );
};

export default ButtonLayoutModeWidget;
