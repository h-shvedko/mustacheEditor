import {A_ComponentObject} from "./A_ComponentObject";
import {Constants} from "../../Constants";

export class CloseObject extends A_ComponentObject{
    constructor(parentObject) {
        super(parentObject);
        this.setValuesForCloseObject();
    }

    setValuesForCloseObject() {
        let object = this.parentObject.parentObject;
        this.closeOpenValue = object.key;

        if (object.eventType === Constants.EVENT_KEYUP) {
            this.closeOpenPosition = object.event.target.selectionStart - 3;
        } else if (object.eventType === Constants.EVENT_CLICK) {
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