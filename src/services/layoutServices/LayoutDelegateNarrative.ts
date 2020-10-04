import { ILayoutDelegate }                      from './interfaces/ILayoutDelegate';
import { Rectangle }                            from './../draggableService/models/Rectangle';
import ElementMetaData                 from '../draggableService/models/ElementMetaData';
import ElementMetaDataCollection from '../draggableService/models/ElementMetaDataCollection';

export default class LayoutDelegateNarrative implements ILayoutDelegate {

    private elements: ElementMetaDataCollection | undefined;
    private selectedElement: ElementMetaData | undefined;

    sessionBegins(selectedElement: ElementMetaData, elements: ElementMetaDataCollection) {        
        this.elements = elements;
        this.selectedElement = selectedElement;
    }

    sessionEnds() {
        this.elements = undefined;
        this.selectedElement = undefined;
    }

    elementMoved(rect: Rectangle) {        

        if (this.selectedElement === undefined && this.elements === undefined) {
            return;
        }

        this.elements!.listSorted.forEach((item) => {            
            if ( this.selectedElement!.rect.centerY < item.rect.centerY ) {
                
            }
        });
    }

}