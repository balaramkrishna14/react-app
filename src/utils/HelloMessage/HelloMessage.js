import React,{Component} from 'react';

class HelloMessage extends Component{
    render(){
    return <span>{this.props.message}</span>;
    }
}

export {HelloMessage};
