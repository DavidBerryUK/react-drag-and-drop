import { useSpring } from 'framer-motion';
import { Rectangle } from './Rectangle';
export type callbackModeChangedType = (mode: EnumBoxMode) => void
export type callbackDragEndedType = () => void

export enum EnumBoxMode {
    relative,
    absolute,
    absoluteDragging
}

export default class ElementMetaData {

    rectId: string;
    rect: Rectangle;
    element: HTMLDivElement;
    animationXOffset = useSpring(0, { stiffness: 300, damping:50, restDelta: 0.1 })
    animationYOffset = useSpring(0, { stiffness: 300, damping: 50, restDelta: 0.1 })

    callbackModeChanged: callbackModeChangedType;
    callbackDragEnded: callbackDragEndedType;

    constructor(
        rectId: string,
        element: HTMLDivElement,
        callbackDragEnded: callbackDragEndedType,
        callbackModeChanged: callbackModeChangedType) {
        
        this.callbackModeChanged = callbackModeChanged;
        this.callbackDragEnded = callbackDragEnded;
        this.rectId = rectId;
        this.element = element;
        this.rect = Rectangle.fromDomRect(element.getBoundingClientRect());
    }

}