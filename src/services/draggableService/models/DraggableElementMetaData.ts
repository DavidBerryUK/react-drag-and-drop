import { Rectangle } from './Rectangle';
export type callbackModeChangedType = (mode: EnumBoxMode) => void
export type callbackDragEndedType = () => void

export enum EnumBoxMode {
    relative,
    absolute,
    absoluteDragging
}

export default class DraggableElementMetaData {

    rectId: string;
    rect: Rectangle;
    element: HTMLDivElement;

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