let nextTodoId = 0;

export const addTodo = (title,description,assignee,critically,date,new1,inprogress,completed) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    title,
    description,
    assignee,
    critically,
    date,
    new:new1,
    inprogress,
    completed
  }
}

export const setVisibilityFilter = filter => {
  return{
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return{
    type: 'TOOGLE_TODO',
    id
  }
}

export const toggleToProgress = id => {
  return{
    type: 'TOOGLE_TOPROGRESS',
    id
  }
}

export const backToTodo = id => {
  return{
    type: 'BACK_TODO',
    id
  }
}

export const backToProgress = id => {
  return{
    type: 'BACK_TOPROGRESS',
    id
  }
}

  // json-server --watch db.json --port 3004
// const URL = `http://localhost:3004`

// export function getMessages() {
    
//     const request = fetch(`${URL}/todos`, { method: 'GET'})
   
//                    .then(response => response.json());
    
//     return {
//                     type:'GET_MESSAGES',
//                     payload: request
//     }
    // return {
    //   type: 'GET_MESSAGES',
    //   id: nextTodoId++,
    //   title:request.title,
    //   description:request.description,
    //   assignee:request.assignee,
    //   critically:request.critically,
    //   date:request.date,
    //   new: request.new,
    //   inprogress: request.inprogress,
    //   completed: request.completed
    // }
//} 




