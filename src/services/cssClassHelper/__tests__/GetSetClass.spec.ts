import cssClassStringHelper from "../CssClassHelper";


describe('test cssClassStringHelper cssClass getter and setter', () => {

    test('inital class is empty', () => {
        const manager = new cssClassStringHelper();
        expect(manager.cssClass).toBe("");
    });

    test('set and get class', () => {
        const manager = new cssClassStringHelper();
        manager.cssClass = "Red Blue Green";
        expect(manager.cssClass).toBe("Red Blue Green");
    });

});
