import { EnumBoxMode }                          from '../services/draggableService/models/ElementMetaData';
import { MouseEvent }                           from 'react';
import { useLayoutEffect }                      from 'react';
import { useRef }                               from 'react';
// import { useState }                             from 'react';
import { v4 as uuidv4 }                         from 'uuid';
import CssClassHelper                           from '../services/cssClassHelper/CssClassHelper';
import CssStyleHelper                           from '../services/cssStyleHelper/CssStyleHelper';
import DraggableService                         from '../services/draggableService/DraggableService';
import React                                    from 'react';

interface IProperties {
    boxId: number
}

//
// Draggable elements self-register with the draggable service
//
const DraggableElement: React.FC<IProperties> = (props) => {

    const boxOuterRef = React.useRef<HTMLDivElement>(null);
    const boxInnerRef = React.useRef<HTMLDivElement>(null);
    const elementIdRef = useRef<string>(uuidv4());
    const mouseIsDownRef = useRef(false);
    const draggableServiceRef = useRef<DraggableService>(DraggableService.getInstance());
    // const [modeState, setModeState] = useState(EnumBoxMode.relative);


    const cssClassHelperInner = useRef<CssClassHelper>(new CssClassHelper());
    const cssStyleHelperInner = useRef<CssStyleHelper>(new CssStyleHelper());

    const cssClassHelperOuter = useRef<CssClassHelper>(new CssClassHelper());
    const cssStyleHelperOuter = useRef<CssStyleHelper>(new CssStyleHelper());

    const xRef = useRef(0);
    const yRef = useRef(0);
    const elevatedRef = useRef(false)

    useLayoutEffect(() => {        



        function changeMode(mode: EnumBoxMode): void {
            // setModeState(mode);
        }

        function dragEnded(): void {
            mouseIsDownRef.current = false;

        }

        if (boxOuterRef.current !== null && boxInnerRef.current !== null) {

            draggableServiceRef.current.registerDraggableRect(
                elementIdRef.current,
                boxOuterRef.current,
                boxInnerRef.current,
                xRef,
                yRef,
                elevatedRef,
                dragEnded,
                changeMode);


        }

        console.log('add default classes');
        cssClassHelperOuter.current.clearClass().addClass("box mode-relative");
        boxOuterRef.current!.className = cssClassHelperOuter.current.cssClass;

        cssClassHelperInner.current.clearClass().addClass(`box-style-${props.boxId} box-inner`);
        boxInnerRef.current!.className = cssClassHelperInner.current.cssClass;

    }, [boxOuterRef, props.boxId]);

    /**
     * MOUSE DOWN - Drag started by user
     * @param event 
     */
    const handleOnMouseDown = (event: MouseEvent<HTMLDivElement>) => {
        mouseIsDownRef.current = true;
        draggableServiceRef.current.draggingBegin(elementIdRef.current, event.clientX, event.clientY);
    }

    // const createBoxClassOuter = () => {
    //     switch (modeState) {
    //         case EnumBoxMode.relative:
    //             return `box mode-relative`
    //         case EnumBoxMode.absolute:
    //             return `box mode-fixed box-animating`
    //         case EnumBoxMode.absoluteDragging:
    //             return `box mode-fixed-dragging`
    //     }
    // }

    return (
        <>
            <div ref={boxOuterRef} className={cssClassHelperOuter.current.cssClass} style={cssStyleHelperOuter.current.cssStyle}
                onMouseDown={handleOnMouseDown} >
                <div ref={boxInnerRef} className={cssClassHelperInner.current.cssClass} style={cssStyleHelperInner.current.cssStyle} >
                        this is a test
                </div>
            </div>
        </>
    );


    // return (
    //     <>
    //         <div ref={boxOuterRef} className={createBoxClassOuter()} onMouseDown={handleOnMouseDown}>
    //             <div ref={boxInnerRef} className={`box-style-${props.boxId} box-inner`} >

    //             </div>
    //         </div>
    //     </>
    // );
};

export default DraggableElement;
