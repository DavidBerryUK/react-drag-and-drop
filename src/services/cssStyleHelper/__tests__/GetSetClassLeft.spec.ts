import CssStyleHelper, { EnumPosition } from "../CssStyleHelper";

describe('test cssStyleHelperHelper left', () => {

    test('set left 0px', () => {
        const manager = new CssStyleHelper();
        manager.left(0);
        expect(manager.cssStyle).toEqual({ left: '0px'});
    });

    test('set left 100px', () => {
        const manager = new CssStyleHelper();
        manager.left(100);
        expect(manager.cssStyle).toEqual({ left: '100px'});
    });

    test('set left 100px then left 500px', () => {
        const manager = new CssStyleHelper();
        manager.left(100);
        expect(manager.cssStyle).toEqual({ left: '100px'});
        manager.left(500);
        expect(manager.cssStyle).toEqual({ left: '500px'});
    });

    test('set left 100px then left 500px then clear', () => {
        const manager = new CssStyleHelper();
        manager.left(100);
        expect(manager.cssStyle).toEqual({ left: '100px'});
        manager.left(500);
        expect(manager.cssStyle).toEqual({ left: '500px'});
        manager.leftClear();
        expect(manager.cssStyle).toEqual({});
    });

   

});
