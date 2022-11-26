export default class Stack {
    constructor() {
        this.array = []
    }
    push(element) {
        this.array.push(element);
    }
    pull() {
        return this.array.pop();
    }
    pop() {
        if (this.array.length < 1) return null;
        return this.array[this.array.length - 1];
    }
    length() {
        return this.array.length;
    }
    isEmpty() {
        return this.length() === 0;
    }
}