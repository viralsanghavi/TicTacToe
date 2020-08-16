export const initialState = {
    start: null,
    message: ''
}


export const actionType = {
    SET_SELECT: "SET_SELECT",
    SET_WINNER: 'SET_WINNER'
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionType.SET_SELECT:
            return {
                ...state,
                start: action.start
            }
        case actionType.SET_WINNER:
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}
export default reducer