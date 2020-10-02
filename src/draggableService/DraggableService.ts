import  { callbackDragEndedType, EnumBoxMode } from "./models/DraggableElementMetaData";
import  { callbackModeChangedType } from "./models/DraggableElementMetaData";
import DraggableElementMetaData from "./models/DraggableElementMetaData";


export default class DraggableService {

    private static instance: DraggableService;
    private startCursorX : number = 0;
    private startCursorY : number = 0;
    private currentlySelectedElement : HTMLDivElement | undefined;
    private currentSelectedBox : DraggableElementMetaData | undefined;
    
    draggableBoxes : Array<DraggableElementMetaData> = new Array<DraggableElementMetaData>();

    private constructor() { 
        
    }

    public static getInstance(): DraggableService {
        if (!DraggableService.instance) {
            DraggableService.instance = new DraggableService();
        }
        return DraggableService.instance;
    }

    clear() {
        this.draggableBoxes = new Array<DraggableElementMetaData>();
    }

    private onMouseMove( e: MouseEvent) : void {
        console.log(`Draggable Service - mouse move`);
        this.draggingMove(e.clientX, e.clientY);
    }

    private onMouseUp( e: MouseEvent) : void {
        console.log(`Draggable Service - mouse UP`);
        this.draggingEnd();
        
    }

    private beginTracking() {
        document.addEventListener('mousemove', (e) =>{this.onMouseMove(e)});
        document.addEventListener('mouseup', (e) =>{this.onMouseUp(e)});
    }

    private endTracking() {
        document.removeEventListener('mousemove', (e) =>{this.onMouseMove(e)});
        document.addEventListener('mouseup', (e) =>{this.onMouseUp(e)});
    }

    registerDraggableRect(
        id: string, 
        element: HTMLDivElement, 
        callbackDragEnded: callbackDragEndedType,
        callbackModeChanged:callbackModeChangedType) {

        var box = new DraggableElementMetaData(id,element, callbackDragEnded, callbackModeChanged);

        // box.toConsole();
        this.draggableBoxes.push(box);
    }

    unRegister(id: string) {

    }

    draggingBegin(element : HTMLDivElement | null ,id: string, x: number, y: number) {
        
        if ( element === null) {
            console.log("Begining drag - no element passed in");
            return;
        }

        this.currentSelectedBox = this.draggableBoxes.find(item => item.rectId === id);

        if ( this.currentSelectedBox === undefined) {
            console.log("Begining drag - can not find id of box passed in");
            return;
        }

        this.beginTracking();

        this.startCursorX = x;
        this.startCursorY = y;
        this.currentlySelectedElement = element;
        this.draggableBoxes.forEach((box) => {
            if ( id === box.rectId) {
                box.callbackModeChanged(EnumBoxMode.absoluteDragging);
            } else {
                box.callbackModeChanged(EnumBoxMode.absolute);
            }
        });
    }

    draggingEnd() {

        this.endTracking();

        if ( this.currentSelectedBox !== undefined) {
            this.currentSelectedBox.callbackDragEnded();
        }
        this.draggableBoxes.forEach((box) => {
            box.callbackModeChanged(EnumBoxMode.relative);
            box.element.style.transform = ``;
        });

        this.currentlySelectedElement = undefined;
        this.currentSelectedBox = undefined;
    }

    draggingMove(x: number, y: number) {
        let deltaX = x - this.startCursorX;
        let deltaY = y - this.startCursorY;
        if ( this.currentlySelectedElement !== undefined) {
         //   console.log(`moving element translate(${deltaX}px,${deltaY}px)`)
             this.currentlySelectedElement.style.transform = `translate(${deltaX}px,${deltaY}px)`;
            //this.element.style.transform = `translate(102px,101px)`;
        } 

    }
}