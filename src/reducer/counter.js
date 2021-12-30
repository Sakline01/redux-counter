
const Counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state += action.payload;
        case "DECREMENT":
            return state -= action.payload;
        case "MULTIPLY":
            return state *= action.payload;
        case "DIVISION":
            return state /= action.payload;
        default:
            return state;
    }
}

export default Counter;
