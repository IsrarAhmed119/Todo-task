import { ADD_TODO, DELETE_TODO, READY_TODO,UPDATE_TODO} from "../actions/actionTypes";

const initialState = {
  Todos: []
};

const todoReducer = (state = initialState, action)=> {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state, 
        Todos: [...state.Todos,
          {
          id: id,
          title: content,
          completed: false
          }
        ]
      };
    }
      
    case DELETE_TODO: {
      console.log('DELETE_TODO_Red--->>',action.payload)
      return {
        ...state,
        Todos : state.Todos.filter((todo) => todo.id !== action.payload)
      }  
    }
    
    case READY_TODO: {
      console.log('READY_TODO_Red--->>',action.payload)

      return {
        ...state,
        Todos: state.Todos.map(todo => todo.id === action.payload ?
            // transform the one with a matching id
            { ...todo, completed: true } : 
            // otherwise return original todo
            todo 
        ) 
      };
    }
    case UPDATE_TODO: {
      console.log('UPDATE_TODO_Redu--->>',action.payload)
      return {
        ...state,
        Todos: state.Todos.map(todo => todo.id === action.payload.todo.id ?
            // transform the one with a matching id
          { ...todo, title: action.payload.text } : 
            // otherwise return original todo
            todo 
        ) 
      };
    }
    default:
      return state;
  }
}

export default todoReducer;