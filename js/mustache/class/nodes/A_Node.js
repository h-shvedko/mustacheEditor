import {OpenObject} from "./inner_objects/OpenObject";
import {CloseObject} from "./inner_objects/CloseObject";
import {ContentObject} from "./inner_objects/ContentObject";

export class A_Node{

    constructor(parentObject){
        this.parentObject = parentObject;
        this.name = this.parentObject.name;
        this.startPosition = this.parentObject.startPosition;
        this.setDefaultRulesForObject();
        this.nodesSpecific = [];
        this.error = [];
        this.isValid = false;
        this.isClosed = false;
    }

    setDefaultRulesForObject() {
        this.openRule = false;
        this.closeRule = false;
        this.contentRule = false;
    }

    get contentObject() {
        return this._contentObject;
    }

    set contentObject(value) {
        this._contentObject = value;
    }

    get closeObject() {
        return this._closeObject;
    }

    set closeObject(value) {
        this._closeObject = value;
    }

    get openObject() {
        return this._openObject;
    }

    set openObject(value) {
        this._openObject = value;
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

    get nodesSpecific() {
        return this._nodesSpecific;
    }

    set nodesSpecific(value) {
        this._nodesSpecific = value;
    }

    get contentRule() {
        return this._contentRule;
    }

    set contentRule(value) {
        this._contentRule = value;
    }
    get closeRule() {
        return this._closeRule;
    }

    set closeRule(value) {
        this._closeRule = value;
    }
    get openRule() {
        return this._openRule;
    }

    set openRule(value) {
        this._openRule = value;
    }
    get startPosition() {
        return this._startPosition;
    }

    set startPosition(value) {
        this._startPosition = value;
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

    get contentClosePosition() {
        return this._contentClosePosition;
    }

    set contentClosePosition(value) {
        this._contentClosePosition = value;
    }

    get contentCloseValue() {
        return this._contentCloseValue;
    }

    set contentCloseValue(value) {
        this._contentCloseValue = value;
    }

    get contentContentPosition() {
        return this._contentContentPosition;
    }

    set contentContentPosition(value) {
        this._contentContentPosition = value;
    }

    get contentContentValue() {
        return this._contentContentValue;
    }

    set contentContentValue(value) {
        this._contentContentValue = value;
    }

    get contentOpenPosition() {
        return this._contentOpenPosition;
    }

    set contentOpenPosition(value) {
        this._contentOpenPosition = value;
    }

    get contentOpenValue() {
        return this._contentOpenValue;
    }

    set contentOpenValue(value) {
        this._contentOpenValue = value;
    }

    get closeClosePosition() {
        return this._closeClosePosition;
    }

    set closeClosePosition(value) {
        this._closeClosePosition = value;
    }

    get closeCloseValue() {
        return this._closeCloseValue;
    }

    set closeCloseValue(value) {
        this._closeCloseValue = value;
    }

    get closeContentPosition() {
        return this._closeContentPosition;
    }

    set closeContentPosition(value) {
        this._closeContentPosition = value;
    }

    get closeContentValue() {
        return this._closeContentValue;
    }

    set closeContentValue(value) {
        this._closeContentValue = value;
    }

    get closeOpenPosition() {
        return this._closeOpenPosition;
    }

    set closeOpenPosition(value) {
        this._closeOpenPosition = value;
    }

    get closeOpenValue() {
        return this._closeOpenValue;
    }

    set closeOpenValue(value) {
        this._closeOpenValue = value;
    }

    get openClosePosition() {
        return this._openClosePosition;
    }

    set openClosePosition(value) {
        this._openClosePosition = value;
    }

    get openCloseValue() {
        return this._openCloseValue;
    }

    set openCloseValue(value) {
        this._openCloseValue = value;
    }

    get openContentPosition() {
        return this._openContentPosition;
    }

    set openContentPosition(value) {
        this._openContentPosition = value;
    }

    get openContentValue() {
        return this._openContentValue;
    }

    set openContentValue(value) {
        this._openContentValue = value;
    }

    get openOpenPosition() {
        return this._openOpenPosition;
    }

    set openOpenPosition(value) {
        this._openOpenPosition = value;
    }

    get openOpenValue() {
        return this._openOpenValue;
    }

    set openOpenValue(value) {
        this._openOpenValue = value;
    }

    applyRules(rule) {
        this.openRule = rule.openRules;
        this.closeRule = rule.closeRules;
        this.contentRule = rule.contentRules;
    }

    startOpenObject() {
        if (this.getOpenTagOpenValue() !== false) {
            this.openObject = new OpenObject(this);
        }
    }

    startCloseObject() {
        if (this.getCloseTagOpenValue() !== false) {
            this.closeObject = new CloseObject(this);
        }
    }

    startContentObject() {
        if (this.ifContentTagHasContent() !== false) {
            this.contentObject = new ContentObject(this);
        }
    }

    /**
     * rule for open tag
     * @returns {*|boolean}
     */
    getOpenTagOpenValue() {
        return this.openRule.open;
    }

    getOpenTagCloseValue() {
        return this.openRule.close;
    }

    ifOpenTagHasContent() {
        return this.openRule.content;
    }

    /**
     * rule for close tag
     * @returns {*|boolean}
     */
    getCloseTagOpenValue() {
        return this.closeRule.open;
    }

    getCloseTagCloseValue() {
        return this.closeRule.close;
    }

    ifCloseTagHasContent() {
        return this.closeRule.content;
    }

    /**
     * rule for content tag
     * @returns {*|boolean}
     */
    getContentTagOpenValue() {
        return this.contentRule.open;
    }

    getContentTagCloseValue() {
        return this.contentRule.close;
    }

    ifContentTagHasContent() {
        return this.contentRule.content;
    }

    finishOpenObjectOnKeyup() {
        if (typeof this.openObject === 'object' && this.openObject.hasOwnProperty("_isClosed")) {
            this.openObject.isClosed = true;
            this.openObject.openClosePosition = this.parentObject.event.target.selectionStart - 2;
            this.openObject.openContentValue = this.parentObject.event.target.value.substr(this.openObject.openOpenPosition + this.openObject.openOpenValue.length, this.openObject.openClosePosition - this.openObject.openOpenPosition - this.openObject.openOpenValue.length);
            this.openObject.openContentPosition = this.openObject.openOpenPosition + this.openObject.openOpenValue.length;
            this.openObject.openCloseValue = this.parentObject.event.target.value.substr(this.openObject.openContentPosition + this.openObject.openContentValue.length, 3);

            this.openObject.startPosition = this.openObject.openOpenPosition;
            this.openObject.endPosition = this.openObject.openClosePosition + 3;
        }
    }

    finishContentObjectOnKeyup() {
        if (typeof this.contentObject === 'object' && this.contentObject.hasOwnProperty("_isClosed")) {
            this.contentObject.isClosed = true;
            this.contentObject.contentClosePosition = this.parentObject.event.target.selectionStart - 2;
            this.contentObject.contentContentValue = this.parentObject.event.target.value.substr(this.contentObject.contentOpenPosition + this.contentObject.contentOpenValue.length, this.contentObject.contentClosePosition - this.contentObject.contentOpenPosition - this.contentObject.contentOpenValue.length);
            this.contentObject.contentContentPosition = this.contentObject.contentOpenPosition + this.contentObject.contentOpenValue.length;
            this.contentObject.contentCloseValue = this.parentObject.event.target.value.substr(this.contentObject.contentContentPosition + this.contentObject.contentContentValue.length, 3);

            this.contentObject.startPosition = this.contentObject.contentOpenPosition;
            this.contentObject.endPosition = this.contentObject.contentClosePosition + 3;
        }
    }

    finishCloseObjectOnKeyup() {
        if (typeof this.closeObject === 'object' && this.closeObject.hasOwnProperty("_isClosed")) {
            this.closeObject.isClosed = true;
            this.closeObject.closeClosePosition = this.parentObject.event.target.selectionStart - 2;
            this.closeObject.closeContentValue = this.parentObject.event.target.value.substr(this.closeObject.closeOpenPosition + this.closeObject.closeOpenValue.length, this.closeObject.closeClosePosition - this.closeObject.closeOpenPosition - this.closeObject.closeOpenValue.length);
            this.closeObject.closeContentPosition = this.closeObject.closeOpenPosition + this.closeObject.closeOpenValue.length;
            this.closeObject.closeCloseValue = this.parentObject.event.target.value.substr(this.closeObject.closeContentPosition + this.closeObject.closeContentValue.length, 3);

            this.closeObject.startPosition = this.closeObject.closeOpenPosition;
            this.closeObject.endPosition = this.closeObject.closeClosePosition + 3;
        }
    }

    finishOpenObjectOnClick() {
        if (typeof this.openObject === 'object' && this.openObject.hasOwnProperty("_isClosed")) {
            if (this.contentRule.content === false && this.closeRule.content === false) {
                this.isClosed = true;
            }

            this.openObject.isClosed = true;
            this.openObject.openClosePosition = this.parentObject.startPosition;
            this.openObject.openContentValue = this.parentObject.event.target.value.substr(this.openObject.openOpenPosition + this.openObject.openOpenValue.length, this.openObject.openClosePosition - this.openObject.openOpenPosition - this.openObject.openOpenValue.length);
            this.openObject.openContentPosition = this.openObject.openOpenPosition + this.openObject.openOpenValue.length;
            this.openObject.openCloseValue = this.parentObject.event.target.value.substr(this.openObject.openContentPosition + this.openObject.openContentValue.length, 3);

            this.openObject.startPosition = this.openObject.openOpenPosition;
            this.openObject.endPosition = this.openObject.openClosePosition + 3;
        }
    }

    finishContentObjectOnClick() {
        if (typeof this.contentObject === 'object' && this.contentObject.hasOwnProperty("_isClosed")) {
            this.isClosed = false;
            this.contentObject.isClosed = true;
            this.contentObject.contentClosePosition = this.parentObject.startPosition;
            this.contentObject.contentContentValue = this.parentObject.event.target.value.substr(this.contentObject.contentOpenPosition + this.contentObject.contentOpenValue.length, this.contentObject.contentClosePosition - this.contentObject.contentOpenPosition - this.contentObject.contentOpenValue.length);
            this.contentObject.contentContentPosition = this.contentObject.contentOpenPosition + this.contentObject.contentOpenValue.length;
            this.contentObject.contentCloseValue = this.parentObject.event.target.value.substr(this.contentObject.contentContentPosition + this.contentObject.contentContentValue.length, 3);

            this.contentObject.startPosition = this.contentObject.contentOpenPosition;
            this.contentObject.endPosition = this.contentObject.contentClosePosition + 3;
        }
    }

    finishCloseObjectOnClick() {
        if (typeof this.closeObject === 'object' && this.closeObject.hasOwnProperty("_isClosed")) {
            this.isClosed = true;
            this.closeObject.isClosed = true;
            this.closeObject.closeClosePosition = this.parentObject.startPosition;
            this.closeObject.closeContentValue = this.parentObject.event.target.value.substr(this.closeObject.closeOpenPosition + this.closeObject.closeOpenValue.length, this.closeObject.closeClosePosition - this.closeObject.closeOpenPosition - this.closeObject.closeOpenValue.length);
            this.closeObject.closeContentPosition = this.closeObject.closeOpenPosition + this.closeObject.closeOpenValue.length;
            this.closeObject.closeCloseValue = this.parentObject.event.target.value.substr(this.closeObject.closeContentPosition + this.closeObject.closeContentValue.length, 3);

            this.closeObject.startPosition = this.closeObject.closeOpenPosition;
            this.closeObject.endPosition = this.closeObject.closeClosePosition + 3;
        }
    }
}