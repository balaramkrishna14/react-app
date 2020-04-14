import React,{Component} from 'react';
import {Provider,inject,observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
class ProviderExample extends Component{
    
    render(){
        return(
            <Provider temp={'value'}>
                <B />
            </Provider>
            );
    }
}


@observer
class B extends Component{
    @observable name:string=''
    
    onChange  = (event) => {
        this.name = event.target.value;
    }
    
    render(){
        //const {temp} = this.props;
        //console.log('B',temp);
        return (
            <div>
            <input 
                style={{background : 'green' }} 
                value={this.name}
                onChange={this.onChange}
                />
                <C  name={this.name}/>
            </div>
            );
    }
}

type CProps ={
    name:string,
    temp?:string
}

@inject('temp')
class C extends Component<CProps>{
    render(){
        const {temp,name} = this.props;
        console.log('C temp',temp,name);
        return (<div>{name}</div>);
    }
}

export default ProviderExample;

