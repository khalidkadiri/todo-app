let nextId = 0;
export const addTodo = (text) => {
    return {
        type:"ADD_TODO",
        payload:text,
        id: nextId++
    }
}

export const deleteTodo = (id) => {
    return {
        type:"DELETE_TODO",
        id
    }
}

export const updateTodo = (id) => {
    return {
        type: "UPDATE_TODO",
        id
    }
}

export const toggleTodo = (id) => {
    return {
        type:"TOGGLE_TODO",
        id
    }
}

export const updateTodoText = (id,text) => {
    return {
        type:"UPDATE_TODO_TEXT",
        id,
        text
    }
}

export const setFilter = (filter) => {
    return {
        type: "SET_FILTER",
        filter
    }
}

export const filterType = {
    all : 'all',
    active: 'active',
    completed: 'completed'
}