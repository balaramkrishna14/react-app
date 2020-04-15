import React from 'react';
import {observer} from 'mobx-react';
//import styled from '@emotion/styled';
//import tw from 'tailwind.macro';
import {observable,action} from 'mobx';

import AddTodo from './AddTodo';

@observer
class TodoApp extends React.Component{
    todoId=0
    @observable
    state = {
        todos : [],
        selectedFilter : 'ALL' //ACTIVE,COMPLETED
    }
    
    @action.bound
    addTodo(title){
        //const {todos} = this.state;
        
        //todos.push({id:++this.todoId,title,isCompleted:false});
        console.log(1);
    }
    
    @action.bound
    onRemoveTodo(){
        
    }
    
    @action.bound
    onCompleteTodo(){
        
    }
    
    @action.bound
    onUpdateTodoTitle(){
        
    }
    
    @action.bound
    onChangeSelectedFilter(){
        
    }
    
    @action.bound
    onClearCompleted(){
        
    }
    
    @action.bound
    getActiveTodoCount(){
        
    }
    
    @action.bound
    getFilteredTodos(){
        
    }
    
    render(){
        //console.log(this);
        return(
            <AddTodo addTodo={this.addTodo} />
            );
    }
}

export default TodoApp;