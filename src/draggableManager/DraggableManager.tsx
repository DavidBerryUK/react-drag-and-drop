import './Style.css';
import React  from 'react';

const DraggableManager: React.FC = (props) => {
    
    return (
        <>
            <div className='draggable-manager'>
               {props.children}
            </div>
        </>
    );
};

export default DraggableManager;
