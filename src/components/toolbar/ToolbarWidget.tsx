import { AppBar }                               from '@material-ui/core';
import { Box }                                  from '@material-ui/core';
import { classStyleDefinition }                 from './classStyleDefinition';
import { EnumEditorMode }                       from '../../services/layoutServices/enums/LayoutEnums';
import { EnumMyIcon }                           from '../myIcon/MyIcon';
import { IconButton }                           from '@material-ui/core';
import { IMyLayoutBusEvents }                   from '../../services/eventbus/EventBusFactory';
import { Toolbar }                              from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import { useState }                             from 'react';
import ButtonLayoutModeWidget                   from '../mySelect/MySelect';
import EditorModeSelectButton                   from '../editorModeSelectButton/EditorModeSelectButton';
import EventBusFactory                          from '../../services/eventbus/EventBusFactory';
import FeaturedPlayListOutlinedIcon             from '@material-ui/icons/FeaturedPlayListOutlined';
import MyIcon                                   from '../myIcon/MyIcon';
import MySelectItem                             from '../mySelect/MySelectItem';
import React                                    from 'react';

const ToolbarWidget: React.FC = () => {

  const classStyles = classStyleDefinition();
  const [layoutEventBus] = useState<IMyLayoutBusEvents>(EventBusFactory.get());

  const layoutModes: Array<MySelectItem> = [
    new MySelectItem(`${EnumMyIcon.LayoutSingleColumn}`, 'Single Column', <MyIcon icon={EnumMyIcon.LayoutSingleColumn} />),
    new MySelectItem(`${EnumMyIcon.LayoutGridHorizontal}`, 'Grid Horizontal', <MyIcon icon={EnumMyIcon.LayoutGridHorizontal} />),
    new MySelectItem(`${EnumMyIcon.LayoutGridVertical}`, 'Grid Vertical', <MyIcon icon={EnumMyIcon.LayoutGridVertical} />),
    new MySelectItem(`${EnumMyIcon.LayoutColumns}`, 'Columns', <MyIcon icon={EnumMyIcon.LayoutColumns} />),
    new MySelectItem(`${EnumMyIcon.LayoutRows}`, 'Rows', <MyIcon icon={EnumMyIcon.LayoutRows} />)
  ];

  const [layoutModeState,SetLayoutModeState ] = useState<MySelectItem>(layoutModes[0]);
  const [inEditModeState, SetInEditModeState] = useState<EnumEditorMode>(EnumEditorMode.LayoutMode)

  const handleLayoutModeChanged = (item: MySelectItem) => {
    SetLayoutModeState(item);
    layoutEventBus.notificationLayoutChanged("",{layout: item});
  }

  const handleEditorModeEnumChange = (mode: EnumEditorMode) => {
    SetInEditModeState(mode);
    layoutEventBus.notificationEditorModeChanged({mode: mode});
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
          <Box pr={2}>
            <EditorModeSelectButton mode={inEditModeState} onChange={handleEditorModeEnumChange}/>          
          </Box>
          <div className={classStyles.right}>
            <ButtonLayoutModeWidget selectedItem={layoutModeState} items={layoutModes} onSelected={handleLayoutModeChanged}  />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ToolbarWidget;
