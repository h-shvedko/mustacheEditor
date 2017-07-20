import {Events} from "./Events";

export class Hint extends Events {
    constructor(editor, element) {
        super();
        this.editor = editor;
        this.elementObject = element;
        this.name = "hint" + this.generateHash();
        this.putHintsContent();
    }

    /**
     * @override
     * @param event
     */
    onClick(event) {
        super.onClick(event);
        this.elementObject.updateEventValue();
        window.elemAnalyze.realTimeAnalyzing = true;
        window.elemAnalyze.onClick(event);
        window.elemAnalyze.realTimeAnalyzing = false;

        this.hideHint();
    }

    /**
     * @override
     * @param event
     */
    onKeyup(event) {
        super.onKeyup(event);
    }

    putHintsContent() {
        this.elementObject.hintElement.textContent = this.editor.label;
    }

    showHint() {
        this.elementObject.hintElement.parentNode.style.display = "block";
    }

    hideHint() {
        this.elementObject.hintElement.parentNode.style.display = "none";
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get elementObject() {
        return this._elementObject;
    }

    set elementObject(value) {
        this._elementObject = value;
    }

    get editor() {
        return this._editor;
    }

    set editor(value) {
        this._editor = value;
    }

    get label() {
        return this._label;
    }

    set label(value) {
        this._label = value;
    }

    get hintElement() {
        return this._hintElement;
    }

    set hintElement(value) {
        this._hintElement = value;
    }
}