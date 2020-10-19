import CssStyleHelper, { EnumPosition } from "../CssStyleHelper";

describe('test cssStyleHelperHelper bottom', () => {

    test('set bottom 0px', () => {
        const manager = new CssStyleHelper();
        manager.bottom(0);
        expect(manager.cssStyle).toEqual({ bottom: '0px'});
    });

    test('set bottom 100px', () => {
        const manager = new CssStyleHelper();
        manager.bottom(100);
        expect(manager.cssStyle).toEqual({ bottom: '100px'});
    });

    test('set bottom 100px then bottom 500px', () => {
        const manager = new CssStyleHelper();
        manager.bottom(100);
        expect(manager.cssStyle).toEqual({ bottom: '100px'});
        manager.bottom(500);
        expect(manager.cssStyle).toEqual({ bottom: '500px'});
    });

    test('set bottom 100px then bottom 500px then clear', () => {
        const manager = new CssStyleHelper();
        manager.bottom(100);
        expect(manager.cssStyle).toEqual({ bottom: '100px'});
        manager.bottom(500);
        expect(manager.cssStyle).toEqual({ bottom: '500px'});
        manager.bottomClear();
        expect(manager.cssStyle).toEqual({});
    });

   

});
