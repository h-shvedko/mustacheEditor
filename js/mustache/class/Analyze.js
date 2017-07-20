import {Elements} from "./Elements";
import {Constants} from "./Constants";
import {MustacheNode} from "./nodes/MustacheNode";

export class Analyze extends Elements {
    constructor(name) {
        super(name);
        this.elementObject = elemText;
        this.messageElement = document.getElementsByClassName(Constants.MESSAGE_ELEMENT_CLASS_NAME).item(0);
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
            ret &= MustacheNode.ifNodeValid(nodes[i]);
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
            this.setValueMessages(Constants.ANALYZE_COMPLETED_WITHOUT_ERRORS);
        }

        let ifExistNotUsedTags = this.node.compareTagsAndNodes();

        if(ifExistNotUsedTags === false){
            this.setValueMessages(Constants.ERROR_THERE_IS_TAGS);
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