import {Constants} from "./Constants";

export class Editor {

    constructor(event, keys) {
        this.value = event.target.value;
        this.event = event;
        this.keys = keys;
        this.label = '';
        this.generateHint();
    }

    get label() {
        return this._label;
    }

    set label(value) {
        this._label = value;
    }

    get nameOfMustacheElement() {
        return this._nameOfMustacheElement;
    }

    set nameOfMustacheElement(value) {
        this._nameOfMustacheElement = value;
    }

    get keys() {
        return this._keys;
    }

    set keys(value) {
        this._keys = value;
    }

    get event() {
        return this._event;
    }

    set event(value) {
        this._event = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    set hint(hint) {
        this._hint = hint;
    }

    get hint() {
        return this._hint;
    }

    generateHint() {
        this.getNameOfMustacheElement();
        this.makeHint();

    }


    getNameOfMustacheElement() {
        let ret = '';
        switch (this.keys) {
            case Constants.T_START_MUSTACHE + Constants.T_SECTION:
                ret = Constants.T_SECTION_NAME;
                break;
            case Constants.T_START_MUSTACHE + Constants.T_INVERTED:
                ret = Constants.T_INVERTED_NAME;
                break;
            case Constants.T_START_MUSTACHE + Constants.T_COMMENT:
                ret = Constants.T_COMMENT_NAME;
                break;
            case Constants.T_START_MUSTACHE + Constants.T_PARTIAL:
                ret = Constants.T_PARTIAL_NAME;
                break;
            case Constants.T_START_MUSTACHE + Constants.T_PARENT:
                ret = Constants.T_PARENT_NAME;
                break;
            default:
                break;
        }
        this.nameOfMustacheElement = ret;
    }

    makeHint() {
        let hint = '';
        let label = '';
        switch (this.nameOfMustacheElement) {
            case Constants.T_SECTION_NAME:
                hint = " name_of_section " + Constants.T_END_MUSTACHE + " " + Constants.T_START_MUSTACHE + " value_of_section " + Constants.T_END_MUSTACHE + " " + Constants.T_START_MUSTACHE + Constants.T_END_SECTION + " name_of_section " + Constants.T_END_MUSTACHE;
                label = Constants.T_SECTION_NAME;
                break;
            case Constants.T_INVERTED_NAME:
                hint = " name_of_inverted_section " + Constants.T_END_MUSTACHE + " " + Constants.T_START_MUSTACHE + " value_of_inverted_section " + Constants.T_END_MUSTACHE + " " + Constants.T_START_MUSTACHE + Constants.T_END_SECTION + " name_of_inverted_section " + Constants.T_END_MUSTACHE;
                label = Constants.T_INVERTED_NAME;
                break;
            case Constants.T_COMMENT_NAME:
                hint = " value_of_comment " + Constants.T_END_MUSTACHE;
                label = Constants.T_COMMENT_NAME;
                break;
            case Constants.T_PARTIAL_NAME:
                hint = " name_of_partial " + Constants.T_END_MUSTACHE;
                label = Constants.T_PARTIAL_NAME;
                break;
            case Constants.T_PARENT_NAME:
                hint = " name_of_parent " + Constants.T_END_MUSTACHE;
                label = Constants.T_PARENT_NAME;
                break;
            default:
                break;
        }

        this.hint = hint;
        this.label = label;
    }
}