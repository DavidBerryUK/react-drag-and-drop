import { callbackDragEndedType }                from "./models/ElementMetaData";
import { callbackModeChangedType }              from "./models/ElementMetaData";
import { EnumBoxMode }                          from "./models/ElementMetaData";
import { ILayoutDelegate }                      from '../layoutServices/interfaces/ILayoutDelegate';
import ElementMetaData                          from "./models/ElementMetaData";
import ElementMetaDataCollection                from "./models/ElementMetaDataCollection";
import LayoutDelegateNarrative                  from "../layoutServices/LayoutDelegateNarrative";
import { Rectangle } from "./models/Rectangle";

export default class DraggableService {

    private static instance: DraggableService;
    private draggingCursorOffsetX: number = 0;
    private draggingCursorOffsetY: number = 0;
    private currentSelectedElement: ElementMetaData | undefined;

    // pointer to mouse events functions so they can be un-registered
    private eventListenerMouseMove?: (e: MouseEvent) => void | undefined;
    private eventListenerMouseUp?: (e: MouseEvent) => void | undefined;
    private layoutDelegate: ILayoutDelegate | undefined;

    private elementList: ElementMetaDataCollection = new ElementMetaDataCollection();

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
    private onMouseMoveEventHandler(e: MouseEvent): void {
        this.draggingMove(e.clientX, e.clientY);
    }

    /**
     * Event Handler for mouse up
     * @param e 
     */
    private onMouseUpEventHandler(e: MouseEvent): void {
        this.draggingEnd();
    }

    /**
     * Begin tracking the mouse when user is dragging an element
     */
    private beginTrackingMouse() {
        if (this.eventListenerMouseMove === undefined) {
            this.eventListenerMouseMove = (event: MouseEvent) => { this.onMouseMoveEventHandler(event) };
        }
        if (this.eventListenerMouseUp === undefined) {
            this.eventListenerMouseUp = (event: MouseEvent) => { this.onMouseUpEventHandler(event) };
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
     * @param elementOuter 
     * @param callbackDragEnded 
     * @param callbackModeChanged 
     */
    public registerDraggableRect(
        id: string,
        elementOuter: HTMLDivElement,
        elementInner: HTMLDivElement,
        xRef: React.MutableRefObject<number>,
        yRef: React.MutableRefObject<number>,
        elevatedRef: React.MutableRefObject<boolean>,
        callbackDragEnded: callbackDragEndedType,
        callbackModeChanged: callbackModeChangedType) {

        var box = new ElementMetaData(id, elementOuter, elementInner, xRef, yRef, elevatedRef, callbackDragEnded, callbackModeChanged);

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

        if (this.currentSelectedElement === undefined) {
            console.log("Begining drag - can not find id of box passed in");
            return;
        }

        this.beginTrackingMouse();


        this.draggingCursorOffsetX = x - this.currentSelectedElement.currentRect.x;
        this.draggingCursorOffsetY = y - this.currentSelectedElement.currentRect.y;

        this.setElevation(this.currentSelectedElement, true);

        this.elementList.listSorted.forEach((box) => {
            this.setCoords(box, box.currentRect.x, box.currentRect.y);
            if (id === box.rectId) {
                box.callbackModeChanged(EnumBoxMode.absoluteDragging);
            } else {
                box.callbackModeChanged(EnumBoxMode.absolute);
            }
        });

        this.layoutDelegate?.sessionBegins(this.currentSelectedElement, this.elementList)
    }

    public draggingEnd() {

        this.endTrackingMouse();

        if (this.currentSelectedElement !== undefined) {
            this.currentSelectedElement.callbackDragEnded();
            this.setElevation(this.currentSelectedElement, false);
        }
        this.elementList.listSorted.forEach((box) => {
            box.callbackModeChanged(EnumBoxMode.relative);
            box.elementOuter.style.transform = ``;
        });

        this.currentSelectedElement = undefined;
        this.layoutDelegate?.sessionEnds();
    }

    public draggingMove(x: number, y: number) {

        if (this.currentSelectedElement === undefined) {
            return;
        }

        let newX = x - this.draggingCursorOffsetX;
        let newY = y - this.draggingCursorOffsetY;

        this.setCoords(this.currentSelectedElement, newX, newY);        
        var rectangle = this.currentSelectedElement!.currentRect.addCoords(newX, newY);

        this.layoutDelegate?.elementMoved( this.currentSelectedElement, this.currentSelectedElement.currentRect.cloneAndSetXY(newX,newY));
    }

    /**
     *  
     * Animation Functions
     * 
     * 
     */


    private setElevation(element: ElementMetaData, elevated: boolean) {
        element.elevatedRef.current = elevated;
        this.setAnimation(element, element.xRef.current, element.yRef.current, elevated);
    }

    private setCoords(element: ElementMetaData, x: number, y: number) {
        element.xRef.current = x;
        element.yRef.current = y;
        this.setAnimation(element, x, y, element.elevatedRef.current);
    }

    private setAnimation = (element: ElementMetaData, x: number, y: number, elevated: boolean) => {
        var s = elevated ? 1.2 : 1;
        var e = elevated ? 10 : 0;
        element.elementOuter.style.transform = `translate(${x}px, ${y}px) `;
        element.elementInner.style.transform = `scale(${s},${s})`;
        element.elementInner.style.boxShadow = `rgba(0, 0, 0, 0.2) 0px ${e}px ${e * 2}px 0px`;
    }


}