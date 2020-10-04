import { EnumBoxMode }                          from '../services/draggableService/models/ElementMetaData';
import { MouseEvent }                           from 'react';
import { useLayoutEffect }                      from 'react';
import { useRef }                               from 'react';
import { useState }                             from 'react';
import { v4 as uuidv4 }                         from 'uuid';
import DraggableService                         from '../services/draggableService/DraggableService';
import React                                    from 'react';
import { motion, useSpring }                               from "framer-motion"


interface IProperties {
    boxId: number
}

const DraggableElement: React.FC<IProperties> = (props) => {

    const boxRef = React.useRef<HTMLDivElement>(null);
    const elementIdRef = useRef<string>(uuidv4());
    const mouseIsDownRef = useRef(false);
    const clientRectangleRef = useRef(new DOMRect())
    const draggableServiceRef = useRef<DraggableService>(DraggableService.getInstance());
    const [modeState, setModeState] = useState(EnumBoxMode.relative);

   
    


    useLayoutEffect(() => {

        function changeMode(mode: EnumBoxMode): void {
            setModeState(mode);
        }

        function dragEnded(): void {
            mouseIsDownRef.current = false;
        }

        if (boxRef.current !== null) {
            var clientRectangle = boxRef.current?.getBoundingClientRect();
            if (clientRectangle !== undefined && clientRectangle !== null) {
                clientRectangleRef.current = clientRectangle
                draggableServiceRef.current.registerDraggableRect(elementIdRef.current, boxRef.current, dragEnded, changeMode);
            }
        }
    }, [boxRef]);

    const handleOnMouseDown = (event: MouseEvent<HTMLDivElement>) => {
        mouseIsDownRef.current = true;
        draggableServiceRef.current.draggingBegin(elementIdRef.current, event.clientX, event.clientY);
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
                return `box box-style-${props.boxId}  mode-relative`
            case EnumBoxMode.absolute:
                return `box box-style-${props.boxId}  mode-fixed `
            case EnumBoxMode.absoluteDragging:
                return `box box-style-${props.boxId}  mode-fixed-dragging`

        }
    }

    return (
        <>
            <motion.div ref={boxRef} className={createBoxClass()} style={createBoxStyle()} onMouseDown={handleOnMouseDown}>
            </motion.div>
        </>
    );
};

export default DraggableElement;
