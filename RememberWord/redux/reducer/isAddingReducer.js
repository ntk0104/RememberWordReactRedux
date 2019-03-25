const isAddingReducer = (state = false, action) => {
    if(action.type === 'CHANGE_ADDING_STATUS') return !state
    return state
}

export default isAddingReducer