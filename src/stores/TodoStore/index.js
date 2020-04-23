import {observable,action,computed} from 'mobx';
import TodoModel from '../Models/TodoModel/index.js';

class TodoStore{
    todoId = 0;
    @observable todos = []
    @observable selectedFilter =  'ALL' //ACTIVE,COMPLETED 
    
    @action.bound
    onAddTodo(title){
        this.todos.unshift(new TodoModel({id:this.todoId++,title,isCompleted:false}));
    }
    
    @action.bound
    onRemoveTodo(particularTodo){
        const findIndexId = this.todos.indexOf(particularTodo);
        this.todos.splice(findIndexId,1);
    }
    
    @action.bound
    onCompleteTodo(particularTodo){
        particularTodo.isCompleted = !particularTodo.isCompleted;
    }
    
    @action.bound
    onUpdateTodoTitle(particularTodo,updatedTodoText){
        particularTodo.title = updatedTodoText;
    }
    
    @computed get
    ActiveTodosCount(){
        if(!this.todos.isCompleted){
            return this.todos.filter((eachFilteredTodo) => !eachFilteredTodo.isCompleted).length;
        }    
    }
    
    @action.bound
    onChangeSelectedFilter(updatingSelectedFilter){
        this.selectedFilter = updatingSelectedFilter;
        this.getFilteredTodos;
    }
    
    @computed get
    FilteredTodos(){
        let updatedFilteredTodos;
        if(this.selectedFilter === "ACTIVE"){
            updatedFilteredTodos = this.todos.filter((eachFilteredTodo) => !eachFilteredTodo.isCompleted);
        }else if(this.selectedFilter === "COMPLETED"){
            updatedFilteredTodos = this.todos.filter((eachFilteredTodo) => eachFilteredTodo.isCompleted);
        }else if(this.selectedFilter === "ALL"){
            updatedFilteredTodos = this.todos;
        }
        return updatedFilteredTodos;
    }
    
    @action.bound
    onClearCompleted(){
        this.todos = this.todos.filter((eachCompletedTodo) => !eachCompletedTodo.isCompleted);
    }    
}

const todoStore = new TodoStore();

export default todoStore;