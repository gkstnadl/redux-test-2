// import uuid from "react-uuid";
import shortid from "shortid";
import { ADD_TODO, DELETE_TODO, SWITCH_TODO, SET_DETAIL_TODO } from "./actions";

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    body: "",
    isDone: false,
    detailTodo: null
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload, id: shortid.generate(), isDone: false }]
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };

    case SWITCH_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)
      };

    case SET_DETAIL_TODO:
      return {
        ...state,
        detailTodo: action.payload
      }

    default:
      return state;
  }
};

export default todos;
