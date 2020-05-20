import React from 'react';
import {observer} from "mobx-react";

@observer
class DeviceTypeText extends React.Component{
    
    render(){
        if(window.innerWidth < 576){
            this.props.isMobile();
        } else if(window.innerWidth >=576 && window.innerWidth < 992){
            this.props.isTablet();
        }else{
            this.props.isDesktop();
        }
        return(
            <div>
                <h2>DeviceTypeText</h2>
                <div>Device Type: {this.props.deviceType}</div>
            </div>
            );    
    }
}

export {DeviceTypeText};
