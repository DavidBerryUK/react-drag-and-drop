import CssStyleHelper, { EnumPosition } from "../CssStyleHelper";

describe('test cssStyleHelperHelper width', () => {

    test('set width 0px', () => {
        const manager = new CssStyleHelper();
        manager.width(0);
        expect(manager.cssStyle).toEqual({ width: '0px'});
    });

    test('set width 100px', () => {
        const manager = new CssStyleHelper();
        manager.width(100);
        expect(manager.cssStyle).toEqual({ width: '100px'});
    });

    test('set width 100px then width 500px', () => {
        const manager = new CssStyleHelper();
        manager.width(100);
        expect(manager.cssStyle).toEqual({ width: '100px'});
        manager.width(500);
        expect(manager.cssStyle).toEqual({ width: '500px'});
    });

    test('set width 100px then width 500px then clear', () => {
        const manager = new CssStyleHelper();
        manager.width(100);
        expect(manager.cssStyle).toEqual({ width: '100px'});
        manager.width(500);
        expect(manager.cssStyle).toEqual({ width: '500px'});
        manager.widthClear();
        expect(manager.cssStyle).toEqual({});
    });

   

});
