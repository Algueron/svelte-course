import { getContext, hasContext, setContext } from "svelte";

class Counter {
    value = $state(0);

    increment = () => {
        this.value += 1;
    }

    reset = () => {
        this.value = 0;
    }
}
export default Counter;

const counterContextKey = Symbol('count');

export function setCounterContext(counter: Counter) {
    setContext(counterContextKey, counter);
}

export function getCounterContext() {
    return getContext(counterContextKey) as Counter;
}

export function hasCounterContext() {
    return hasContext(counterContextKey);
}
