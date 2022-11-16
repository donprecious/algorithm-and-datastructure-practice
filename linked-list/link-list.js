class Node {

    constructor(value) {
        this.value = value; 
        this.next = null;
    }
}

class LinkedList{ 

    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
            return;
        } 
        let currentNode = this.head; 
        while (currentNode.next !== null) {
            currentNode = currentNode.next; 
        }
        currentNode.next = new Node(value);
    }

    print() {
        let currentNode = this.head;
        let str = ''; 
        while (currentNode !== null) {
            str += currentNode.value + "->"; 
            currentNode = currentNode.next;
        }
        console.log(str);
        return str;
    }

    hasValue(value) {
        let currentNode = this.head; 
        while (currentNode !== null) {
            if (currentNode.value == value) {
                console.log(true);
                return true;
            }
            currentNode = currentNode.next;
        }
        console.log(false);
        return false;
    } 

    append_recusive(value) {
          if (this.head == null) {
              this.head = new Node(value);
              return;
        } 
        let currentNode = this.head;  
        _append(value,  currentNode);
    }

    _append(value, currentNode) {
        if (currentNode.value == null) {
            currentNode.value = newNode(value);
            return; 
        }
        this._append(value, currentNode.next);
    }

    print_recusive() {
        const output = this._print_recusive();
        console.log(output);
    }
    _print_recusive(currentNode) {
        if (currentNode == null) return ""; 

        return  currentNode.value +this._print_recusive(currentNode.next);
    }


}


const items = new LinkedList(); 
// items.append('a')
// items.append('b')
// items.append('b')
// items.print();
// items.hasValue('b');
// items.hasValue('3');

// items.append_recusive('a')
// items.append_recusive('b')
// items.append_recusive('d')
// items.print_recusive(); 



