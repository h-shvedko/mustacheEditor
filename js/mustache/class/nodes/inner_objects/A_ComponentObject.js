export class A_ComponentObject{
    constructor(parentObject){
        this.parentObject = parentObject;
        this.name = this.parentObject.startPosition + '_' + this.parentObject.name + '_close';
        this.error = [];
        this.isValid = false;
        this.isClosed = false;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get parentObject() {
        return this._parentObject;
    }

    set parentObject(value) {
        this._parentObject = value;
    }

    get isClosed() {
        return this._isClosed;
    }

    set isClosed(value) {
        this._isClosed = value;
    }

    get isValid() {
        return this._isValid;
    }

    set isValid(value) {
        this._isValid = value;
    }

    get error() {
        return this._error;
    }

    set error(value) {
        this._error = value;
    }

}