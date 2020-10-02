import  { callbackDragEndedType } from "./models/DraggableElementMetaData";
import  { callbackModeChangedType } from "./models/DraggableElementMetaData";
import  { EnumBoxMode } from "./models/DraggableElementMetaData";
import DraggableElementMetaData from "./models/DraggableElementMetaData";


export default class DraggableService {

    private static instance: DraggableService;
    private startCursorX : number = 0;
    private startCursorY : number = 0;
    private currentlySelectedElement : HTMLDivElement | undefined;
    private currentSelectedBox : DraggableElementMetaData | undefined;

    // pointer to mouse events functions so they can be un-registered
    private eventListenerMouseMove?:  (e: MouseEvent) => void | undefined;      
    private eventListenerMouseUp?: (e: MouseEvent) => void | undefined;      
    
    draggableBoxes : Array<DraggableElementMetaData> = new Array<DraggableElementMetaData>();

    private constructor() { 
        
    }

    /**
     * Singleton
     */
    public static getInstance(): DraggableService {
        if (!DraggableService.instance) {
            DraggableService.instance = new DraggableService();
        }
        return DraggableService.instance;
    }

    clear() {
        this.draggableBoxes = new Array<DraggableElementMetaData>();
    }

    /**
     * Event Handler for mouse move
     * @param 
     */
    private onMouseMoveEventHandler( e: MouseEvent) : void {
        this.draggingMove(e.clientX, e.clientY);
    }

    /**
     * Event Handler for mouse up
     * @param e 
     */
    private onMouseUpEventHandler( e: MouseEvent) : void {
        this.draggingEnd();        
    }

    /**
     * Begin tracking the mouse when user is dragging an element
     */
    private beginTrackingMouse() {
        if ( this.eventListenerMouseMove === undefined) {
            this.eventListenerMouseMove = (event:MouseEvent) => { this.onMouseMoveEventHandler(event) };        
        }
        if (this.eventListenerMouseUp === undefined ) {
            this.eventListenerMouseUp = (event: MouseEvent) =>  { this.onMouseUpEventHandler(event) };
        }

        document.addEventListener('mousemove', this.eventListenerMouseMove);
        document.addEventListener('mouseup', this.eventListenerMouseUp);
    }

    /**
     * Stop tracking the mouse when the user is not dragging an element
     */
    private endTrackingMouse() {
        if (this.eventListenerMouseMove !== undefined) {
            document.removeEventListener('mousemove', this.eventListenerMouseMove);
            this.eventListenerMouseMove = undefined;
        }
        if (this.eventListenerMouseUp !== undefined) {
            document.addEventListener('mouseup', this.eventListenerMouseUp);
            this.eventListenerMouseUp = undefined;
        }
    }


    /**
     * Register a draggable rectangle
     * @param id 
     * @param element 
     * @param callbackDragEnded 
     * @param callbackModeChanged 
     */
    public registerDraggableRect(
        id: string, 
        element: HTMLDivElement, 
        callbackDragEnded: callbackDragEndedType,
        callbackModeChanged:callbackModeChangedType) {

        var box = new DraggableElementMetaData(id,element, callbackDragEnded, callbackModeChanged);

        // box.toConsole();
        this.draggableBoxes.push(box);
    }

    /**
     * un register a draggable rectangle
     * @param id 
     */
    public unRegister(id: string) {

    }

    public draggingBegin(id: string, x: number, y: number) {

        this.currentSelectedBox = this.draggableBoxes.find(item => item.rectId === id);

        if ( this.currentSelectedBox === undefined) {
            console.log("Begining drag - can not find id of box passed in");
            return;
        }

        this.beginTrackingMouse();

        this.startCursorX = x;
        this.startCursorY = y;
        this.currentlySelectedElement = this.currentSelectedBox.element;
        this.draggableBoxes.forEach((box) => {
            if ( id === box.rectId) {
                box.callbackModeChanged(EnumBoxMode.absoluteDragging);
            } else {
                box.callbackModeChanged(EnumBoxMode.absolute);
            }
        });
    }

    public draggingEnd() {

        this.endTrackingMouse();

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

    public draggingMove(x: number, y: number) {
        let deltaX = x - this.startCursorX;
        let deltaY = y - this.startCursorY;
        if ( this.currentlySelectedElement !== undefined) {
             this.currentlySelectedElement.style.transform = `translate(${deltaX}px,${deltaY}px)`;
        } 

    }
}