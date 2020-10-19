/**
 * CSS Class Helper
 * -------------------
 * Maintain the contents of a css string that can be manipulated using helper methods.
 * The add and remove methods parameters allow one or more css classes to be
 * manipulated, duplicate classes will automatically be removed
 * 
 *  - addClass              : add one or more css classes
 *  - removeClass           : remove one or more css classes
 *  - doesContainClass      : checks to see if a class exists
 */
export default class CssClassHelper {

    private classList: Array<string> = new Array<string>();
    private classString: string = "";

    baseCss : string = "";

    get cssClass(): string {
        return `${this.classString} ${this.baseCss}`.trim();
    }

    set cssClass(value: string) {
        this.classString = value;
        this.stringToList();
    }

    clearClass() : CssClassHelper {
        this.classString = "";
        this.classList = new Array<string>();
        return this;
    }

    addClass(value: string): CssClassHelper {
        const valueList = value.split(' ');
        valueList.forEach((valueItem) => {
            if (!this.doesContainClass(valueItem)) {
                this.classList.push(valueItem);
            }
        });
        this.listToSring();
        return this;
    }

    removeClass(value: string) : CssClassHelper{
        const valueList = value.split(' ');
        valueList.forEach((valueItem) => {
            if (this.doesContainClass(valueItem)) {
                this.classList = this.classList.filter((item) => (item !== valueItem));           
            }
        });
        this.listToSring();
        return this;
    }

    doesContainClass(value: string): boolean {
        return this.classList.find((item) => (item === value)) !== undefined;            
    }

    private stringToList() {
        this.classList = this.cssClass.split(' ');
    }

    private listToSring() {
        this.classString = this.classList.join(' ');
    }

}