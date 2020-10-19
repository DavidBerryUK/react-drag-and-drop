import cssClassStringHelper from "../CssClassHelper";


describe('test cssClassStringHelper removeClass method', () => {

   
    test('remove class - single value', () => {
        const manager = new cssClassStringHelper();
        manager.addClass("Monday");
        expect(manager.cssClass).toBe("Monday");
        manager.removeClass("Monday");
        expect(manager.cssClass).toBe("");
    });

    test('remove class - remove 1 at a time', () => {
        const manager = new cssClassStringHelper();
        manager.cssClass = "Monday Tuesday Wednesday Thursday Friday";
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday Friday");

        manager.removeClass("Wednesday");
        expect(manager.cssClass).toBe("Monday Tuesday Thursday Friday");

        manager.removeClass("Friday");
        expect(manager.cssClass).toBe("Monday Tuesday Thursday");

        manager.removeClass("Monday");
        expect(manager.cssClass).toBe("Tuesday Thursday");

        manager.removeClass("Thursday");
        expect(manager.cssClass).toBe("Tuesday");

        manager.removeClass("Tuesday");
        expect(manager.cssClass).toBe("");
    });

    test('remove class - remove several at a time', () => {
        const manager = new cssClassStringHelper();
        manager.cssClass = "Monday Tuesday Wednesday Thursday Friday";
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday Friday");

        manager.removeClass("Wednesday Friday");
        expect(manager.cssClass).toBe("Monday Tuesday Thursday");

        manager.removeClass("Monday Thursday");
        expect(manager.cssClass).toBe("Tuesday");

        manager.removeClass("Tuesday");
        expect(manager.cssClass).toBe("");
    });


 

});
