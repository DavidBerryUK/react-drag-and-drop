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
               if (a.rect.x === b.rect.x) {
                  return b.rect.y - a.rect.y ? 1 : -1;
               }
               return a.rect.x > b.rect.x ? 1 : -1;
            });

        this.isSorted = true;
    }

}