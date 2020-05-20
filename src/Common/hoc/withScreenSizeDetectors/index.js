import React from "react";
import {observable,action} from 'mobx';
import {observer} from "mobx-react";

function withScreenSizeDetectors(WrappedComponent){
    @observer
    class Screen extends React.Component{
    @observable deviceType = ""
    
    @action.bound
    isMobile = () => {
      this.deviceType = "Mobile";
    }
    
    @action.bound
    isTablet = () => {
      this.deviceType = "Tablet";
    }
    
    @action.bound
    isDesktop = () => {
        this.deviceType = "Desktop";
    }
    
    render(){
        return(
            <WrappedComponent deviceType={this.deviceType} {...this.props} isMobile={this.isMobile} isTablet={this.isTablet} isDesktop={this.isDesktop}/>
            );
    }

}
return Screen;
}
    
export {withScreenSizeDetectors};