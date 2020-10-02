import { ILayoutDelegate }                      from './interfaces/ILayoutDelegate';
import { Rectangle }                            from './../draggableService/models/Rectangle';
import DraggableElementMetaData                 from '../draggableService/models/DraggableElementMetaData';

export default class LayoutDelegateNarrative implements ILayoutDelegate {

    private elements: Array<DraggableElementMetaData> | undefined;
    private selectedElement: DraggableElementMetaData | undefined;

    sessionBegins(selectedElement: DraggableElementMetaData, elements: Array<DraggableElementMetaData>) {        
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

        this.elements!.forEach((item) => {            
            if ( this.selectedElement!.rect.centerY < item.rect.centerY ) {
                
            }
        });
    }

}