import {CommentNode} from "./CommentNode";
import {InvertedNode} from "./InvertedNode";
import {SectionNode} from "./SectionNode";
import {PartialNode} from "./PartialNode";
import {ParentNode} from "./ParentNode";

export class Helper{
    constructor(){

    }

    static assign(name, nodeObject){
        switch (name) {
            case 'InvertedNode':
                return new InvertedNode(nodeObject);
            case 'CommentNode':
                return new CommentNode(nodeObject);
            case 'SectionNode':
                return new SectionNode(nodeObject);
            case 'PartialNode':
                return new PartialNode(nodeObject);
            case 'ParentNode':
                return new ParentNode(nodeObject);
            default:
                return false;
        }
    }
}