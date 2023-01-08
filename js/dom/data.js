const elemMap = new Map();

export default {
    set(elem, key, instance) {
        if (!elemMap.has(elem)) {
            elemMap.set(elem, new Map());
        }

        const instanceMap = elemMap.get(elem);

        if (!instanceMap.has(key) && instanceMap.size !== 0) {
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}`);
            return
        }

        instanceMap.set(key, instance);
    },

    get(elem, key) {
        if (elemMap.has(elem)) {
            return elemMap.get(elem).get(key) || null
        }

        return null
    },

    remove(elem, key) {
        if (!elemMap.has(elem)) {
            return
        }

        const instanceMap = elemMap.get(elem);
        instanceMap.delete(key);

        if (instanceMap.size === 0) {
            elemMap.delete(elem);
        }
    }
}