
import React from 'react';
import {observer} from 'mobx-react';
//import styled from '@emotion/styled';
//import tw from 'tailwind.macro';
import {observable,action} from 'mobx';

type TodoProps = {
    addTodo:Function
}

@observer
class AddTodo extends React.Component<TodoProps>{
    @observable todoTitle = '';
    
    @action.bound
    onAddTodo(){
        const {addTodo} = this.props;
        //alert(1);
        addTodo(this.todoTitle);
    }
    
    @action.bound
    onChangeInput(title){
        this.todoTitle=title.target.value;
    }
    
    render(){
        
        return(
            <form onSubmit={this.onAddTodo}>
                <input onChange={this.onChangeInput} placeholder="Be Conscious..." type="text"/>
            </form>
            );
    }
}

export default AddTodo;