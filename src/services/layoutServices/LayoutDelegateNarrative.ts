import { ILayoutDelegate }                      from './interfaces/ILayoutDelegate';
import { Rectangle }                            from './../draggableService/models/Rectangle';
import ElementMetaData                          from '../draggableService/models/ElementMetaData';
import ElementMetaDataCollection                from '../draggableService/models/ElementMetaDataCollection';

export default class LayoutDelegateNarrative implements ILayoutDelegate {

    private elements: ElementMetaDataCollection | undefined;
    private selectedElement: ElementMetaData | undefined;
    private minY: number = 0;

    sessionBegins(selectedElement: ElementMetaData, elements: ElementMetaDataCollection) {        
        this.elements = elements;
        this.selectedElement = selectedElement;

        if (this.elements.list.length > 0) {
            this.minY = this.elements.listSorted[0].currentRect.y
        } else {
            this.minY = 0
        }
    }

    sessionEnds() {        
        this.elements = undefined;
        this.selectedElement = undefined;
    }

    elementMoved(element: ElementMetaData, rect: Rectangle) {

        // calculate Y only        
        const borderY = 16;
        const paddingY = 20;
        let currentY = borderY;

        if (this.selectedElement === undefined && this.elements === undefined) {
            return;
        }

        let adjustedForCurrent = false;
                

        this.elements?.listSorted.forEach((item, index) => {

            if (item.rectId !== element.rectId) {                
 
                if ( adjustedForCurrent === false) {                    
                    const nextMid = currentY + (item.currentRect.height / 2) + ( rect.height / 2);
                    
                    if ( nextMid > rect.centerY ) {
                        currentY = currentY + rect.height + paddingY;
                        adjustedForCurrent = true;                        
                    }
                }

                if (item.targetRect.y !== currentY) {
                    item.targetRect = item.currentRect.cloneAndSetY(currentY);                    
                    item.elementOuter.style.transform = `translate(${item.targetRect.x}px, ${item.targetRect.y}px) `;
                }
                currentY = currentY + item.currentRect.height + paddingY;

            }
        });        
    }

}