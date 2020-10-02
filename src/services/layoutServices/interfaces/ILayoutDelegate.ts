import { Rectangle } from './../../draggableService/models/Rectangle';
import DraggableElementMetaData from "../../draggableService/models/DraggableElementMetaData";

export interface ILayoutDelegate {
    /**
     * User has grabbed an element and is starting to drag/drop
     */
    sessionBegins:(selectedElement: DraggableElementMetaData, elements:Array<DraggableElementMetaData>) => void;

    /**
     * User has dropped the element
     */
    sessionEnds:() => void;

    /**
     * user has dragged element to a new position
     */
    elementMoved:(rect: Rectangle) => void;
}