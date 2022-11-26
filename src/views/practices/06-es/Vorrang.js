import Queue from "../../../utils/Queue"

class Vorrang {
    constructor(dependencies) {
        this.map = this.generateTasks(dependencies);
        this.setDependencies(dependencies);
    }

    size(){
        return this.map.size;
    }

    generateTasks(dependencies) {
        var map = new Map();
        for (let dependency of dependencies) {
            if (!map.get(dependency[0])) map.set(dependency[0], new Task())
            if (!map.get(dependency[1])) map.set(dependency[1], new Task())
        }
        return map;
    }

    setDependencies(dependencies) {
        for (let dependency of dependencies) {
            this.setDependency(dependency);
        }
    }

    setDependency(dependency) {
        var prev = this.map.get(dependency[0]);
        var next = this.map.get(dependency[1]);
        if (prev && next) {
            prev.next.push(dependency[1]);
            next.level++;
        }
    }
}

Vorrang.prototype[Symbol.iterator] = function () {
    var map = this.map;

    const initQueue = function () {
        let q = new Queue();
        for (let [key, value] of map) {
            if (value.level == 0) {
                q.push(key);
            }
        }
        return q;
    };

    var queue = initQueue();

    const nextElement = function () {
        if (queue.isEmpty()) return null;
        var value = queue.pull();
        for (let task of map.get(value).next) {
            var next = map.get(task);
            next.level--;
            if (next.level == 0) {
                queue.push(task);
            }
        }
        return value;
    };

    return {
        next: function () {
            if (!queue.isEmpty()) return { value: nextElement(), done: false };
            return { value: nextElement(), done: true };
        },
    };
};

class Task {
    constructor() {
        this.next = [];
        this.level = 0;
    }
}

export default Vorrang;