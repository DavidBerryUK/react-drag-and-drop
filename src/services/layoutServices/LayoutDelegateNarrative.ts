import { ILayoutDelegate }                      from './interfaces/ILayoutDelegate';
import { Rectangle }                            from './../draggableService/models/Rectangle';
import ElementMetaData                          from '../draggableService/models/ElementMetaData';
import ElementMetaDataCollection                from '../draggableService/models/ElementMetaDataCollection';

export default class LayoutDelegateNarrative implements ILayoutDelegate {

    private elements: ElementMetaDataCollection | undefined;
    private selectedElement: ElementMetaData | undefined;
    private minY : number = 0;

    sessionBegins(selectedElement: ElementMetaData, elements: ElementMetaDataCollection) {        
        console.log("LayoutDelegateNarrative: Session Begins");
        this.elements = elements;
        this.selectedElement = selectedElement;
        if (this.elements.list.length > 0) {
            this.minY =  this.elements.listSorted[0].currentRect.y
        } else {
            this.minY = 0
        }
    }

    sessionEnds() {
        console.log("LayoutDelegateNarrative: Session Ends");
        this.elements = undefined;
        this.selectedElement = undefined;
    }

    elementMoved(rect: Rectangle) {        

        if (this.selectedElement === undefined && this.elements === undefined) {
            return;
        }

        console.log("LayoutDelegateNarrative: Moved");

        // let y = this.minY;
        // this.elements!.listSorted.forEach((item) => {            
        //     if ( this.selectedElement!.currentRect.centerY < item.currentRect.centerY ) {
                
        //     }
        // });
    }

}