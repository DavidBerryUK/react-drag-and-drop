import { EnumEditorMode }                       from '../../services/layoutServices/enums/LayoutEnums';
import { ToggleButton }                         from '@material-ui/lab';
import { ToggleButtonGroup }                    from '@material-ui/lab';
import { classStyleDefinition }                 from './classStyleDefinition';
import React                                    from 'react';

interface IProperties {
    mode: EnumEditorMode,
    onChange: (mode: EnumEditorMode) => void
}

const EditorModeSelectButton: React.FC<IProperties> = (props) => {    

    const classStyles = classStyleDefinition();

    const handleChange = (event: React.MouseEvent<HTMLElement>, editMode: EnumEditorMode) => {
        props.onChange(editMode);
    };

    return (
        <ToggleButtonGroup 
            exclusive
            className={classStyles.root}
            value={`${props.mode}`} 
            onChange={handleChange}>
            <ToggleButton value={`${EnumEditorMode.ViewMode}`}>
                View
            </ToggleButton>
            <ToggleButton value={`${EnumEditorMode.LayoutMode}`}>
                Layout
            </ToggleButton>
        </ToggleButtonGroup>
    )
};

export default EditorModeSelectButton;
