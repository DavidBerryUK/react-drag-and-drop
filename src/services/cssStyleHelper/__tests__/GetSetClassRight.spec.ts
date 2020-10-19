import CssStyleHelper, { EnumPosition } from "../CssStyleHelper";

describe('test cssStyleHelperHelper right', () => {

    test('set right 0px', () => {
        const manager = new CssStyleHelper();
        manager.right(0);
        expect(manager.cssStyle).toEqual({ right: '0px'});
    });

    test('set right 100px', () => {
        const manager = new CssStyleHelper();
        manager.right(100);
        expect(manager.cssStyle).toEqual({ right: '100px'});
    });

    test('set right 100px then right 500px', () => {
        const manager = new CssStyleHelper();
        manager.right(100);
        expect(manager.cssStyle).toEqual({ right: '100px'});
        manager.right(500);
        expect(manager.cssStyle).toEqual({ right: '500px'});
    });

    test('set right 100px then right 500px then clear', () => {
        const manager = new CssStyleHelper();
        manager.right(100);
        expect(manager.cssStyle).toEqual({ right: '100px'});
        manager.right(500);
        expect(manager.cssStyle).toEqual({ right: '500px'});
        manager.rightClear();
        expect(manager.cssStyle).toEqual({});
    });

   

});
