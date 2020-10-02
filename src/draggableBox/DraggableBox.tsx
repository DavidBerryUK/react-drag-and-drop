import { MouseEvent, useLayoutEffect, useRef, useState } from 'react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import DraggableService from '../draggableService/DraggableService';
import { EnumBoxMode } from '../draggableService/models/DraggableRectInfoModel';

interface IProperties {
    boxNumber: number
}

const DraggableBox: React.FC<IProperties> = (props) => {

    const boxRef = React.useRef<HTMLDivElement>(null);
    const idRef = useRef<string>(uuidv4());
    const mouseIsDownRef = useRef(false);
    const clientRectangleRef = useRef(new DOMRect())
    const [modeState, setModeState] = useState(EnumBoxMode.relative);


    useLayoutEffect(() => {

        console.log("layout!!!!");

        function changeMode(mode: EnumBoxMode): void {
            setModeState(mode);
        }

        function dragEnded(): void {
            console.log("********** DRAG ENDED *************");
            mouseIsDownRef.current = false; 
        }

        if (boxRef.current !== null) {
            var clientRectangle = boxRef.current?.getBoundingClientRect();
            if (clientRectangle !== undefined && clientRectangle !== null) {
                clientRectangleRef.current = clientRectangle
                const svc = DraggableService.getInstance();
                svc.registerDraggableRect(idRef.current, boxRef.current, dragEnded, changeMode);
            }
        }



    }, [boxRef]);

    const handleOnMouseDown = (event: MouseEvent<HTMLDivElement>) => {
        // console.log(`BOX:${props.boxNumber} - Mouse Down`);
        mouseIsDownRef.current = true;
        const svc = DraggableService.getInstance();
        svc.draggingBegin(boxRef.current,idRef.current,event.clientX,event.clientY);
    }

    const handleOnMouseUp = (event: MouseEvent<HTMLDivElement>) => {
        // console.log(`BOX:${props.boxNumber} - Mouse UP`);
        // mouseIsDownRef.current = false;
        // const svc = DraggableService.getInstance();
        // svc.draggingEnd();
    }

    // const handleOnMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    //     console.log(`BOX:${props.boxNumber} - Mouse Leave`);
    //     mouseIsDownRef.current = false;
    //     const svc = DraggableService.getInstance();
    //     svc.draggingEnd();
    // }

    const handleOnMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        
        // if (mouseIsDownRef.current) {
        //     const svc = DraggableService.getInstance();
        //     svc.draggingMove( event.clientX, event.clientY);
        //     // console.log(`BOX:${props.boxNumber} - Mouse MOVE  ${event.clientX}x${event.clientY}`);
        // }
    }

    const createBoxStyle = (): {} => {

        if (modeState) {
            return {
                top: clientRectangleRef.current.y,
                left: clientRectangleRef.current.x
            }
        }

        return {};
    }

    const createBoxClass = () => {

        switch (modeState) {
            case EnumBoxMode.relative:
                return `box box-style-${props.boxNumber}  mode-relative`
            case EnumBoxMode.absolute:
                return `box box-style-${props.boxNumber}  mode-fixed `
            case EnumBoxMode.absoluteDragging:
                return `box box-style-${props.boxNumber}  mode-fixed-dragging`

        }
    }

    return (
        <>
            <div ref={boxRef} className={createBoxClass()} style={createBoxStyle()}
                //onMouseMove={handleOnMouseMove}
                onMouseDown={handleOnMouseDown}
                //onMouseUp={handleOnMouseUp}
                >
            </div>
        </>
    );
};

export default DraggableBox;
