import { classStyleDefinition } from './classStyleDefinition';
import { MenuProps } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import MySelectItem from './MySelectItem';
import React from 'react';
import Select from '@material-ui/core/Select';

interface IProperties {
  items: Array<MySelectItem>,
  selectedItem: MySelectItem,
  onSelected?:(item: MySelectItem) => void
}


const MySelect: React.FC<IProperties> = (props) => {  

  const handleChange = (event: any) => {
      if ( props.onSelected === undefined) {
        return;
      }
      const selectId = event.target.value;
      var item = props.items.filter((item) => ( item.id === selectId));
      if (item.length >= 0){
        props.onSelected(item[0]);
      }      
  };

  const classStyles = classStyleDefinition();

  const iconComponent = (props: any) => {
    return (
      <ExpandMoreIcon className={props.className + " " + classStyles.icon} />
    )
  };

  // moves the menu below the select input
  const menuProps: Partial<MenuProps> = {
    classes: {
      paper: classStyles.paper,
      list: classStyles.list
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    getContentAnchorEl: null
  };


  return (
    <FormControl>
      <Select
        disableUnderline
        classes={{ root: classStyles.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={props.selectedItem.id}
        onChange={handleChange}
      >
        {
          props.items.map((item, index) => (
            <MenuItem value={item.id} key={index}>
              <div className={classStyles.content}>
                <div className={classStyles.contentIcon}>
                  {item.icon}
                </div>
                <div className={classStyles.contentText}>
                  {item.name}
                </div>
              </div>
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};


export default MySelect;