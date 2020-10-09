import { AppBar } from '@material-ui/core';
import { classStyleDefinition } from './classStyleDefinition';
import { EnumMyIcon } from '../myIcon/MyIcon';
import { EnumMyIconSize } from '../myIcon/MyIcon';
import { IconButton } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import ButtonLayoutModeWidget from '../buttonLayoutMode/ButtonLayoutModeWidget';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import MyIcon from '../myIcon/MyIcon';
import React from 'react';

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
            <MyIcon icon={EnumMyIcon.LayoutSingleColumn} size={EnumMyIconSize.Small} />
            <MyIcon icon={EnumMyIcon.LayoutColumns} size={EnumMyIconSize.Medium} />
            <MyIcon icon={EnumMyIcon.LayoutRows} size={EnumMyIconSize.Large} />
            <MyIcon icon={EnumMyIcon.LayoutGrid} />
            <MyIcon icon={EnumMyIcon.LayoutGridHorizontal} />
            <MyIcon icon={EnumMyIcon.LayoutGridVertical} />
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
