import {A_ComponentObject} from "./A_ComponentObject";
import {Constants} from "../../Constants";

export class ContentObject extends A_ComponentObject{
    constructor(parentObject) {
        super(parentObject);
        this.setValuesForContentObject();
    }

    setValuesForContentObject() {
        let object = this.parentObject.parentObject;
        this.contentOpenValue = object.key;

        if (object.eventType === Constants.EVENT_KEYUP) {
            this.contentOpenPosition = object.event.target.selectionStart - 3;
        } else if (object.eventType === Constants.EVENT_CLICK) {
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