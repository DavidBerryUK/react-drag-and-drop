import { callbackDragEndedType }                from "./models/ElementMetaData";
import { callbackModeChangedType }              from "./models/ElementMetaData";
import { EnumBoxMode }                          from "./models/ElementMetaData";
import { ILayoutDelegate }                      from './../layoutServices/interfaces/ILayoutDelegate';
import ElementMetaData                          from "./models/ElementMetaData";
import LayoutDelegateNarrative                  from "../layoutServices/LayoutDelegateNarrative";
import ElementMetaDataCollection                from "./models/ElementMetaDataCollection";


export default class DraggableService {

    private static instance: DraggableService;
    private startCursorX : number = 0;
    private startCursorY : number = 0;
    private currentlySelectedElement : HTMLDivElement | undefined;
    private currentSelectedElement : ElementMetaData | undefined;

    // pointer to mouse events functions so they can be un-registered
    private eventListenerMouseMove?:  (e: MouseEvent) => void | undefined;      
    private eventListenerMouseUp?: (e: MouseEvent) => void | undefined;      
    private layoutDelegate : ILayoutDelegate | undefined;

    private elementList : ElementMetaDataCollection = new ElementMetaDataCollection(); 

    private constructor() { 
        this.layoutDelegate = new LayoutDelegateNarrative();        
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
        this.elementList.clear();
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
            document.removeEventListener('mouseup', this.eventListenerMouseUp);
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

        var box = new ElementMetaData(id,element, callbackDragEnded, callbackModeChanged);

        // box.toConsole();
        this.elementList.add(box);
    }

    /**
     * un register a draggable rectangle
     * @param id 
     */
    public unRegister(id: string) {

    }

    public draggingBegin(id: string, x: number, y: number) {

        this.currentSelectedElement = this.elementList.findById(id);

        if ( this.currentSelectedElement === undefined) {
            console.log("Begining drag - can not find id of box passed in");
            return;
        }

        this.beginTrackingMouse();

        this.startCursorX = x;
        this.startCursorY = y;
        this.currentlySelectedElement = this.currentSelectedElement.element;
        this.elementList.listSorted.forEach((box) => {
            if ( id === box.rectId) {
                box.callbackModeChanged(EnumBoxMode.absoluteDragging);
            } else {
                box.callbackModeChanged(EnumBoxMode.absolute);
            }
        });

        this.layoutDelegate?.sessionBegins(this.currentSelectedElement, this.elementList)
    }

    public draggingEnd() {

        console.log("***************************************** dragging end");

        this.endTrackingMouse();

        if ( this.currentSelectedElement !== undefined) {
            this.currentSelectedElement.callbackDragEnded();
        }
        this.elementList.listSorted.forEach((box) => {
            box.callbackModeChanged(EnumBoxMode.relative);
            box.element.style.transform = ``;
        });

        this.currentlySelectedElement = undefined;
        this.currentSelectedElement = undefined;

        this.layoutDelegate?.sessionEnds();
    }

    public draggingMove(x: number, y: number) {
        
        if ( this.currentlySelectedElement === undefined) {
             return;
        } 

        let deltaX = x - this.startCursorX;
        let deltaY = y - this.startCursorY;        
        
        this.currentlySelectedElement.style.transform = `translate(${deltaX}px,${deltaY}px)`;

        var rectangle = this.currentSelectedElement!.rect.addCoords(deltaX, deltaY);
        this.layoutDelegate?.elementMoved(rectangle);
    }
}