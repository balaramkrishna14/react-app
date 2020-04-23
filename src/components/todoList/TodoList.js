import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component{
    //props-->todos[],onCompleteTodo(),onRemoveTodo(),onUpdateTodoTitle()
    renderedTodoList = () => {
        
        const {onUpdateTodoTitle,onCompleteTodo,onRemoveTodo,todos} = this.props;
        return todos.map((eachTodo) => 
        <Todo key={eachTodo.id} 
             eachTodo = {eachTodo}
             onUpdateTodoTitle = {onUpdateTodoTitle}
             onCompleteTodo = {onCompleteTodo}
             onRemoveTodo = {onRemoveTodo}
        /> 
        );
    }
    
    render(){
        return(this.renderedTodoList());
    }
}

export default TodoList;