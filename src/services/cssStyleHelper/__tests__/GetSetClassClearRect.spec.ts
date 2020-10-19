import CssStyleHelper, { EnumPosition } from "../CssStyleHelper";

describe('test cssStyleHelperHelper bottom, bottom, left, right combinations', () => {

    test('set bottom 50px, top 100, right 75, left 21', () => {
        const manager = new CssStyleHelper();
        manager.bottom(50).top(100).right(75).left(21)
        expect(manager.cssStyle).toEqual({ bottom: '50px', top:'100px',left:'21px', right:'75px'});
    });

    test('set then clear', () => {
        const manager = new CssStyleHelper();
        manager.bottom(50).top(100).right(75).left(21)
        expect(manager.cssStyle).toEqual({ bottom: '50px', top:'100px',left:'21px', right:'75px'});
        manager.rectClear();
        expect(manager.cssStyle).toEqual({});
    });

    test('set absolute (100,50)x(80x190)', () => {
        const manager = new CssStyleHelper();
        manager.left(100).top(50).width(80).height(190).position(EnumPosition.absolute);
        expect(manager.cssStyle).toEqual({ left: '100px', top:'50px',width:'80px', height:'190px', display:'absolute'});
    });

    test('set absolute (100,50)x(80x190) then clear rect' , () => {
        const manager = new CssStyleHelper();
        manager.left(100).top(50).width(80).height(190).position(EnumPosition.absolute);
        expect(manager.cssStyle).toEqual({ left: '100px', top:'50px',width:'80px', height:'190px', display:'absolute'});
        manager.rectClear();
        expect(manager.cssStyle).toEqual({  display:'absolute'});
    });

});
