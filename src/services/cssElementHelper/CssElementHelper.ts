import CssClassHelper from "../cssClassHelper/CssClassHelper";
import CssStyleHelper from "../cssStyleHelper/CssStyleHelper";

export default class CssElementHelper {

    public classHelper : CssClassHelper;
    public styleHelper : CssStyleHelper;

    constructor() {
        this.classHelper = new CssClassHelper();
        this.styleHelper = new CssStyleHelper();
    }

}