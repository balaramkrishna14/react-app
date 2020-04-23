import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {observer} from 'mobx-react';

const EachTodoInList = styled.div`
    ${tw`h-12 mt-1 bg-white flex justify-around items-center`}
    width:600px;
`;

const InputCheckbox = styled.input`
    ${tw`w-10 h-10 rounded-full`}
`;

const InputText = styled.input`
    text-decoration: ${props => props.disabled ? 'line-through' : 'none'};
    width:500px;
`;

@observer
class Todo extends React.Component{
    //props-->todo,onCompleteTodo(),onRemoveTodo(),onUpdateTodoTitle()
    onCompleteTodo = () => {
      const {onCompleteTodo,eachTodo} = this.props;
        onCompleteTodo(eachTodo);
    }
    
    onRemoveTodo = () => {
        const {onRemoveTodo,eachTodo} = this.props;
        onRemoveTodo(eachTodo);
    }
    
    onUpdateTodoTitle = (event) => {
       const {onUpdateTodoTitle,eachTodo} = this.props;
       onUpdateTodoTitle(eachTodo,event.target.value);
    }
    
    render(){
        const {eachTodo} = this.props;
        return(
            <EachTodoInList>
            <InputCheckbox type='checkbox' onChange={this.onCompleteTodo} checked = {eachTodo.isCompleted}/>
            <InputText onChange={this.onUpdateTodoTitle} 
                       value={eachTodo.title} 
                       disabled={eachTodo.isCompleted}
            />
            <button onClick={this.onRemoveTodo} >X</button>
            </EachTodoInList>
            );
    }
    
}

export default Todo;