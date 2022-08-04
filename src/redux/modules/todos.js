// src/redux/modules/counter.js
// Action Value

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
const DONE_TODO = "DONE_TODO"

// Action Creator

export const addTodo = (todo) => {
  return { type: ADD_TODO, todo }
}

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, id }
}

export const doneTodo = (id) => {
  return { type: DONE_TODO, id }
}

// Initial State

const initialState = [
  {
    id: 1,
    title: '리액트 강의보기',
    content: '챕터 1부터 챕터 12까지 학습',
    isDone: false,
  },
  {
    id: 2,
    title: '점심 먹기',
    content: '점심 뭐먹지?',
    isDone: false,
  }
];

// Reducer

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case DELETE_TODO:
      const deleteTodo = state.filter((todo) =>
        todo.id !== action.id
      )
      return deleteTodo
    case DONE_TODO:
      const doneTodo = state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      )
      return doneTodo;
    default:
      return state;
  }
}

// export default reducer

export default todos;