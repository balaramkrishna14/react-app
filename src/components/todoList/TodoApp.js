import React from 'react';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import todoStore from '../../stores/TodoStore';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import TodoFooter from './TodoFooter.js';

const Title = styled.div`
   ${tw`font-thin text-red-600 text-6xl m-12`};
`;

const MainDisplay = styled.div`
   ${tw`flex flex-col justify-center items-center`};
`;

@observer
class TodoApp extends React.Component{
    
    onAddTodo = (title) => {
        todoStore.onAddTodo(title);
    }
    
    onRemoveTodo = (particularTodo) => {
        todoStore.onRemoveTodo(particularTodo);
    }
    
    onCompleteTodo = (particularTodo) =>{
        todoStore.onCompleteTodo(particularTodo);
    }
    
    onUpdateTodoTitle = (particularTodo,updatedTodoText) => {
        todoStore.onUpdateTodoTitle(particularTodo,updatedTodoText);
    }
    
    getActiveTodosCount = () => {
        return todoStore.ActiveTodosCount;
        
    }
    
    onChangeSelectedFilter = (updatingSelectedFilter) => {
        todoStore.onChangeSelectedFilter(updatingSelectedFilter);
    }
    
    getFilteredTodos = () => {
        return todoStore.FilteredTodos;
    }
    
    onClearCompleted = () => {
        todoStore.onClearCompleted();
    }
    
    render(){
        return(
            <MainDisplay>
            <Title>ToDos</Title>
            <AddTodo onAddTodo={this.onAddTodo} />
            
            <TodoList todos={this.getFilteredTodos()}
                      onUpdateTodoTitle={this.onUpdateTodoTitle}
                      onCompleteTodo={this.onCompleteTodo}
                      onRemoveTodo={this.onRemoveTodo}
            />
             {(todoStore.todos.length > 0)?
            <TodoFooter onClearCompleted={this.onClearCompleted} 
                        activeTodosCount={this.getActiveTodosCount()}
                        onChangeSelectedFilter={this.onChangeSelectedFilter}
                        selectedFilter={this.selectedFilter}
            />:<span></span>} 
            </MainDisplay>
            );
    }
}

export default TodoApp;