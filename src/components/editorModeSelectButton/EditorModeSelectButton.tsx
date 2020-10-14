import { EnumEditorMode }                       from '../../services/layoutServices/enums/LayoutEnums';
import { ToggleButton }                         from '@material-ui/lab';
import { ToggleButtonGroup }                    from '@material-ui/lab';
import React                                    from 'react';

interface IProperties {
    mode: EnumEditorMode,
    onChange: (mode: EnumEditorMode) => void
}

const EditorModeSelectButton: React.FC<IProperties> = (props) => {    

    const handleChange = (event: React.MouseEvent<HTMLElement>, editMode: EnumEditorMode) => {
        props.onChange(editMode);
    };

    return (
        <ToggleButtonGroup value={`${props.mode}`} exclusive onChange={handleChange}>
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
