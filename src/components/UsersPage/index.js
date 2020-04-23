import React, {Component} from 'react';
import {observer,inject} from 'mobx-react';

import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView';

//import stores from '../../stores';
//const userStore = stores.userStore;

@inject('userStore')
@observer
class UsersPage extends Component{
    
    componentDidMount(){
        this.doNetworkCalls();
    }
    
    doNetworkCalls = () => {
        this.props.userStore.getUsersAPI();
    }
    
    renderUsersList = () => {
        const {users} = this.props.userStore;
        if(users.length === 0){
            return <NoDataView />;
        }
        return users.map((userName,index) => <div key = {index} >{userName}</div>);
    }
    
    render(){
        const { getUsersApiStatus,getUserApiError} = this.props.userStore;
        
        return (
            <LoadingWrapperWithFailure 
                apiStatus = {getUsersApiStatus}
                apiError = {getUserApiError}
                onRetryClick = {this.doNetworkCalls}
                renderSuccessUI = {this.renderUsersList}
            />
            );
    }
}

export default UsersPage;