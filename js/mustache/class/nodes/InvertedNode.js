import {A_Node} from "./A_Node";
import {Constants} from "../Constants";

export class InvertedNode extends A_Node{

    constructor(parentObject){
        super(parentObject);
        this.applyRules(Constants.RULE_INVERTED);
        this.startOpenObject();
    }
}