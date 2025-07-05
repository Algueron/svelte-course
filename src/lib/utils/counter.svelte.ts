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
