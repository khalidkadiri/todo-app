import addReducer from './add_reducer';
import filterReducer from './filter_reducer';
import { combineReducers } from 'redux'

const reducer = combineReducers({
    items: addReducer,
    filter: filterReducer
})

export default reducer;