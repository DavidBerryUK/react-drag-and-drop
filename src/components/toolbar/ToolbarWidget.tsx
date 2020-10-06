import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import ButtonLayoutModeWidget from '../buttonLayoutMode/ButtonLayoutModeWidget';
import { classStyleDefinition } from './classStyleDefinition';

const ToolbarWidget: React.FC = () => {

  const classStyles = classStyleDefinition();

  return (
    <div className={classStyles.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classStyles.left}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <FeaturedPlayListOutlinedIcon />
            </IconButton>
            <Typography variant="h6" className={classStyles.title} >
              Dynamic Layout
        </Typography>
          </div>
          <div className={classStyles.right}>
           <ButtonLayoutModeWidget /> 
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ToolbarWidget;
