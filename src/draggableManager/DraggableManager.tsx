import './Style.css';
import { useEffect, useRef } from 'react';
import React  from 'react';
import DraggableService from '../draggableService/DraggableService';

const DraggableManager: React.FC = (props) => {
    
    const draggableServiceRef = useRef<DraggableService>(DraggableService.getInstance());

    useEffect(() => {

        console.log('DraggableManager - Set Coords Listener ');

        function onMouseMove( e: MouseEvent) : void {
            console.log(`DraggableManager - mouse move`);
            draggableServiceRef.current.draggingMove(e.clientX, e.clientY);
        }

        function onMouseUp( e: MouseEvent) : void {
            console.log(`DraggableManager - mouse UP`);
            draggableServiceRef.current.draggingEnd();
        }

        function beginTracking() {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }

        function endTracking() {
            document.removeEventListener('mousemove',onMouseMove);
            document.removeEventListener('mouseup',onMouseUp);
        }

        beginTracking();

        return function cleanup() {
            endTracking();
        };
    },[])

    return (
        <>
            <div className='draggable-manager'>
               {props.children}
            </div>
        </>
    );
};

export default DraggableManager;
