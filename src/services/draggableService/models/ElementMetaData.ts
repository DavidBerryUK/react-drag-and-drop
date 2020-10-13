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
    elementOuter: HTMLDivElement;
    elementInner: HTMLDivElement;
    xRef: React.MutableRefObject<number>;
    yRef: React.MutableRefObject<number>;
    elevatedRef: React.MutableRefObject<boolean>;

    /**
     * Both current and target rectangles are relative to the parent.
     * - current rect is the rectangle before any transforms
     * - target rect is the new position calculated by the layout
     *    algorithm, the rectangle may have begun animating to the new
     *    position, but the animation isn't yet complete. 
     */
    currentRect: Rectangle;
    targetRect: Rectangle;

    callbackModeChanged: callbackModeChangedType;
    callbackDragEnded: callbackDragEndedType;

    constructor(
        rectId: string,
        elementOuter: HTMLDivElement,
        elementInner: HTMLDivElement,
        xRef: React.MutableRefObject<number>,
        yRef: React.MutableRefObject<number>,
        elevatedRef: React.MutableRefObject<boolean>,
        callbackDragEnded: callbackDragEndedType,
        callbackModeChanged: callbackModeChangedType) {

        this.callbackModeChanged = callbackModeChanged;
        this.callbackDragEnded = callbackDragEnded;
        this.rectId = rectId;
        this.elementOuter = elementOuter;
        this.elementInner = elementInner;
        this.xRef = xRef;
        this.yRef = yRef;
        this.elevatedRef = elevatedRef;
        
        this.currentRect = new Rectangle(
                elementOuter.offsetLeft,
                elementOuter.offsetTop,
                elementOuter.clientWidth,
                elementOuter.clientHeight);              

        this.targetRect = this.currentRect;
    }
}