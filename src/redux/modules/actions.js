export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SWITCH_TODO = "SWITCH_TODO";
export const SET_DETAIL_TODO = "SET_DETAIL_TODO";

export const addTodo = (title, body) => ({
    type: ADD_TODO,
    payload: { title, body }
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: id
});

export const switchTodo = id => ({
    type: SWITCH_TODO,
    payload: id
});

export const setDetailTodo = todo => ({
    type: SET_DETAIL_TODO,
    payload: todo
})


