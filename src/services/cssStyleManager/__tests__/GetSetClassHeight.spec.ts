import CssStyleHelper, { EnumPosition } from "../CssStyleHelper";

describe('test cssStyleHelperHelper height', () => {

    test('set height 0px', () => {
        const manager = new CssStyleHelper();
        manager.height(0);
        expect(manager.cssStyle).toEqual({ height: '0px'});
    });

    test('set height 100px', () => {
        const manager = new CssStyleHelper();
        manager.height(100);
        expect(manager.cssStyle).toEqual({ height: '100px'});
    });

    test('set height 100px then height 500px', () => {
        const manager = new CssStyleHelper();
        manager.height(100);
        expect(manager.cssStyle).toEqual({ height: '100px'});
        manager.height(500);
        expect(manager.cssStyle).toEqual({ height: '500px'});
    });

    test('set height 100px then height 500px then clear', () => {
        const manager = new CssStyleHelper();
        manager.height(100);
        expect(manager.cssStyle).toEqual({ height: '100px'});
        manager.height(500);
        expect(manager.cssStyle).toEqual({ height: '500px'});
        manager.heightClear();
        expect(manager.cssStyle).toEqual({});
    });

   

});
