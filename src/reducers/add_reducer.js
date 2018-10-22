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
            return state.map((item,index) => (index === action.id) ? { ...item, completed: !item.completed } : item)
        case 'UPDATE_TODO':
            return state.map((item,index) => (index === action.id) ? { ...item, update: !item.update } : item)
        case 'DELETE_TODO':
            return state.filter((item,index) => index !== action.id)
        case 'UPDATE_TODO_TEXT':
            return state.map((item,index) => (index === action.id) ? { ...item, text: action.text } : item)
        default:
            return state;
    }
}

export default addReducer;