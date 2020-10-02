import  { callbackDragEndedType, EnumBoxMode } from "./models/DraggableRectInfoModel";
import  { callbackModeChangedType } from "./models/DraggableRectInfoModel";
import DraggableRectInfoModel from "./models/DraggableRectInfoModel";


export default class DraggableService {

    private static instance: DraggableService;
    private cursorX : number = 0;
    private cursorY : number = 0;
    private currentlySelectedElement : HTMLDivElement | undefined;
    private currentSelectedBox : DraggableRectInfoModel | undefined;
    
    draggableBoxes : Array<DraggableRectInfoModel> = new Array<DraggableRectInfoModel>();

    private constructor() { }

    public static getInstance(): DraggableService {
        if (!DraggableService.instance) {
            DraggableService.instance = new DraggableService();
        }
        return DraggableService.instance;
    }

    clear() {
        this.draggableBoxes = new Array<DraggableRectInfoModel>();
    }

    registerDraggableRect(
        id: string, 
        element: HTMLDivElement, 
        callbackDragEnded: callbackDragEndedType,
        callbackModeChanged:callbackModeChangedType) {

        var box = new DraggableRectInfoModel(id,element, callbackDragEnded, callbackModeChanged);

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

        this.currentSelectedBox = this.draggableBoxes.find(item => item.id === id);

        if ( this.currentSelectedBox === undefined) {
            console.log("Begining drag - can not find id of box passed in");
            return;
        }

        console.log("SELECTED BOX");
        console.log(this.currentSelectedBox);

        this.cursorX = x;
        this.cursorY = y;
        this.currentlySelectedElement = element;
        this.draggableBoxes.forEach((box) => {
            if ( id === box.id) {
                box.callbackModeChanged(EnumBoxMode.absoluteDragging);
            } else {
                box.callbackModeChanged(EnumBoxMode.absolute);
            }
        });
    }

    draggingEnd() {
        console.log("dragging ended!");

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
        let deltaX = x - this.cursorX;
        let deltaY = y - this.cursorY;
        if ( this.currentlySelectedElement !== undefined) {
         //   console.log(`moving element translate(${deltaX}px,${deltaY}px)`)
             this.currentlySelectedElement.style.transform = `translate(${deltaX}px,${deltaY}px)`;
            //this.element.style.transform = `translate(102px,101px)`;
        } 

    }
}