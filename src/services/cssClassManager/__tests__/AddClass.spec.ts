import cssClassStringHelper from "../CssClassHelper";


describe('test cssClassStringHelper addClass method', () => {

    test('add class to empty string', () => {
        const manager = new cssClassStringHelper();
        manager.addClass("Monday")
        expect(manager.cssClass).toBe("Monday");
    });

    test('add class to existing values, no duplicates', () => {
        const manager = new cssClassStringHelper();
        manager.addClass("Monday")
        expect(manager.cssClass).toBe("Monday");
        manager.addClass("Tuesday")
        expect(manager.cssClass).toBe("Monday Tuesday");
        manager.addClass("Wednesday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday");
        manager.addClass("Thursday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday");
        manager.addClass("Friday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday Friday");
    });

    test('add class to existing values, with duplicates', () => {
        const manager = new cssClassStringHelper();
        manager.addClass("Monday")
        expect(manager.cssClass).toBe("Monday");
        manager.addClass("Tuesday")
        expect(manager.cssClass).toBe("Monday Tuesday");
        manager.addClass("Wednesday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday");
        manager.addClass("Thursday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday");
        manager.addClass("Thursday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday");
        manager.addClass("Thursday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday");
        manager.addClass("Friday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday Friday");
        manager.addClass("Friday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday Friday");
        manager.addClass("Friday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday Friday");
        manager.addClass("Monday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday Friday");
    });

    test('add several values at once', () => {
        const manager = new cssClassStringHelper();
        manager.addClass("Monday Tuesday Wednesday Thursday Friday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday Friday");
    });

    test('add several values at once when some already exist', () => {
        const manager = new cssClassStringHelper();
        manager.addClass("Monday Tuesday")
        expect(manager.cssClass).toBe("Monday Tuesday");
        manager.addClass("Monday Tuesday Wednesday Thursday Friday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday Friday");
    });
    
    test('add several values at once with duplicates', () => {
        const manager = new cssClassStringHelper();
        manager.addClass("Monday Tuesday Monday Tuesday Wednesday Thursday Friday Wednesday Thursday Friday")
        expect(manager.cssClass).toBe("Monday Tuesday Wednesday Thursday Friday");
    })

});
