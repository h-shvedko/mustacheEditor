export class Constants {
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
