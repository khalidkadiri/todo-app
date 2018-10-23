const addReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.payload,
                    id: action.id,
                    completed: false,
                    update: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(item => ( item.id === action.id) ? { ...item, completed: !item.completed } : item)
        case 'UPDATE_TODO':
            return state.map(item => ( item.id === action.id) ? { ...item, update: !item.update } : item)
        case 'DELETE_TODO':
            return state.filter(item => item.id !== action.id)
        case 'UPDATE_TODO_TEXT':
            return state.map(item => ( item.id === action.id) ? { ...item, text: action.text } : item)
        default:
            return state;
    }
}

export default addReducer;

export const getVisibleItems = (state, filter) => {
    switch (filter) {
        case 'all':
            return state;
        case 'active':
            return state.filter(item => !item.completed);
        case 'completed':
            return state.filter(item => item.completed);
        default:
            return state
    }
}

