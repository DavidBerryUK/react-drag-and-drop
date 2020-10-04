import { Rectangle } from './../../draggableService/models/Rectangle';
import ElementMetaData from "../../draggableService/models/ElementMetaData";
import ElementMetaDataCollection from '../../draggableService/models/ElementMetaDataCollection';

export interface ILayoutDelegate {
    /**
     * User has grabbed an element and is starting to drag/drop
     */
    sessionBegins:(selectedElement: ElementMetaData, elements:ElementMetaDataCollection) => void;

    /**
     * User has dropped the element
     */
    sessionEnds:() => void;

    /**
     * user has dragged element to a new position
     */
    elementMoved:(rect: Rectangle) => void;
}