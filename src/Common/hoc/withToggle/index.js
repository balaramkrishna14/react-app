import React from "react";
import {action,observable} from "mobx";
import {observer} from "mobx-react";

function WithToggle(WrapperComponent){
    @observer
    class RenderWithToggle extends React.Component{
    @observable toggleStatus = false;
    
    @action.bound
    onToggle(){
        if(this.toggleStatus === false){
            this.toggleStatus = true;
        }else{
            this.toggleStatus = false;
        }
    }
    
    render(){
        return <WrapperComponent status={this.toggleStatus} onToggle={this.onToggle} {...this.props}/>;
    }
  }    
  return RenderWithToggle;
}

export {WithToggle};