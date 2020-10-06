import './Style.css';
import React from 'react';
import DraggableElement from '../../draggableElement/DraggableElement';

const DemoContainerWidget: React.FC = () => {

    return (
        <div className='demo-area'>
            <DraggableElement boxId={1} />
            <DraggableElement boxId={2} />
            <DraggableElement boxId={3} />
            <DraggableElement boxId={4} />
            <DraggableElement boxId={5} />
            <DraggableElement boxId={6} />
        </div>
    );
};

export default DemoContainerWidget;
