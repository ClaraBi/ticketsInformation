const todos = (state = [], action) => {
  switch (action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id, 
          title: action.title,
          description: action.description,
          critically: action.critically,
          assignee: action.assignee,
          date: action.date,
          new: action.new,
          inprogress: action.inprogress,
          completed: action.completed
        }
      ]
    case 'TOOGLE_TODO':
      return state.map(todo => (todo.id === action.id)
        ? {...todo, inprogress: true, new: false, completed: false}
        : todo
      )
    case 'TOOGLE_TOPROGRESS':
      return state.map(todo => (todo.id === action.id)
        ? {...todo, inprogress: false, new: false, completed: true}
        : todo
      )

      case 'BACK_TOPROGRESS':
      return state.map(todo => (todo.id === action.id)
        ? {...todo, inprogress: true, new: false, completed: false}
        : todo
      )

      case 'BACK_TODO':
      return state.map(todo => (todo.id === action.id)
        ? {...todo, inprogress: false, new: true, completed: false}
        : todo
      )


    // case 'GET_MESSAGES':
    //   return [
    //       ...state,
    //       {
    //           id: action.id, 
    //           title: action.title,
    //           description: action.description,
    //           critically: action.critically,
    //           assignee: action.assignee,
    //           date: action.date,
    //           new: action.new,
    //           inprogress: action.inprogress,
    //           completed: action.inprogress
    //       }
    //   ]

    default:
      return state
  }
}

export default todos;