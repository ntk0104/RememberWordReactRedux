import arrWordsReducer from './arrWordsReducer'
import filterStatusReducer from './filterStatusReducer'
import isAddingReducer from './isAddingReducer'

import {combineReducers} from 'redux'

const reducer = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer
})

export default reducer