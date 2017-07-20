import {Editor} from "./Editor";
import {Constants} from "./Constants";

export class Validator extends Editor {
    constructor(event) {
        let keys = '';
        super(event, keys);

    }

    findPreviousMustacheTag(element, position) {
        let key = '';
        // console.log("Position: " + position);
        while(position > 0){
            let subStr = element.eventClick.target.value.substr(0, position);
            key = subStr.substr(-2);
            position --;
            if(key === Constants.T_START_MUSTACHE){
                // console.log("Position <-: " + position);
            }
        }
    }

    findNextMustacheTag(element, position) {
        let key = '';
        let length = element.eventClick.target.value.length;
        // console.log("Position: " + position);
        while(position < length){
            let subStr = element.eventClick.target.value.substr(position);
            key = subStr.substr(2);
            position ++;
            if(key === Constants.T_END_MUSTACHE){
                // console.log("Position ->: " + position);
            }
        }
    }
}