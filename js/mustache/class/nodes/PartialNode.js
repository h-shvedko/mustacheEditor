import {A_Node} from "./A_Node";
import {Constants} from "../Constants";

export class PartialNode extends A_Node{
    constructor(parentObject){
        super(parentObject);
        this.applyRules(Constants.RULE_PARTIAL);
        this.startOpenObject();
    }
}