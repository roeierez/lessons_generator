
const createReducer = (handlersConfig, initialState) => {
    return (state = initialState, action) => {
        if (handlersConfig[action.type]) {
            return handlersConfig[action.type](state, action);
        } else {
            return state;
        }
    }
}

export {
    createReducer
}
