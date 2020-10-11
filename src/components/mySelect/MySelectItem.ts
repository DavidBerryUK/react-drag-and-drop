export default class MySelectItem {

    public id: string;
    public name: string;
    public icon?: React.ReactElement;
    
    constructor(
        id: string,
        name: string,
        icon?: React.ReactElement) {

        this.id = id;
        this.name = name;
        this.icon = icon;
    }
}