import React from 'react';
import PropTypes from 'prop-types'
import '../components/components.css'

const Todo = ({onClick, BackClick, title,description,assignee,critically,date}) => (
   <div className="row itemBorder">
        
        <p className="listItem">title: {title}</p> 
        <p className="listItem">description: {description}</p>
        <p className="listItem">assignee: {assignee}</p>
        <p className="listItem">critically:{critically}</p>
        <p className="listItem">date:{date}</p>
        <button  className="btn btn-danger stepButton" onClick={BackClick} >Back</button>
        <button  className="btn btn-success stepButton"  onClick={onClick}>Next</button>
    </div>
)

Todo.propTypes = {
  //onClick: PropTypes.func.isRequired,  
};

export default Todo;