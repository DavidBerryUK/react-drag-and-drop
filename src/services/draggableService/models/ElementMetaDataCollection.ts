import ElementMetaData from "./ElementMetaData";

export default class ElementMetaDataCollection {

    private isSorted: Boolean = false;
    private elementsList : Array<ElementMetaData> = new Array<ElementMetaData>();

    get list() : Array<ElementMetaData> {
        return this.elementsList;
    }

    get listSorted() : Array<ElementMetaData> {
        if ( !this.isSorted ) {
            this.sortList();
        }
        return this.elementsList;
    }

    add(element: ElementMetaData) {
        this.elementsList.push(element);
        this.isSorted = false;
    }

    findById(id: string) {
        return this.list.find(item => item.rectId === id);
    }
    
    clear() {
        this.elementsList = new Array<ElementMetaData>();
    }

    private sortList() {
        console.log("sort");
        this.elementsList.sort((a : ElementMetaData, b : ElementMetaData) => {          
               if (a.currentRelativeRect.x === b.currentRelativeRect.x) {
                  return b.currentRelativeRect.y - a.currentRelativeRect.y ? 1 : -1;
               }
               return a.currentRelativeRect.x > b.currentRelativeRect.x ? 1 : -1;
            });

        this.isSorted = true;
    }

}