import CssStyleHelper, { EnumPosition } from "../CssStyleHelper";

describe('test cssStyleHelperHelper origin', () => {

    test('set bottom (50x100) - (75x21)', () => {
        const manager = new CssStyleHelper();
        manager.origin(50,100).size(75,21);        
        expect(manager.cssStyle).toEqual({ left: '50px', top:'100px',width:'75px', height:'21px'});
    });

    test('set then clear origin', () => {
        const manager = new CssStyleHelper();
        manager.origin(50,100).size(75,21);        
        expect(manager.cssStyle).toEqual({ left: '50px', top:'100px',width:'75px', height:'21px'});
        manager.originClear();
        expect(manager.cssStyle).toEqual({width:'75px', height:'21px'});
    });

    test('set then clear size', () => {
        const manager = new CssStyleHelper();
        manager.origin(50,100).size(75,21);        
        expect(manager.cssStyle).toEqual({ left: '50px', top:'100px',width:'75px', height:'21px'});
        manager.sizeClear();
        expect(manager.cssStyle).toEqual({ left: '50px', top:'100px'});
    });

    test('set then clear size and origin', () => {
        const manager = new CssStyleHelper();
        manager.origin(50,100).size(75,21);        
        expect(manager.cssStyle).toEqual({ left: '50px', top:'100px',width:'75px', height:'21px'});
        manager.sizeClear().originClear();
        expect(manager.cssStyle).toEqual({ });
    });

});
