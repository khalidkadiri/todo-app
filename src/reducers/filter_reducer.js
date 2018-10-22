import {filterType} from '../actions/';

const filterReducer = (state=filterType.all,action) => {
    if(action.type === "SET_FILTER") {
        return action.filter
    }
    return state;
}

export default filterReducer;