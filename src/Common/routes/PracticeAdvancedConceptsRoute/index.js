import React from 'react';
import {observer} from 'mobx-react';
import {ViewEditToggle} from '../../components/ViewEditToggle';
import {CollapseExpand} from '../../components/CollapseExpand';
import {DeviceTypeText} from '../../components/DeviceTypeText';
//import  MouseCoordinates from '../components/MouseCoordinates';
import {withScreenSizeDetectors} from '../../hoc/withScreenSizeDetectors';

import {WithToggle} from '../../hoc/withToggle';
const ViewEditToggleComponent = WithToggle(ViewEditToggle);
const CollapseExpandComponent = WithToggle(CollapseExpand);
const DeviceTypeTextComponent = withScreenSizeDetectors(DeviceTypeText);
@observer
class PracticeAdvancedConceptsRoute extends React.Component{
    
    render(){
        return(
            <div>
            <h1>HOC's Usage</h1>
            
            <ViewEditToggleComponent/>
            <CollapseExpandComponent/>
            
            
            
            <h1>Render Props Usage</h1>
            
            
            </div>
            );
    }    
}
//<DeviceTypeTextComponent/>
export {PracticeAdvancedConceptsRoute};