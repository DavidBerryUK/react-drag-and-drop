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
    // currentAbsoluteRect: Rectangle;
    currentRelativeRect: Rectangle;
    targetRect: Rectangle;
    element: HTMLDivElement;
    xRef: React.MutableRefObject<number>;
    yRef: React.MutableRefObject<number>;
    elevatedRef: React.MutableRefObject<boolean>;

    callbackModeChanged: callbackModeChangedType;
    callbackDragEnded: callbackDragEndedType;

    constructor(
        rectId: string,
        element: HTMLDivElement,
        xRef: React.MutableRefObject<number>,
        yRef: React.MutableRefObject<number>,
        elevatedRef: React.MutableRefObject<boolean>,
        callbackDragEnded: callbackDragEndedType,
        callbackModeChanged: callbackModeChangedType) {

        this.callbackModeChanged = callbackModeChanged;
        this.callbackDragEnded = callbackDragEnded;
        this.rectId = rectId;
        this.element = element;
        this.xRef = xRef;
        this.yRef = yRef;
        this.elevatedRef = elevatedRef;
        this.currentRelativeRect = new Rectangle(element.offsetLeft,element.offsetTop,element.clientWidth,element.clientHeight);    
        // this.currentAbsoluteRect = Rectangle.fromDomRect(element.getBoundingClientRect());                 
        this.targetRect = this.currentRelativeRect;
    }
}