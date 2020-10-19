import CssStyleHelper, { EnumPosition } from "../CssStyleHelper";

describe('test cssStyleHelperHelper frame', () => {

    test('set bottom (50x100) - (75x21)', () => {
        const manager = new CssStyleHelper();
        manager.frame(50,100,75,21);
        expect(manager.cssStyle).toEqual({ left: '50px', top:'100px',width:'75px', height:'21px'});
    });

    test('set then clear', () => {
        const manager = new CssStyleHelper();
        manager.frame(50,100,75,21);
        expect(manager.cssStyle).toEqual({ left: '50px', top:'100px',width:'75px', height:'21px'});
        manager.rectClear();
        expect(manager.cssStyle).toEqual({});
    });


});
