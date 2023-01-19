import IItem from "../../Interface/IItem";
import ComplexItem from "../../Items/ComplexItem";

class LinkedListNode {
    value: IItem | ComplexItem;
    next: LinkedListNode | null;

    constructor(value: IItem | ComplexItem, next: LinkedListNode | null = null) {
      this.value = value;
      this.next = next;
    }
}

export default LinkedListNode;