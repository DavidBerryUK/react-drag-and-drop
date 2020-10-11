import { AppBar } from '@material-ui/core';
import { classStyleDefinition } from './classStyleDefinition';
import { EnumMyIcon } from '../myIcon/MyIcon';
import { IconButton } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useState } from 'react';
import ButtonLayoutModeWidget from '../mySelect/MySelect';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import MyIcon from '../myIcon/MyIcon';
import MySelectItem from '../mySelect/MySelectItem';
import React from 'react';

const ToolbarWidget: React.FC = () => {

  const classStyles = classStyleDefinition();

  const layoutModes: Array<MySelectItem> = [
    new MySelectItem(`${EnumMyIcon.LayoutSingleColumn}`, 'Single Column', <MyIcon icon={EnumMyIcon.LayoutSingleColumn} />),
    new MySelectItem(`${EnumMyIcon.LayoutGridHorizontal}`, 'Grid Horizontal', <MyIcon icon={EnumMyIcon.LayoutGridHorizontal} />),
    new MySelectItem(`${EnumMyIcon.LayoutGridVertical}`, 'Grid Vertical', <MyIcon icon={EnumMyIcon.LayoutGridVertical} />),
    new MySelectItem(`${EnumMyIcon.LayoutColumns}`, 'Columns', <MyIcon icon={EnumMyIcon.LayoutColumns} />),
    new MySelectItem(`${EnumMyIcon.LayoutRows}`, 'Rows', <MyIcon icon={EnumMyIcon.LayoutRows} />)
  ];

  const [layoutModeState,SetLayoutModeState ] = useState<MySelectItem>(layoutModes[0]);

  const handleLayoutModeChanged = (item: MySelectItem) => {
    SetLayoutModeState(item);
  }

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
            <ButtonLayoutModeWidget selectedItem={layoutModeState} items={layoutModes} onSelected={handleLayoutModeChanged}  />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ToolbarWidget;
