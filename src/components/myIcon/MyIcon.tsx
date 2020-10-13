import React                                        from 'react';
import { classStyleDefinition }                     from './classStyleDefinition';
import { ReactComponent as LayoutColumnSingle }     from "../../svg-icons/layout-column-single.svg";
import { ReactComponent as LayoutGrid }             from "../../svg-icons/layout-grid.svg";
import { ReactComponent as LayoutColumns }          from "../../svg-icons/layout-columns.svg";
import { ReactComponent as LayoutGridHorizontal }   from "../../svg-icons/layout-grid-horizontal.svg";
import { ReactComponent as LayoutGridVertical }     from "../../svg-icons/layout-grid-vertical.svg";
import { ReactComponent as LayoutRows }             from "../../svg-icons/layout-rows.svg";

export enum EnumMyIcon {
    LayoutColumns,
    LayoutGrid,
    LayoutGridHorizontal,
    LayoutGridVertical,
    LayoutRows,
    LayoutSingleColumn
}

export enum EnumMyIconSize {
    Small,
    Medium,
    Large
}

interface IProperties {
    icon: EnumMyIcon,
    size?: EnumMyIconSize,
    color?: string,
}

const MyIcon: React.FC<IProperties> = (props) => {

    const classStyles = classStyleDefinition();

    const getSizeClassName = (size?: EnumMyIconSize): string => {
        if (size === undefined) {
            size = EnumMyIconSize.Medium;
        }

        switch (size) {
            case EnumMyIconSize.Small:
                return classStyles.iconSmall;
            case EnumMyIconSize.Medium:
                return classStyles.iconMedium;
            case EnumMyIconSize.Large:
                return classStyles.iconLarge;
        }
    }

    const color = props.color || "#000";
    const sizeClassName = getSizeClassName(props.size);


    switch (props.icon) {
        case EnumMyIcon.LayoutColumns:
            return <LayoutColumns className={sizeClassName} stroke={color} fill={color} title="Columns" />

        case EnumMyIcon.LayoutGrid:
            return <LayoutGrid className={sizeClassName} stroke={color} fill={color} title="Grid" />

        case EnumMyIcon.LayoutGridHorizontal:
            return <LayoutGridHorizontal className={sizeClassName} stroke={color} fill={color} title="Grid Horizontal" />

        case EnumMyIcon.LayoutGridVertical:
            return <LayoutGridVertical className={sizeClassName} stroke={color} fill={color} title="Grid Vertical" />

        case EnumMyIcon.LayoutRows:
            return <LayoutRows className={sizeClassName} stroke={color} fill={color} title="Rows" />

        case EnumMyIcon.LayoutSingleColumn:
            return <LayoutColumnSingle className={sizeClassName} stroke={color} fill={color} title="Single Column" />
    }



};

export default MyIcon;
