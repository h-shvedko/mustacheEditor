webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Constants {
    // Token types
    static get T_START_MUSTACHE() {
        return '{{';
    }

    static get T_END_MUSTACHE() {
        return '}}';
    }

    static get T_SECTION() {
        return '#';
    }

    static get T_INVERTED() {
        return '^';
    }

    static get T_END_SECTION() {
        return '/';
    }

    static get T_COMMENT() {
        return '!';
    }

    static get T_PARTIAL() {
        return '>';
    }

    static get T_PARENT() {
        return '<';
    }

    // Token type's names
    static get T_START_MUSTACHE_NAME() {
        return 'StartMustache';
    }

    static get T_END_MUSTACHE_NAME() {
        return 'EndMustache';
    }

    static get T_SECTION_NAME() {
        return 'Section';
    }

    static get T_INVERTED_NAME() {
        return 'Inverted';
    }

    static get T_END_SECTION_NAME() {
        return 'EndSection';
    }

    static get T_COMMENT_NAME() {
        return 'Comment';
    }

    static get T_PARTIAL_NAME() {
        return 'Partial';
    }

    static get T_PARENT_NAME() {
        return 'Parent';
    }

    //***************************************** EVENTS CLASS CONSTANTS**********************************
    //**************************************************************************************************
    static get EVENTS() {
        return ['keyup', 'click'];
    }

    static get EVENT_CLICK() {
        return 'click';
    }

    static get EVENT_FOCUS() {
        return 'focus';
    }

    static get EVENT_MOUSEOVER() {
        return 'mouseover';
    }

    static get EVENT_KEYUP() {
        return 'keyup';
    }

    //***************************************NODE RULES***********************************************
    //************************************************************************************************
    //state of node
    static get NODE_CLOSED() {
        return 0;
    }

    static get NODE_NOT_CLOSED() {
        return 1;
    }

    static get NODE_IS_UNDEFINED() {
        return -1;
    }

    static get RULE_CONTENT_TEMPLATE() {
        return {
            open: this.T_START_MUSTACHE,
            close: this.T_END_MUSTACHE,
            content: true
        };
    }

    static get RULE_CLOSE_TEMPLATE() {
        return {
            open: this.T_START_MUSTACHE + this.T_END_SECTION,
            close: this.T_END_MUSTACHE,
            content: true
        };
    }

    static get RULE_SECTION() {
        return {
            openRules: {
                open: this.T_START_MUSTACHE + this.T_SECTION,
                close: this.T_END_MUSTACHE,
                content: true
            },
            closeRules: this.RULE_CLOSE_TEMPLATE,
            contentRules: this.RULE_CONTENT_TEMPLATE
        };
    }

    static get RULE_INVERTED() {
        return {
            openRules: {
                open: this.T_START_MUSTACHE + this.T_INVERTED,
                close: this.T_END_MUSTACHE,
                content: true
            },
            closeRules: this.RULE_CLOSE_TEMPLATE,
            contentRules: this.RULE_CONTENT_TEMPLATE
        };
    }

    static get RULE_COMMENT() {
        return {
            openRules: {
                open: this.T_START_MUSTACHE + this.T_COMMENT,
                close: this.T_END_MUSTACHE,
                content: true
            },
            closeRules: {
                open: false,
                close: false,
                content: false
            },
            contentRules: {
                open: false,
                close: false,
                content: false
            }
        };
    }

    static get RULE_PARTIAL() {
        return {
            openRules: {
                open: this.T_START_MUSTACHE + this.T_PARTIAL,
                close: this.T_END_MUSTACHE,
                content: true
            },
            closeRules: {
                open: false,
                close: false,
                content: false
            },
            contentRules: {
                open: false,
                close: false,
                content: false
            }
        };
    }

    static get RULE_PARENT() {
        return {
            openRules: {
                open: this.T_START_MUSTACHE + this.T_PARENT,
                close: this.T_END_MUSTACHE,
                content: true
            },
            closeRules: {
                open: false,
                close: false,
                content: false
            },
            contentRules: {
                open: false,
                close: false,
                content: false
            }
        };
    }

    //*******************************ERROR-MESSAGES******************************************************
    //***************************************************************************************************
    static get ERROR_OPEN_OBJECT_DOESNT_EXIST() {
        return 'Mustache open tag doesn\'t exist!';
    }

    static get ERROR_CONTENT_OBJECT_DOESNT_EXIST() {
        return 'Mustache content tag doesn\'t exist!';
    }

    static get ERROR_CLOSE_OBJECT_DOESNT_EXIST() {
        return 'Mustache close tag doesn\'t exist!';
    }

    static get ERROR_OPEN_OBJECT_HAS_WRONG_OPEN_TAG() {
        return 'Mustache open tag has wrong syntax! There is no open tag {{ or exist extra space symbol. Tag value: ';
    }

    static get ERROR_CONTENT_OBJECT_HAS_WRONG_OPEN_TAG() {
        return 'Mustache content tag has wrong syntax! There is no open tag {{ or exist extra space symbol. Tag value: ';
    }

    static get ERROR_CLOSE_OBJECT_HAS_WRONG_OPEN_TAG() {
        return 'Mustache close tag has wrong syntax! There is no open tag {{ or exist extra space symbol. Tag value: ';
    }

    static get ERROR_OPEN_OBJECT_HAS_WRONG_CLOSE_TAG() {
        return 'Mustache open tag has wrong syntax! There is no close tag }} or exist extra space symbol. Tag value: ';
    }

    static get ERROR_CONTENT_OBJECT_HAS_WRONG_CLOSE_TAG() {
        return 'Mustache content tag has wrong syntax! There is no close tag }} or exist extra space symbol. Tag value: ';
    }

    static get ERROR_CLOSE_OBJECT_HAS_WRONG_CLOSE_TAG() {
        return 'Mustache close tag has wrong syntax! There is no close tag }} or exist extra space symbol. Tag value: ';
    }

    static get ERROR_OPEN_OBJECT_MUST_HAVE_CONTENT() {
        return 'Mustache open tag must have content or name of tag! Tag value: ';
    }

    static get ERROR_CONTENT_OBJECT_MUST_HAVE_CONTENT() {
        return 'Mustache content tag must have content! Tag value: ';
    }

    static get ERROR_CLOSE_OBJECT_MUST_HAVE_CONTENT() {
        return 'Mustache close tag must have content! Tag value: ';
    }

    static get ERROR_OPEN_OBJECT_CANT_HAVE_CONTENT() {
        return 'Mustache open tag can\'t have content or name of tag! Tag value: ';
    }

    static get ERROR_CONTENT_OBJECT_CANT_HAVE_CONTENT() {
        return 'Mustache content tag can\'t have content or name of tag! Tag value: ';
    }

    static get ERROR_CLOSE_OBJECT_CANT_HAVE_CONTENT() {
        return 'Mustache close tag can\'t have content or name of tag! Tag value: ';
    }

    static get ANALYZE_COMPLETED_WITHOUT_ERRORS() {
        return "Analyze completed without errors!";
    }

    static get ERROR_THERE_IS_TAGS() {
        return 'Found tags of Mustache which doesn\'t belogn to any valid tag!';
    }

    //********************************CLASS OF ELEMENTS ON FORM*********************************************
    //******************************************************************************************************
    static get HINT_ELEMENT_CLASS_NAME() {
        return "hint";
    }

    static get MESSAGE_ELEMENT_CLASS_NAME() {
        return 'messages';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Constants;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inner_objects_OpenObject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inner_objects_CloseObject__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inner_objects_ContentObject__ = __webpack_require__(15);




class A_Node {

    constructor(parentObject) {
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
            this.openObject = new __WEBPACK_IMPORTED_MODULE_0__inner_objects_OpenObject__["a" /* OpenObject */](this);
        }
    }

    startCloseObject() {
        if (this.getCloseTagOpenValue() !== false) {
            this.closeObject = new __WEBPACK_IMPORTED_MODULE_1__inner_objects_CloseObject__["a" /* CloseObject */](this);
        }
    }

    startContentObject() {
        if (this.ifContentTagHasContent() !== false) {
            this.contentObject = new __WEBPACK_IMPORTED_MODULE_2__inner_objects_ContentObject__["a" /* ContentObject */](this);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = A_Node;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(0);


class Events {

    constructor() {
        this.element = null;
        this.eventKeyup = null;
        this.eventClick = null;
        this.events = [];
    }

    get events() {
        return this._events;
    }

    set events(value) {
        this._events = value;
    }

    get eventClick() {
        return this._eventClick;
    }

    set eventClick(value) {
        this._eventClick = value;
    }

    get eventKeyup() {
        return this._event;
    }

    set eventKeyup(value) {
        this._event = value;
    }

    get element() {
        return this._element;
    }

    set element(value) {
        this._element = value;
    }

    /**
     * Events register method
     */
    registerEvents() {
        let events = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].EVENTS;
        if (this.element !== null) {
            for (let i = 0; i < events.length; i++) {
                switch (events[i]) {
                    case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].EVENT_CLICK:
                        this.attachEventsListener(this.element, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].EVENT_CLICK, e => {
                            this.onClick(e);
                        });
                        break;
                    case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].EVENT_FOCUS:
                        this.attachEventsListener(this.element, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].EVENT_FOCUS, e => {
                            this.onFocus(e);
                        });
                        break;
                    case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].EVENT_MOUSEOVER:
                        this.attachEventsListener(this.element, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].EVENT_MOUSEOVER, e => {
                            this.onMouseOver(e);
                        });
                        break;
                    case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].EVENT_KEYUP:
                        this.attachEventsListener(this.element, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].EVENT_KEYUP, e => {
                            this.onKeyup(e);
                        });
                        break;
                    default:
                        break;
                }
            }
        }
    }

    attachEventsListener(element, eventType, handler) {
        if (element.addEventListener) {
            element.addEventListener(eventType, handler, false);
        } else {
            element.attachEvent("on" + eventType, handler);
        }
    }

    /**
     *
     * @param event
     */
    onClick(event) {
        this.eventClick = event;
    }

    /**
     *
     * @param event
     */
    onFocus(event) {}

    /**
     *
     * @param event
     */
    onMouseOver(event) {}

    onKeyup(event) {
        this.eventKeyup = event;
    }

    generateHash() {
        let str = new Date().getTime();
        return str;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Events;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class A_ComponentObject {
    constructor(parentObject) {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = A_ComponentObject;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodes_MustacheNode__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Editor__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Hint__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Validator__ = __webpack_require__(18);
/**
 * Name of target element in HTML form provided by attribute name
 * @type {string}
 */








class Elements extends __WEBPACK_IMPORTED_MODULE_0__Events__["a" /* Events */] {

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
        this.hintElement = document.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].HINT_ELEMENT_CLASS_NAME).item(0);

        this.node = new __WEBPACK_IMPORTED_MODULE_2__nodes_MustacheNode__["a" /* MustacheNode */]();

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

        this.editor = new __WEBPACK_IMPORTED_MODULE_3__Editor__["a" /* Editor */](this.eventKeyup, this.keys);
        this.hint = new __WEBPACK_IMPORTED_MODULE_4__Hint__["a" /* Hint */](this.editor, this);

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
            this.attachEventsListener(this.hintElement, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].EVENT_CLICK, e => {
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
        let validator = new __WEBPACK_IMPORTED_MODULE_5__Validator__["a" /* Validator */](this.eventClick);
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

    resetElements() {
        this.node.nodesSpecific = [];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Elements;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CommentNode__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__InvertedNode__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SectionNode__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PartialNode__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ParentNode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__A_Node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Helper__ = __webpack_require__(16);










class MustacheNode extends __WEBPACK_IMPORTED_MODULE_0__Events__["a" /* Events */] {
    constructor(key) {
        super();
        this.key = key;
        this.nodeSpecific = null;
        this.mustacheTags = [];
        this.name = '';
        this.isValid = false;
        this.isClosed = false;
        this.startPosition = 0;
        this.endPosition = 0;
        this.event = null;
        this.nodes = [];
        this.nodesSpecific = [];
        this.nodeClassName = '';
        this.allNodesMustache = [];
        this.error = [];
    }

    get mustacheTags() {
        return this._mustacheTags;
    }

    set mustacheTags(value) {
        this._mustacheTags = value;
    }

    get allNodesMustache() {
        return this._allNodesMustache;
    }

    set allNodesMustache(value) {
        this._allNodesMustache = value;
    }

    get eventType() {
        return this._eventType;
    }

    set eventType(value) {
        this._eventType = value;
    }

    get analyzePosition() {
        return this._analyzePosition;
    }

    set analyzePosition(value) {
        this._analyzePosition = value;
    }

    get parentNodeMustache() {
        return this._parentNodeMustache;
    }

    set parentNodeMustache(value) {
        this._parentNodeMustache = value;
    }

    get error() {
        return this._error;
    }

    set error(value) {
        this._error = value;
    }

    get contentRule() {
        return this._contentRule;
    }

    set contentRule(value) {
        this._contentRule = value;
    }

    get openRule() {
        return this._openRule;
    }

    set openRule(value) {
        this._openRule = value;
    }

    get isClosed() {
        return this._isClosed;
    }

    set isClosed(value) {
        this._isClosed = value;
    }

    get nodeClassName() {
        return this._nodeClassName;
    }

    set nodeClassName(value) {
        this._nodeClassName = value;
    }

    get nodesSpecific() {
        return this._nodesSpecific;
    }

    set nodesSpecific(value) {
        this._nodesSpecific = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get event() {
        return this._event;
    }

    set event(value) {
        this._event = value;
    }

    get nodes() {
        return this._nodes;
    }

    set nodes(value) {
        this._nodes = value;
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

    get endPosition() {
        return this._endPosition;
    }

    set endPosition(value) {
        this._endPosition = value;
    }

    get startPosition() {
        return this._startPosition;
    }

    set startPosition(value) {
        this._startPosition = value;
    }

    get isValid() {
        return this._isValid;
    }

    set isValid(value) {
        this._isValid = value;
    }

    get nodeSpecific() {
        return this._node;
    }

    set nodeSpecific(value) {
        this._node = value;
    }

    get key() {
        return this._key;
    }

    set key(value) {
        this._key = value;
    }

    /**
     *
     * @param key
     * @param event
     */
    createSpecificNode(key, event) {
        this.key = key;
        this.event = event;
        this.eventType = this.event.type;
        let nodeClassName = this.getNodeClassName();

        if (nodeClassName !== false) {
            if (nodeClassName === __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_END_MUSTACHE_NAME) {
                this.closeCurrentObjectRecursively(this.nodeSpecific);
            } else if (nodeClassName === __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_END_SECTION_NAME) {
                this.nodeSpecific.startCloseObject();
            } else if (nodeClassName === __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_START_MUSTACHE_NAME && this.nodeSpecific !== null && this.nodeSpecific.hasOwnProperty("_contentObject") !== true && typeof this.nodeSpecific.contentObject !== 'object') {
                this.nodeSpecific.startContentObject();
            }
        }
    }

    /**
     *
     * @returns {boolean}
     */
    getNodeClassName() {
        let className = false;

        //TODO: check if we can decrease number of lines due to putting name of class to another method
        /**
         * className = 'InvertedNode';
         * this.setAttributes(className);
         * this.nodeSpecific = new InvertedNode();
         * this.nodesSpecificAddChild(this.nodeSpecific);
         */
        switch (this.key) {
            case __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_INVERTED:
                className = 'InvertedNode';
                this.setAttributes(className);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_COMMENT:
                className = 'CommentNode';
                this.setAttributes(className);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_SECTION:
                className = 'SectionNode';
                this.setAttributes(className);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_PARTIAL:
                className = 'PartialNode';
                this.setAttributes(className);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_PARENT:
                className = 'ParentNode';
                this.setAttributes(className);
                break;
            case " " + __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_END_MUSTACHE:
                this.setAttributes(className);
                className = __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_END_MUSTACHE_NAME;
                this.mustacheTags.push(this.key);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_START_MUSTACHE + " ":
                this.setAttributes(className);
                className = __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_START_MUSTACHE_NAME;
                this.mustacheTags.push(this.key);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_END_SECTION:
                this.setAttributes(className);
                className = __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_END_SECTION_NAME;
                this.mustacheTags.push(this.key);
                break;
            default:
                break;
        }

        if (className !== false) {
            this.nodeClassName = className;
        }

        return className;
    }

    setAttributes(className) {

        this.startPosition = this.analyzePosition | 0;
        if (this.event.currentTarget === null) {
            this.eventType = __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].EVENT_CLICK;
        }

        if (className !== false) {
            this.name = this.startPosition + "_" + className;
        }

        let nodeSpecific = __WEBPACK_IMPORTED_MODULE_8__Helper__["a" /* Helper */].assign(className, this);
        if (nodeSpecific !== false) {
            this.nodeSpecific = nodeSpecific;
            this.nodesSpecificAddChild(this.nodesSpecific, this.nodeSpecific);
        }

        this.mustacheTags.push(this.key);
    }

    /**
     *
     * @param nodesSpecific
     * @param nodeSpecific
     */
    nodesSpecificAddChild(nodesSpecific, nodeSpecific) {

        this.allNodesMustache.push(nodeSpecific);

        if (nodesSpecific.length > 0) {
            for (let i = 0; i < nodesSpecific.length; i++) {
                let currentNode = nodesSpecific[i];
                if (currentNode.hasOwnProperty("_contentObject") === true && this.startPosition > currentNode.contentObject.contentOpenPosition && currentNode.contentObject.isClosed !== true || currentNode.hasOwnProperty("_contentObject") === false && this.startPosition > currentNode.openObject.openOpenPosition && currentNode.openObject.isClosed !== true) {

                    if (currentNode.hasOwnProperty("_nodesSpecific") && currentNode.nodesSpecific.length > 0) {
                        this.nodesSpecificAddChild(currentNode.nodesSpecific, nodeSpecific);
                    } else {
                        currentNode.nodesSpecific.push(nodeSpecific);
                        nodeSpecific.parentNodeMustache = currentNode;
                        console.log(this.nodesSpecific);
                        return false;
                    }
                } else if (currentNode.hasOwnProperty("_contentObject") === true && this.startPosition > currentNode.contentObject.contentOpenPosition && currentNode.contentObject.isClosed === true || currentNode.hasOwnProperty("_contentObject") === false && this.startPosition > currentNode.openObject.openOpenPosition && currentNode.openObject.isClosed === true) {

                    // return false;
                    if (i === nodesSpecific.length - 1) {
                        currentNode.parentNodeMustache.nodesSpecific.push(nodeSpecific);
                        nodeSpecific.parentNodeMustache = currentNode.parentNodeMustache;
                        console.log(this.nodesSpecific);
                        return false;
                    }
                } else {

                    if (currentNode.hasOwnProperty("_nodesSpecific") && currentNode.nodesSpecific.length > 0) {
                        this.nodesSpecificAddChild(currentNode.nodesSpecific, nodeSpecific);
                    } else {
                        currentNode.nodesSpecific.push(nodeSpecific);
                        nodeSpecific.parentNodeMustache = currentNode;
                        console.log(this.nodesSpecific);
                        return false;
                    }
                }
            }
        } else {
            nodesSpecific.push(nodeSpecific);
            nodeSpecific.parentNodeMustache = nodeSpecific.parentObject;
            console.log(this.nodesSpecific);
            return false;
        }

        console.log(this.nodesSpecific);
    }

    /**
     *
     */
    closeCurrentObjectRecursively(nodeSpecific) {
        let ret = 1;
        if (nodeSpecific !== null) {
            if (this.eventType === 'keyup') {
                if (nodeSpecific.hasOwnProperty("_openObject") && nodeSpecific.openObject.isClosed !== true) {
                    ret &= 0;
                    nodeSpecific.finishOpenObjectOnKeyup();
                } else if (nodeSpecific.hasOwnProperty("_contentObject") && nodeSpecific.contentObject.isClosed !== true) {
                    ret &= 0;
                    nodeSpecific.finishContentObjectOnKeyup();
                } else if (nodeSpecific.hasOwnProperty("_closeObject") && nodeSpecific.closeObject.isClosed !== true) {
                    ret &= 0;
                    nodeSpecific.finishCloseObjectOnKeyup();
                }
            } else if (this.eventType === 'click') {
                if (nodeSpecific.hasOwnProperty("_openObject") && nodeSpecific.openObject.isClosed !== true) {
                    ret &= 0;
                    nodeSpecific.finishOpenObjectOnClick();
                } else if (nodeSpecific.hasOwnProperty("_contentObject") && nodeSpecific.contentObject.isClosed !== true) {
                    ret &= 0;
                    nodeSpecific.finishContentObjectOnClick();
                } else if (nodeSpecific.hasOwnProperty("_closeObject") && nodeSpecific.closeObject.isClosed !== true) {
                    ret &= 0;
                    nodeSpecific.finishCloseObjectOnClick();
                }
            }

            if (ret === 1) {
                nodeSpecific = this.getPreviousNode();
                if (nodeSpecific instanceof __WEBPACK_IMPORTED_MODULE_7__A_Node__["a" /* A_Node */]) {
                    this.nodeSpecific = nodeSpecific;
                    this.closeCurrentObjectRecursively(nodeSpecific);
                }
            }
        }
    }

    getPreviousNode() {
        for (let i = this.allNodesMustache.length - 1; i >= 0; i--) {
            if (this.allNodesMustache[i].hasOwnProperty("_openObject") === true && this.allNodesMustache[i].openObject.isClosed !== true || this.allNodesMustache[i].hasOwnProperty("_contentObject") === true && this.allNodesMustache[i].contentObject.isClosed !== true || this.allNodesMustache[i].hasOwnProperty("_closeObject") === true && this.allNodesMustache[i].closeObject.isClosed !== true) {

                return this.allNodesMustache[i];
            }
        }
    }

    static ifNodeValid(node) {
        let ret = 1;

        ret &= MustacheNode.checkRules(node);

        if (node.hasOwnProperty("_openObject") === true) {
            ret &= node.openObject.isValid ? 1 : 0;
            if (node.openRule.content === true && node.openObject.openContentValue.length === 0) {
                ret &= 0;
            }
        } else {
            ret &= 1;
        }

        if (node.hasOwnProperty("_closeObject") === true) {
            ret &= node.closeObject.isValid ? 1 : 0;
            if (node.openRule.content === true && node.closeObject.closeContentValue.length === 0) {
                ret &= 0;
            }
        } else {
            ret &= 1;
        }

        if (node.hasOwnProperty("_contentObject") === true) {
            ret &= node.contentObject.isValid ? 1 : 0;
            if (node.openRule.content === true && node.contentObject.contentContentValue.length === 0) {
                ret &= 0;
            }
        } else {
            ret &= 1;
        }

        ret &= node.isClosed ? 1 : 0;

        return ret;
    }

    /**
     * Chechink syntax of Mustache tags correspond to rules
     * @returns {boolean}
     */
    static checkRules(node) {
        let ret = true;

        if (node.hasOwnProperty("_openObject") === true) {
            ret &= MustacheNode.checkOpenObject(node);
        }

        if (node.hasOwnProperty("_closeObject") === true) {
            ret &= MustacheNode.checkCloseObject(node);
        }

        if (node.hasOwnProperty("_contentObject") === true) {
            ret &= MustacheNode.checkContentObject(node);
        }

        return ret;
    }

    /**
     *
     * @returns {boolean}
     */
    static checkOpenObject(node) {
        let ret = true;

        if (node.openRule.content !== false) {
            if (node.hasOwnProperty("_openObject") === true) {
                if (node.openObject.isClosed !== true) {
                    ret &= 0;
                    if (node.openObject.openCloseValue.length === 0) {
                        node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_OPEN_OBJECT_HAS_WRONG_CLOSE_TAG + MustacheNode.getTagValue(node, 'open')]);
                    }
                    if (node.openObject.openOpenValue.length === 0) {
                        node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_OPEN_OBJECT_HAS_WRONG_OPEN_TAG + MustacheNode.getTagValue(node, 'open')]);
                    }
                }

                if (node.openObject.openContentValue.length === 0) {
                    ret &= 0;
                    node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_OPEN_OBJECT_MUST_HAVE_CONTENT + MustacheNode.getTagValue(node, 'open')]);
                }
            } else {
                ret &= 0;
                node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_OPEN_OBJECT_DOESNT_EXIST]);
            }
        } else {
            if (node.hasOwnProperty("_openObject") === true) {
                if (node.openObject.openContentValue.length > 0) {
                    ret &= 0;
                    node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_OPEN_OBJECT_CANT_HAVE_CONTENT + MustacheNode.getTagValue(node, 'open')]);
                }
            }
        }
        node.openObject.isValid = ret;
        return ret;
    }

    /**
     *
     * @returns {boolean}
     */
    static checkContentObject(node) {
        let ret = true;

        if (node.contentRule.content !== false) {
            if (node.hasOwnProperty("_contentObject") === true) {
                if (node.contentObject.isClosed !== true) {
                    ret &= 0;
                    if (node.contentObject.contentCloseValue.length === 0) {
                        node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_CONTENT_OBJECT_HAS_WRONG_CLOSE_TAG + MustacheNode.getTagValue(node, 'content')]);
                    }
                    if (node.contentObject.contentOpenValue.length === 0) {
                        node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_CONTENT_OBJECT_HAS_WRONG_OPEN_TAG + MustacheNode.getTagValue(node, 'content')]);
                    }
                }

                if (node.contentObject.contentContentValue.length === 0) {
                    ret &= 0;
                    node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_CONTENT_OBJECT_MUST_HAVE_CONTENT + MustacheNode.getTagValue(node, 'content')]);
                }
            } else {
                ret &= 0;
                node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_CONTENT_OBJECT_DOESNT_EXIST]);
            }
        } else {
            if (node.hasOwnProperty("_contentObject") === true) {
                if (node.contentObject.contentContentValue.length > 0) {
                    ret &= 0;
                    node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_CONTENT_OBJECT_CANT_HAVE_CONTENT + MustacheNode.getTagValue(node, 'content')]);
                }
            }
        }
        node.contentObject.isValid = ret;
        return ret;
    }

    /**
     *
     * @returns {boolean}
     */
    static checkCloseObject(node) {
        let ret = true;

        if (node.openRule.content !== false) {
            if (node.hasOwnProperty("_closeObject") === true) {
                if (node.closeObject.isClosed !== true) {
                    ret &= 0;
                    if (node.closeObject.closeCloseValue.length === 0) {
                        node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_CLOSE_OBJECT_HAS_WRONG_CLOSE_TAG + MustacheNode.getTagValue(node, 'close')]);
                    }
                    if (node.closeObject.closeOpenValue.length === 0) {
                        node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_CLOSE_OBJECT_HAS_WRONG_OPEN_TAG + MustacheNode.getTagValue(node, 'close')]);
                    }
                }

                if (node.closeObject.closeContentValue.length === 0) {
                    ret &= 0;
                    node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_CLOSE_OBJECT_MUST_HAVE_CONTENT + MustacheNode.getTagValue(node, 'close')]);
                }
            } else {
                ret &= 0;
                node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_CLOSE_OBJECT_DOESNT_EXIST]);
            }
        } else {
            if (node.hasOwnProperty("_closeObject") === true) {
                if (node.closeObject.closeContentValue.length > 0) {
                    ret &= 0;
                    node.error.push([node.name, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_CLOSE_OBJECT_CANT_HAVE_CONTENT + MustacheNode.getTagValue(node, 'close')]);
                }
            }
        }
        node.closeObject.isValid = ret;
        return ret;
    }

    static getTagValue(node, type) {
        let value = '';
        switch (type) {
            case 'open':
                value = node.openObject.openOpenValue + node.openObject.openContentValue + node.openObject.openCloseValue;
                break;
            case 'content':
                value = node.contentObject.contentOpenValue + node.contentObject.contentContentValue + node.contentObject.contentCloseValue;
                break;
            case 'close':
                value = node.closeObject.closeOpenValue + node.closeObject.closeContentValue + node.closeObject.closeCloseValue;
                break;
            default:
                break;
        }

        return '<span class="errorTag">' + value + '</span>';
    }

    compareTagsAndNodes() {
        if (this.mustacheTags.length > 0 && this.nodesSpecific.length === 0) {
            return true;
        }

        let countOfTags = this.mustacheTags.length % 2;

        return countOfTags % 2 !== 0;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MustacheNode;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__A_Node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class CommentNode extends __WEBPACK_IMPORTED_MODULE_0__A_Node__["a" /* A_Node */] {

    constructor(parentObject) {
        super(parentObject);
        this.applyRules(__WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].RULE_COMMENT);
        this.startOpenObject();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CommentNode;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__A_Node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class InvertedNode extends __WEBPACK_IMPORTED_MODULE_0__A_Node__["a" /* A_Node */] {

    constructor(parentObject) {
        super(parentObject);
        this.applyRules(__WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].RULE_INVERTED);
        this.startOpenObject();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InvertedNode;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__A_Node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class SectionNode extends __WEBPACK_IMPORTED_MODULE_0__A_Node__["a" /* A_Node */] {
    constructor(parentObject) {
        super(parentObject);
        this.applyRules(__WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].RULE_SECTION);
        this.startOpenObject();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SectionNode;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__A_Node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class PartialNode extends __WEBPACK_IMPORTED_MODULE_0__A_Node__["a" /* A_Node */] {
    constructor(parentObject) {
        super(parentObject);
        this.applyRules(__WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].RULE_PARTIAL);
        this.startOpenObject();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PartialNode;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__A_Node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class ParentNode extends __WEBPACK_IMPORTED_MODULE_0__A_Node__["a" /* A_Node */] {
    constructor(parentObject) {
        super(parentObject);
        this.applyRules(__WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].RULE_PARENT);
        this.startOpenObject();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ParentNode;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(0);


class Editor {

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
            case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_SECTION:
                ret = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_SECTION_NAME;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_INVERTED:
                ret = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_INVERTED_NAME;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_COMMENT:
                ret = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_COMMENT_NAME;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_PARTIAL:
                ret = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_PARTIAL_NAME;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_PARENT:
                ret = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_PARENT_NAME;
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
            case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_SECTION_NAME:
                hint = " name_of_section " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_END_MUSTACHE + " " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_START_MUSTACHE + " value_of_section " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_END_MUSTACHE + " " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_END_SECTION + " name_of_section " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_END_MUSTACHE;
                label = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_SECTION_NAME;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_INVERTED_NAME:
                hint = " name_of_inverted_section " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_END_MUSTACHE + " " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_START_MUSTACHE + " value_of_inverted_section " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_END_MUSTACHE + " " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_START_MUSTACHE + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_END_SECTION + " name_of_inverted_section " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_END_MUSTACHE;
                label = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_INVERTED_NAME;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_COMMENT_NAME:
                hint = " value_of_comment " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_END_MUSTACHE;
                label = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_COMMENT_NAME;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_PARTIAL_NAME:
                hint = " name_of_partial " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_END_MUSTACHE;
                label = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_PARTIAL_NAME;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_PARENT_NAME:
                hint = " name_of_parent " + __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_END_MUSTACHE;
                label = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].T_PARENT_NAME;
                break;
            default:
                break;
        }

        this.hint = hint;
        this.label = label;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Editor;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_Elements__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_Analyze__ = __webpack_require__(19);



window.elemText = new __WEBPACK_IMPORTED_MODULE_0__class_Elements__["a" /* Elements */]('mustache');
window.elemAnalyze = new __WEBPACK_IMPORTED_MODULE_1__class_Analyze__["a" /* Analyze */]('analyze', elemText);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__A_ComponentObject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class OpenObject extends __WEBPACK_IMPORTED_MODULE_0__A_ComponentObject__["a" /* A_ComponentObject */] {
    constructor(parentObject) {
        super(parentObject);
        this.setValuesForOpenObject();
    }

    setValuesForOpenObject() {
        let object = this.parentObject.parentObject;
        this.openOpenValue = object.key;

        if (object.eventType === __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].EVENT_KEYUP) {
            this.openOpenPosition = object.event.target.selectionStart - 3;
        } else if (object.eventType === __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].EVENT_CLICK) {
            this.openOpenPosition = object.analyzePosition;
        } else {
            this.openOpenPosition = 0;
        }

        this.openContentValue = '';
        this.openContentPosition = 0;
        this.openCloseValue = '';
        this.openClosePosition = 0;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OpenObject;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__A_ComponentObject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class CloseObject extends __WEBPACK_IMPORTED_MODULE_0__A_ComponentObject__["a" /* A_ComponentObject */] {
    constructor(parentObject) {
        super(parentObject);
        this.setValuesForCloseObject();
    }

    setValuesForCloseObject() {
        let object = this.parentObject.parentObject;
        this.closeOpenValue = object.key;

        if (object.eventType === __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].EVENT_KEYUP) {
            this.closeOpenPosition = object.event.target.selectionStart - 3;
        } else if (object.eventType === __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].EVENT_CLICK) {
            this.closeOpenPosition = object.analyzePosition;
        } else {
            this.closeOpenPosition = 0;
        }

        this.closeContentValue = '';
        this.closeContentPosition = 0;
        this.closeCloseValue = '';
        this.closeClosePosition = 0;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CloseObject;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__A_ComponentObject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class ContentObject extends __WEBPACK_IMPORTED_MODULE_0__A_ComponentObject__["a" /* A_ComponentObject */] {
    constructor(parentObject) {
        super(parentObject);
        this.setValuesForContentObject();
    }

    setValuesForContentObject() {
        let object = this.parentObject.parentObject;
        this.contentOpenValue = object.key;

        if (object.eventType === __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].EVENT_KEYUP) {
            this.contentOpenPosition = object.event.target.selectionStart - 3;
        } else if (object.eventType === __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].EVENT_CLICK) {
            this.contentOpenPosition = object.analyzePosition;
        } else {
            this.contentOpenPosition = 0;
        }

        this.contentContentValue = '';
        this.contentContentPosition = 0;
        this.contentCloseValue = '';
        this.contentClosePosition = 0;
    }

    closeParentNode() {
        this.parentObject.finishContentObjectOnKeyup();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ContentObject;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CommentNode__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InvertedNode__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SectionNode__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PartialNode__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ParentNode__ = __webpack_require__(10);






class Helper {
    constructor() {}

    static assign(name, nodeObject) {
        switch (name) {
            case 'InvertedNode':
                return new __WEBPACK_IMPORTED_MODULE_1__InvertedNode__["a" /* InvertedNode */](nodeObject);
            case 'CommentNode':
                return new __WEBPACK_IMPORTED_MODULE_0__CommentNode__["a" /* CommentNode */](nodeObject);
            case 'SectionNode':
                return new __WEBPACK_IMPORTED_MODULE_2__SectionNode__["a" /* SectionNode */](nodeObject);
            case 'PartialNode':
                return new __WEBPACK_IMPORTED_MODULE_3__PartialNode__["a" /* PartialNode */](nodeObject);
            case 'ParentNode':
                return new __WEBPACK_IMPORTED_MODULE_4__ParentNode__["a" /* ParentNode */](nodeObject);
            default:
                return false;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Helper;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(2);


class Hint extends __WEBPACK_IMPORTED_MODULE_0__Events__["a" /* Events */] {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Hint;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Editor__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class Validator extends __WEBPACK_IMPORTED_MODULE_0__Editor__["a" /* Editor */] {
    constructor(event) {
        let keys = '';
        super(event, keys);
    }

    findPreviousMustacheTag(element, position) {
        let key = '';
        // console.log("Position: " + position);
        while (position > 0) {
            let subStr = element.eventClick.target.value.substr(0, position);
            key = subStr.substr(-2);
            position--;
            if (key === __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_START_MUSTACHE) {
                // console.log("Position <-: " + position);
            }
        }
    }

    findNextMustacheTag(element, position) {
        let key = '';
        let length = element.eventClick.target.value.length;
        // console.log("Position: " + position);
        while (position < length) {
            let subStr = element.eventClick.target.value.substr(position);
            key = subStr.substr(2);
            position++;
            if (key === __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].T_END_MUSTACHE) {
                // console.log("Position ->: " + position);
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Validator;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Elements__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodes_MustacheNode__ = __webpack_require__(5);




class Analyze extends __WEBPACK_IMPORTED_MODULE_0__Elements__["a" /* Elements */] {
    constructor(name) {
        super(name);
        this.elementObject = elemText;
        this.messageElement = document.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].MESSAGE_ELEMENT_CLASS_NAME).item(0);
        this.name = name;
        this.realTimeAnalyzing = false;
    }

    get realTimeAnalyzing() {
        return this._realTimeAnalyzing;
    }

    set realTimeAnalyzing(value) {
        this._realTimeAnalyzing = value;
    }

    get messageElement() {
        return this._messageElement;
    }

    set messageElement(value) {
        this._messageElement = value;
    }

    get elementObject() {
        return this._elementObject;
    }

    set elementObject(value) {
        this._elementObject = value;
    }

    onClick(event) {
        this.hideMessages();
        this.eventClick = event;
        this.eventKeyup = this.elementObject.node.event;
        let value = this.eventKeyup.target.value;

        if (this.realTimeAnalyzing === true) {
            this.analyzeHint(value);
        } else {
            this.analyze(value);
        }
    }

    analyze(value) {
        let length = value.length;
        for (let i = 0; i < length; i++) {
            this.keys = value.substr(i, 3);
            this.node.analyzePosition = i;
            this.node.createSpecificNode(this.keys, this.eventKeyup);
        }
        let valid = this.validate();

        this.showResults(valid);
    }

    analyzeHint(value) {
        let length = value.length;
        for (let i = 0; i < length; i++) {
            this.keys = value.substr(i, 3);
            this.elementObject.node.analyzePosition = i;
            this.elementObject.node.createSpecificNode(this.keys, this.eventKeyup);
        }
        let valid = this.validate();

        this.showResults(valid);
    }

    validate() {
        let nodes = this.node.nodesSpecific;
        let length = nodes.length;
        let ret = 1;
        for (let i = 0; i < length; i++) {
            ret &= __WEBPACK_IMPORTED_MODULE_2__nodes_MustacheNode__["a" /* MustacheNode */].ifNodeValid(nodes[i]);
        }

        return ret;
    }

    showResults(valid) {
        let validBool = valid === 1;
        let ret = 1;

        if (validBool !== true) {
            let messages = '';
            for (let n = 0; n < this.node.nodesSpecific.length; n++) {
                let errLength = this.node.nodesSpecific[n].error.length;
                for (let i = 0; i < errLength; i++) {
                    messages += "<span> There is error in element " + this.node.nodesSpecific[n].error[i][0] + " with error message - " + this.node.nodesSpecific[n].error[i][1] + "</span><br />";
                }
            }
            this.setValueMessages(messages);
        } else {
            this.setValueMessages(__WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ANALYZE_COMPLETED_WITHOUT_ERRORS);
        }

        let ifExistNotUsedTags = this.node.compareTagsAndNodes();

        if (ifExistNotUsedTags === false) {
            this.setValueMessages(__WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ERROR_THERE_IS_TAGS);
        }

        this.showMessages();
    }

    setValueMessages(message) {
        this.messageElement.innerHTML = '';
        this.messageElement.innerHTML = message;
        this.resetElements();
    }

    showMessages() {
        this.messageElement.parentNode.style.display = "block";
    }

    hideMessages() {
        this.messageElement.parentNode.style.display = "none";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Analyze;


/***/ })
],[12]);