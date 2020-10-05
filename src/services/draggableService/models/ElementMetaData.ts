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
    currentRelativeRect: Rectangle;
    targetRect: Rectangle;
    elementOuter: HTMLDivElement;
    elementInner: HTMLDivElement;
    xRef: React.MutableRefObject<number>;
    yRef: React.MutableRefObject<number>;
    elevatedRef: React.MutableRefObject<boolean>;

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
        this.currentRelativeRect = new Rectangle(elementOuter.offsetLeft,elementOuter.offsetTop,elementOuter.clientWidth,elementOuter.clientHeight);              
        this.targetRect = this.currentRelativeRect;
    }
}