/**
 * Structure with pre-calculated values for speed
 */
export class Rectangle {

    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;

    readonly top: number;
    readonly bottom: number;
    readonly left: number;
    readonly right: number;

    readonly centerX: number;
    readonly centerY: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.left = x;
        this.right = x + width;
        this.top = y;
        this.bottom = y + height;
        this.centerX = x + width / 2;
        this.centerY = y + height / 2;
    }

    static fromDomRect(rect: DOMRect): Rectangle {
        const rectangle = new Rectangle(rect.x, rect.y, rect.width, rect.height);
        return rectangle;
    }

    addCoords(x: number, y: number): Rectangle {
        return new Rectangle(this.x + x, this.y + y, this.width, this.height);
    }

    equals(r: Rectangle): Boolean {
        return this.x === r.x &&
            this.y === r.y &&
            this.width === r.width &&
            this.height === r.height;
    }

    static equals(a: Rectangle, b: Rectangle): Boolean {
        return a.x === b.x &&
            a.y === b.y &&
            a.width === b.width &&
            a.height === b.height;
    }
}