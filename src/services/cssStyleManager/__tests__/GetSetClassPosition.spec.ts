import CssStyleHelper, { EnumPosition } from "../CssStyleHelper";

describe('test cssStyleHelperHelper position', () => {

    test('set absolute', () => {
        const manager = new CssStyleHelper();
        manager.position(EnumPosition.absolute)
        expect(manager.cssStyle).toEqual({ display: "absolute"});
    });

    test('set relative', () => {
        const manager = new CssStyleHelper();
        manager.position(EnumPosition.relative)
        expect(manager.cssStyle).toEqual({ display: "relative"});
    });

    test('set relative then absolute', () => {
        const manager = new CssStyleHelper();
        manager.position(EnumPosition.relative)
        expect(manager.cssStyle).toEqual({ display: "relative"});
        manager.position(EnumPosition.absolute)
        expect(manager.cssStyle).toEqual({ display: "absolute"});
    });

    test('set relative then absolute then clear', () => {
        const manager = new CssStyleHelper();
        manager.position(EnumPosition.relative)
        expect(manager.cssStyle).toEqual({ display: "relative"});
        manager.position(EnumPosition.absolute)
        expect(manager.cssStyle).toEqual({ display: "absolute"});
        manager.displayClear();
        expect(manager.cssStyle).toEqual({ });
    });

});
