import React from 'react';
//import {observer} from 'mobx-react';
//import withToggle from '../../hoc/withToggle'

//@observer
class CollapseExpand extends React.Component{
    //props --> list,listTitle
    render(){
      return(
          <div>
            <h2>CollapseExpand</h2>
            <div>Sample Shopping List: </div>
            <button>Expand</button>
          </div>
          );  
    }
}

export {CollapseExpand};