import React from 'react';
//import {reaction} from 'mobx';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import CounterStore from '../../stores/CounterStore/CounterStore.js';

const CounterAppDisplay=styled.div`
    ${tw`text-center m-auto`}
`;

const H1=styled.h1`
    ${tw`text-5xl font-bold`}
`;

const Button=styled.button`
    ${tw`h-16 w-16 bg-blue-700 text-white rounded font-bold text-3xl`}
`;

const Input=styled.input`
    ${tw`text-center h-16 w-40 border border-red-600`}
`;

const counterStore =  new CounterStore();
@observer class CounterApp extends React.Component{
    
    handleIncrement = () => {
       counterStore.onIncrementCount(); 
    }
    
    handleDecrement = () => {
        counterStore.onDecrementCount();
    }
    
    onChangeCounter = (event) => {
        const {onChangeCount} = counterStore;
        onChangeCount(event.target.value);
    }
    
    render(){
        
        return(
        <CounterAppDisplay>
            <H1>Counter</H1>
            <Button onClick = {this.handleIncrement}>+</Button>
            <Input value={counterStore.count} onChange = {this.onChangeCounter}/>
            <Button onClick = {this.handleDecrement}>-</Button>
        </CounterAppDisplay>
        );
    }
}

export default CounterApp;