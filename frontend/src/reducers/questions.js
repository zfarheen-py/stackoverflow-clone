const questionsReducer = (state = { data: null}, actions) => {
    switch (actions.type) {
        case "POST_QUESTION":
            return{...state, data: actions.payload}
        default:
            return state
    }
}

export default questionsReducer