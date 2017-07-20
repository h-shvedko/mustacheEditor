/**
 * Name of target element in HTML form provided by attribute name
 * @type {string}
 */

import {Events} from "./Events";
import {Constants} from "./Constants";
import {MustacheNode} from "./nodes/MustacheNode";
import {Editor} from "./Editor";
import {Hint} from "./Hint";
import {Validator} from "./Validator";

export class Elements extends Events {

    /**
     * Constructor of Elements class
     * @param name - name of element
     */
    constructor(name) {
        super();
        this.hasHintEvent = false;
        this.name = name;
        this.keys = '';
        this.editor = null;
        this.hint = null;
        this.hintElement = document.getElementsByClassName(Constants.HINT_ELEMENT_CLASS_NAME).item(0);

        this.node = new MustacheNode();

        this.defineElement();
        this.registerEvents();
    }

    get node() {
        return this._node;
    }

    set node(value) {
        this._node = value;
    }

    get hasHintEvent() {
        return this._hasHintEvent;
    }

    set hasHintEvent(value) {
        this._hasHintEvent = value;
    }

    get hintElement() {
        return this._hintElement;
    }

    set hintElement(value) {
        this._hintElement = value;
    }

    get hint() {
        return this._hint;
    }

    set hint(value) {
        this._hint = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get editor() {
        return this._editor;
    }

    set editor(value) {
        this._editor = value;
    }

    get element() {
        return this._element;
    }

    set element(value) {
        this._element = value;
    }

    get keys() {
        return this._keys;
    }

    set keys(value) {
        this._keys = value;
    }

    get cursorPosition() {
        return this._cursorPosition;
    }

    set cursorPosition(value) {
        this._cursorPosition = value;
    }

    /**
     * Defining target element
     */
    defineElement() {
        this.element = document.getElementsByName(this.name).item(0);
    }

    /**
     * @override
     */
    onClick(event) {
        //TODO: hide hind after click to avoid doubling of tag
        super.onClick(event);
        this.highlightMustacheElement();
    }

    /**
     * @override
     * @param event
     */
    onKeyup(event) {
        super.onKeyup(event);

        this.displayHint();

        this.putNodeValue();

        this.updateFocus();
    }

    /**
     * Put value of keyUp event to Node object to further analyzing
     */
    putNodeValue() {
        this.node.createSpecificNode(this.keys, this.eventKeyup);
    }

    /**
     * Set keys property of Element class with last 3 put characters
     */
    updateKeys() {
        //prevent handling of Shift key
        this.cursorPosition = this.element.selectionStart;
        if (this.eventKeyup.which !== 16) {
            let lastKeys = this.eventKeyup.target.value;
            this.keys = lastKeys.substr(this.cursorPosition - 3, 3);
            this.node.analyzePosition = this.cursorPosition - 3;
        }
    }

    /**
     * Updating value in target HTML element with hint value
     */
    updateEventValue() {
        let beforeText = this.eventKeyup.target.value.substr(0, this.eventKeyup.target.selectionStart);
        let afterText = this.eventKeyup.target.value.substr(this.eventKeyup.target.selectionStart);

        this.eventKeyup.target.value = beforeText + this.editor.hint + afterText;

        this.node.nodeSpecific.endPosition = (beforeText + this.editor.hint).length;
        this.updateFocus();
    }

    /**
     * Displaying hint depends on equals to syntax
     */
    displayHint() {
        this.updateKeys();

        this.editor = new Editor(this.eventKeyup, this.keys);
        this.hint = new Hint(this.editor, this);

        this.addHintEventOnClick();

        if (this.editor.nameOfMustacheElement !== "") {
            this.hint.showHint();
        } else {
            this.hint.hideHint();
        }
    }

    /**
     * Adding onClick event listener for hind HTML element
     */
    addHintEventOnClick() {
        if (this.hasHintEvent === false) {
            this.attachEventsListener(this.hintElement, Constants.EVENT_CLICK, (e) => {
                this.hint.onClick(e);
            });
            this.hasHintEvent = !this.hasHintEvent;
        }
    }

    /**
     * Method which highlights mustache elements on clicking on them
     */
    highlightMustacheElement() {
        let position = this.eventClick.currentTarget.selectionStart | 0;
        let validator = new Validator(this.eventClick);
        validator.findPreviousMustacheTag(this, position);
        validator.findNextMustacheTag(this, position);
    }

    /**
     * Updating focus in target HTML element
     */
    updateFocus() {
        this.cursorPosition = this.eventKeyup.target.value.length;
        this.element.focus();
    }

    resetElements(){
        this.node.nodesSpecific = [];
    }
}