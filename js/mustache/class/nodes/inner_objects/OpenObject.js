import {A_ComponentObject} from "./A_ComponentObject";
import {Constants} from "../../Constants";

export class OpenObject extends A_ComponentObject{
    constructor(parentObject) {
        super(parentObject);
        this.setValuesForOpenObject();
    }

    setValuesForOpenObject() {
        let object = this.parentObject.parentObject;
        this.openOpenValue = object.key;

        if (object.eventType === Constants.EVENT_KEYUP) {
            this.openOpenPosition = object.event.target.selectionStart - 3;
        } else if (object.eventType === Constants.EVENT_CLICK) {
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