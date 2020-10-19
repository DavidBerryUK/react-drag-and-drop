export enum EnumPosition {
    absolute = 'absolute',
    relative = 'relative',
}

const propertyLeft = 'left';
const propertyRight = 'right';
const propertyTop = 'top';
const propertyBottom = 'bottom';
const propertyWidth = 'width';
const propertyHeight = 'height';
const propertyAnimateTranslate = "animateTranslate";


export interface IStyle {
    display?: string | undefined;
    top?: string | undefined;
    left?: string | undefined;
    right?: string | undefined;
    bottom?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    animateTranslate?: boolean | undefined;
}


export default class CssStyleHelper {

    private styleObject = {} as IStyle;

    get cssStyle(): IStyle {
        return this.styleObject;
    }

    toCssStyleText() {
        var result =
            this.getDisplay() +
            this.getAnimateTranslate() +          
            this.getTop() +
            this.getBottom() +
            this.getLeft() +
            this.getRight();    

        console.log(result);
        return result;
    }

    private getDisplay(): string {
        return this.styleObject.display === undefined ? '' : `position:${this.styleObject.display};`;
    }
    private getTop(): string {
        return this.styleObject.top === undefined ? '' : `top:${this.styleObject.top};`;
    }
    private getBottom(): string {
        return this.styleObject.bottom === undefined ? '' : `bottom:${this.styleObject.bottom};`;
    }
    private getLeft(): string {
        return this.styleObject.left === undefined ? '' : `left:${this.styleObject.left};`;
    }
    private getRight(): string {
        return this.styleObject.right === undefined ? '' : `right:${this.styleObject.right};`;
    }
    getAnimateTranslate() : string {
        return this.styleObject.animateTranslate === undefined 
        ? '' 
        : `transition-duration:500ms;transition-property:top, bottom, left, right;`;
    }

    clearAll(): CssStyleHelper {
        this.styleObject = {};
        return this;
    }

    animateTranslate() : CssStyleHelper {
        this.styleObject = { ...this.styleObject, animateTranslate: true };
        return this;
    }

    animateTranslateClear() : CssStyleHelper {
        delete this.styleObject[propertyAnimateTranslate];
        return this;
    }

    position(value: EnumPosition): CssStyleHelper {
        this.styleObject = { ...this.styleObject, display: value };
        return this;
    }

    displayClear(): CssStyleHelper {
        delete this.styleObject["display"];
        return this;
    }

    left(pixels: number): CssStyleHelper {
        this.styleObject = { ...this.styleObject, left: `${pixels}px` };
        return this;
    }

    leftClear(): CssStyleHelper {
        delete this.styleObject[propertyLeft];
        return this;
    }

    right(pixels: number): CssStyleHelper {
        this.styleObject = { ...this.styleObject, right: `${pixels}px` };
        return this;
    }

    rightClear(): CssStyleHelper {
        delete this.styleObject[propertyRight];
        return this;
    }

    top(pixels: number): CssStyleHelper {
        this.styleObject = { ...this.styleObject, top: `${pixels}px` };
        return this;
    }

    topClear(): CssStyleHelper {
        delete this.styleObject[propertyTop];
        return this;
    }

    bottom(pixels: number): CssStyleHelper {
        this.styleObject = { ...this.styleObject, bottom: `${pixels}px` };
        return this;
    }

    bottomClear(): CssStyleHelper {
        delete this.styleObject[propertyBottom];
        return this;
    }

    width(pixels: number): CssStyleHelper {
        this.styleObject = { ...this.styleObject, width: `${pixels}px` };
        return this;
    }

    widthClear(): CssStyleHelper {
        delete this.styleObject[propertyWidth];
        return this;
    }

    height(pixels: number): CssStyleHelper {
        this.styleObject = { ...this.styleObject, height: `${pixels}px` };
        return this;
    }

    heightClear(): CssStyleHelper {
        delete this.styleObject[propertyHeight];
        return this;
    }

    // shortcuts
    frame(leftPixels: number, topPixels: number, widthPixels: number, heightPixels: number): CssStyleHelper {
        this.styleObject.left = `${leftPixels}px`;
        this.styleObject.top = `${topPixels}px`;
        this.styleObject.width = `${widthPixels}px`;
        this.styleObject.height = `${heightPixels}px`;
        return this;
    }

    origin(leftPixels: number, topPixels: number): CssStyleHelper {
        this.styleObject.left = `${leftPixels}px`;
        this.styleObject.top = `${topPixels}px`;
        return this;
    }

    originClear(): CssStyleHelper {
        delete this.styleObject[propertyTop];
        delete this.styleObject[propertyLeft];
        return this;
    }

    size(widthPixels: number, heightPixels: number): CssStyleHelper {
        this.styleObject.width = `${widthPixels}px`;
        this.styleObject.height = `${heightPixels}px`;
        return this;
    }

    sizeClear(): CssStyleHelper {
        delete this.styleObject[propertyWidth];
        delete this.styleObject[propertyHeight];
        return this;
    }

    rectClear(): CssStyleHelper {
        delete this.styleObject[propertyTop];
        delete this.styleObject[propertyBottom];
        delete this.styleObject[propertyLeft];
        delete this.styleObject[propertyRight];
        delete this.styleObject[propertyWidth];
        delete this.styleObject[propertyHeight];
        delete this.styleObject[propertyAnimateTranslate];
        return this;
    }

}