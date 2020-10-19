import CssStyleHelper, { EnumPosition } from "../CssStyleHelper";

describe('test cssStyleHelperHelper top', () => {

    test('set top 0px', () => {
        const manager = new CssStyleHelper();
        manager.top(0);
        expect(manager.cssStyle).toEqual({ top: '0px'});
    });

    test('set top 100px', () => {
        const manager = new CssStyleHelper();
        manager.top(100);
        expect(manager.cssStyle).toEqual({ top: '100px'});
    });

    test('set top 100px then top 500px', () => {
        const manager = new CssStyleHelper();
        manager.top(100);
        expect(manager.cssStyle).toEqual({ top: '100px'});
        manager.top(500);
        expect(manager.cssStyle).toEqual({ top: '500px'});
    });

    test('set top 100px then top 500px then clear', () => {
        const manager = new CssStyleHelper();
        manager.top(100);
        expect(manager.cssStyle).toEqual({ top: '100px'});
        manager.top(500);
        expect(manager.cssStyle).toEqual({ top: '500px'});
        manager.topClear();
        expect(manager.cssStyle).toEqual({});
    });

   

});
