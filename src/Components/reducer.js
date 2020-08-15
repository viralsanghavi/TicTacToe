export const initialState = {
    start: null,
}


export const actionType = {
    SET_SELECT: "SET_SELECT"
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionType.SET_SELECT:
            return {
                ...state,
                start: action.start
            }
        default:
            return state
    }
}
export default reducer