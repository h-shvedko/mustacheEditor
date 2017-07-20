import {Events} from "../Events";
import {Constants} from "../Constants";
import {CommentNode} from "./CommentNode";
import {InvertedNode} from "./InvertedNode";
import {SectionNode} from "./SectionNode";
import {PartialNode} from "./PartialNode";
import {ParentNode} from "./ParentNode";
import {A_Node} from "./A_Node";
import {Helper} from "./Helper";

export class MustacheNode extends Events {
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
            if (nodeClassName === Constants.T_END_MUSTACHE_NAME) {
                this.closeCurrentObjectRecursively(this.nodeSpecific);
            } else if (nodeClassName === Constants.T_END_SECTION_NAME) {
                this.nodeSpecific.startCloseObject();
            } else if (nodeClassName === Constants.T_START_MUSTACHE_NAME && this.nodeSpecific !== null && this.nodeSpecific.hasOwnProperty("_contentObject") !== true && typeof this.nodeSpecific.contentObject !== 'object') {
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
            case Constants.T_START_MUSTACHE + Constants.T_INVERTED:
                className = 'InvertedNode';
                this.setAttributes(className);
                break;
            case Constants.T_START_MUSTACHE + Constants.T_COMMENT:
                className = 'CommentNode';
                this.setAttributes(className);
                break;
            case Constants.T_START_MUSTACHE + Constants.T_SECTION:
                className = 'SectionNode';
                this.setAttributes(className);
                break;
            case Constants.T_START_MUSTACHE + Constants.T_PARTIAL:
                className = 'PartialNode';
                this.setAttributes(className);
                break;
            case Constants.T_START_MUSTACHE + Constants.T_PARENT:
                className = 'ParentNode';
                this.setAttributes(className);
                break;
            case " " + Constants.T_END_MUSTACHE:
                this.setAttributes(className);
                className = Constants.T_END_MUSTACHE_NAME;
                this.mustacheTags.push(this.key);
                break;
            case Constants.T_START_MUSTACHE + " ":
                this.setAttributes(className);
                className = Constants.T_START_MUSTACHE_NAME;
                this.mustacheTags.push(this.key);
                break;
            case Constants.T_START_MUSTACHE + Constants.T_END_SECTION:
                this.setAttributes(className);
                className = Constants.T_END_SECTION_NAME;
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
            this.eventType = Constants.EVENT_CLICK;
        }

        if (className !== false) {
            this.name = this.startPosition + "_" + className;
        }

        let nodeSpecific = Helper.assign(className, this);
        if(nodeSpecific !== false){
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
                if ((currentNode.hasOwnProperty("_contentObject") === true && this.startPosition > currentNode.contentObject.contentOpenPosition && currentNode.contentObject.isClosed !== true) ||
                    (currentNode.hasOwnProperty("_contentObject") === false && this.startPosition > currentNode.openObject.openOpenPosition && currentNode.openObject.isClosed !== true)) {

                    if (currentNode.hasOwnProperty("_nodesSpecific") && currentNode.nodesSpecific.length > 0) {
                        this.nodesSpecificAddChild(currentNode.nodesSpecific, nodeSpecific);
                    } else {
                        currentNode.nodesSpecific.push(nodeSpecific);
                        nodeSpecific.parentNodeMustache = currentNode;
                        console.log(this.nodesSpecific);
                        return false;
                    }

                } else if ((currentNode.hasOwnProperty("_contentObject") === true && this.startPosition > currentNode.contentObject.contentOpenPosition && currentNode.contentObject.isClosed === true) ||
                    (currentNode.hasOwnProperty("_contentObject") === false && this.startPosition > currentNode.openObject.openOpenPosition && currentNode.openObject.isClosed === true)) {

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
                if (nodeSpecific instanceof A_Node) {
                    this.nodeSpecific = nodeSpecific;
                    this.closeCurrentObjectRecursively(nodeSpecific);
                }
            }
        }
    }

    getPreviousNode() {
        for (let i = this.allNodesMustache.length - 1; i >= 0; i--) {
            if ((this.allNodesMustache[i].hasOwnProperty("_openObject") === true && this.allNodesMustache[i].openObject.isClosed !== true) ||
                (this.allNodesMustache[i].hasOwnProperty("_contentObject") === true && this.allNodesMustache[i].contentObject.isClosed !== true) ||
                (this.allNodesMustache[i].hasOwnProperty("_closeObject") === true && this.allNodesMustache[i].closeObject.isClosed !== true)) {

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

        if(node.hasOwnProperty("_openObject") === true){
            ret &= MustacheNode.checkOpenObject(node);
        }

        if(node.hasOwnProperty("_closeObject") === true){
            ret &= MustacheNode.checkCloseObject(node);
        }

        if(node.hasOwnProperty("_contentObject") === true){
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
                        node.error.push([node.name, Constants.ERROR_OPEN_OBJECT_HAS_WRONG_CLOSE_TAG + MustacheNode.getTagValue(node, 'open')]);
                    }
                    if (node.openObject.openOpenValue.length === 0) {
                        node.error.push([node.name, Constants.ERROR_OPEN_OBJECT_HAS_WRONG_OPEN_TAG + MustacheNode.getTagValue(node, 'open')]);
                    }
                }

                if (node.openObject.openContentValue.length === 0) {
                    ret &= 0;
                    node.error.push([node.name, Constants.ERROR_OPEN_OBJECT_MUST_HAVE_CONTENT + MustacheNode.getTagValue(node, 'open')]);
                }
            } else {
                ret &= 0;
                node.error.push([node.name, Constants.ERROR_OPEN_OBJECT_DOESNT_EXIST]);
            }
        } else {
            if (node.hasOwnProperty("_openObject") === true) {
                if (node.openObject.openContentValue.length > 0) {
                    ret &= 0;
                    node.error.push([node.name, Constants.ERROR_OPEN_OBJECT_CANT_HAVE_CONTENT + MustacheNode.getTagValue(node, 'open')]);
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
                        node.error.push([node.name, Constants.ERROR_CONTENT_OBJECT_HAS_WRONG_CLOSE_TAG + MustacheNode.getTagValue(node, 'content')]);
                    }
                    if (node.contentObject.contentOpenValue.length === 0) {
                        node.error.push([node.name, Constants.ERROR_CONTENT_OBJECT_HAS_WRONG_OPEN_TAG + MustacheNode.getTagValue(node, 'content')]);
                    }
                }

                if (node.contentObject.contentContentValue.length === 0) {
                    ret &= 0;
                    node.error.push([node.name, Constants.ERROR_CONTENT_OBJECT_MUST_HAVE_CONTENT + MustacheNode.getTagValue(node, 'content')]);
                }
            } else {
                ret &= 0;
                node.error.push([node.name, Constants.ERROR_CONTENT_OBJECT_DOESNT_EXIST]);
            }
        } else {
            if (node.hasOwnProperty("_contentObject") === true) {
                if (node.contentObject.contentContentValue.length > 0) {
                    ret &= 0;
                    node.error.push([node.name, Constants.ERROR_CONTENT_OBJECT_CANT_HAVE_CONTENT + MustacheNode.getTagValue(node, 'content')]);
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
                        node.error.push([node.name, Constants.ERROR_CLOSE_OBJECT_HAS_WRONG_CLOSE_TAG + MustacheNode.getTagValue(node, 'close')]);
                    }
                    if (node.closeObject.closeOpenValue.length === 0) {
                        node.error.push([node.name, Constants.ERROR_CLOSE_OBJECT_HAS_WRONG_OPEN_TAG + MustacheNode.getTagValue(node, 'close')]);
                    }
                }

                if (node.closeObject.closeContentValue.length === 0) {
                    ret &= 0;
                    node.error.push([node.name, Constants.ERROR_CLOSE_OBJECT_MUST_HAVE_CONTENT + MustacheNode.getTagValue(node, 'close')]);
                }
            } else {
                ret &= 0;
                node.error.push([node.name, Constants.ERROR_CLOSE_OBJECT_DOESNT_EXIST]);
            }
        } else {
            if (node.hasOwnProperty("_closeObject") === true) {
                if (node.closeObject.closeContentValue.length > 0) {
                    ret &= 0;
                    node.error.push([node.name, Constants.ERROR_CLOSE_OBJECT_CANT_HAVE_CONTENT + MustacheNode.getTagValue(node, 'close')]);
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
        if(this.mustacheTags.length > 0 && this.nodesSpecific.length === 0){
            return true;
        }

        let countOfTags = this.mustacheTags.length % 2;

        return countOfTags % 2 !== 0;
    }
}