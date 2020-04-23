import React from 'react';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {observable,action} from 'mobx';

const InputText = styled.input`
    ${tw`h-12 rounded-none`};
    width:600px;
`;

@observer
class AddTodo extends React.Component{
    @observable todoTitle = '';
    
    @action.bound
    onAddTodo(event){
        event.preventDefault();
        const {onAddTodo} = this.props;
        if(this.todoTitle === ""){
          alert("Plz Enter Your Todo");  
        }else{
        onAddTodo(this.todoTitle);
        this.todoTitle = "";
        }
    }
    
    @action.bound
    onChangeInput(title){
        this.todoTitle=title.target.value;
    }
    
    render(){
        return(
            <form onSubmit={this.onAddTodo}>
                <InputText value={this.todoTitle} onChange={this.onChangeInput} placeholder="Be Conscious..." type="text"/>
            </form>
            );
    }
}

export default AddTodo;