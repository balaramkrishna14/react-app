import React from 'react';
import {observable} from "mobx";
class MouseCoordinates extends React.component{
    @observable x;
    @observable y;
    
    constructor(){
        this.x = "";
        this.y = "";
    }
    
    render(){
        return(
            <div>MouseCoordinates</div>
            );
    }
}

export {MouseCoordinates};