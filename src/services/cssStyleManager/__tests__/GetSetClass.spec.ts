import CssStyleHelper from "../CssStyleHelper";

describe('test cssStyleHelperHelper cssClass getter', () => {

    test('inital class is empty', () => {
        const manager = new CssStyleHelper();
        expect(manager.cssStyle).toEqual({});
    });

});
