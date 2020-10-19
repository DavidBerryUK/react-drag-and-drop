import cssClassStringHelper from "../CssClassHelper";


describe('test cssClassStringHelper doesContainClass method', () => {

    test('does exist - only value', () => {
        const manager = new cssClassStringHelper();
        manager.cssClass = "Monday";
        const result = manager.doesContainClass("Monday");
        expect(result).toBeTruthy();
    });

    test('does exist - first value', () => {
        const manager = new cssClassStringHelper();
        manager.cssClass = "Monday Tuesday Wednesday";
        const result = manager.doesContainClass("Monday");
        expect(result).toBeTruthy();
    });

    test('does exist - middle value', () => {
        const manager = new cssClassStringHelper();
        manager.cssClass = "Monday Tuesday Wednesday";
        const result = manager.doesContainClass("Tuesday");
        expect(result).toBeTruthy();
    });

    test('does exist - last value', () => {
        const manager = new cssClassStringHelper();
        manager.cssClass = "Monday Tuesday Wednesday";
        const result = manager.doesContainClass("Wednesday");
        expect(result).toBeTruthy();
    });

    test('does not exist', () => {
        const manager = new cssClassStringHelper();
        manager.cssClass = "Sunday";
        const result = manager.doesContainClass("Monday Tuesday Wednesday");
        expect(result).toBeFalsy();
    });

});
