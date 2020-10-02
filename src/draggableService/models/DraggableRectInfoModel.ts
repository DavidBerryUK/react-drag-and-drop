export type callbackModeChangedType = (mode: EnumBoxMode) => void
export type callbackDragEndedType = () => void

export enum EnumBoxMode {
    relative,
    absolute,
    absoluteDragging
}

export default class DraggableRectInfoModel {

    id: string;
    rect: DOMRect | undefined;
    element: HTMLDivElement;

    callbackModeChanged: callbackModeChangedType;
    callbackDragEnded: callbackDragEndedType;


    constructor(
        id: string,
        element: HTMLDivElement,
        callbackDragEnded: callbackDragEndedType,
        callbackModeChanged: callbackModeChangedType) {
        
        this.callbackModeChanged = callbackModeChanged;
        this.callbackDragEnded = callbackDragEnded;
        this.id = id;
        this.element = element;
        this.rect = element.getBoundingClientRect();
    }

    // toConsole() {
    //     if ( this.rect === undefined) {
    //         console.log(`id:${this.id} - no rectangle`);
    //     } else {
    //         console.log(`id:${this.id}  (${this.rect!.x}x${this.rect!.y})-(${this.rect!.width}x${this.rect!.height})`);
    //     }
    // }
}