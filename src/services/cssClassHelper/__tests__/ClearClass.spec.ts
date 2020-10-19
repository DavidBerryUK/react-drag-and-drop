import cssClassStringHelper from "../CssClassHelper";


describe('test cssClassStringHelper clearClass method', () => {

    test('test works with empty class', () => {
        const manager = new cssClassStringHelper();
        expect(manager.cssClass).toBe("");
        manager.clearClass();
        expect(manager.cssClass).toBe("");
    });

    test('test with populated string', () => {
        const manager = new cssClassStringHelper();
        manager.cssClass = "Red Blue Green";
        expect(manager.cssClass).toBe("Red Blue Green");
        manager.clearClass();
        expect(manager.cssClass).toBe("");
    });

    test('test can be used in combination with add', () => {
        const manager = new cssClassStringHelper();
        manager.cssClass = "Red Blue Green";
        expect(manager.cssClass).toBe("Red Blue Green");
        manager.clearClass().addClass("Monday Tuesday");
        expect(manager.cssClass).toBe("Monday Tuesday");
    });

});
