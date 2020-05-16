import React from 'react';
import {observable,action} from 'mobx';
import {observer,inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {SignInPage} from "../../components/SignInPage/SignInPage";
import {E_COMMERCE_PRODUCTS_PATH} from '../../constants/routeConstants/routeConstants';

@inject('authStore')
@observer
class SignInRoute extends React.Component{
    @observable username
    @observable password
    @observable isSubmitted
    @observable warning
    constructor(){
        super();
        this.username = '';
        this.password = '';
        this.warning = '';
        this.isSubmitted = false;
    }
    
    @action.bound
    setUser(){
        const {userSignIn} = this.props.authStore;
        userSignIn({},this.onSignInSuccess,this.onSignInFailure);
    }
    
    @action.bound
    onSignInSuccess(){
        const {history} = this.props;
        history.replace(E_COMMERCE_PRODUCTS_PATH);
    }
    
    @action.bound
    onSignInFailure(){
        //this.errorMessage = "network error";
        alert("network error");
    }
    
    @action.bound
    onChangeUsername(event){
        this.username = event.target.value;
    }
    
    @action.bound
    onChangePassword(event){
        this.password = event.target.value;
    }
    
    @action.bound
    onHandleButton(){
        this.isSubmitted = true;
        this.WarningDisplay();
        if(this.username !== '' && this.password !== ''){
            this.setUser();
        }    
    }
    
    @action.bound
    WarningDisplay(){
        if(this.username.length === 0){
            this.warning = "Please enter username";
        } else if(this.password.length === 0){
            this.warning = "Please enter password";
        }else{
            this.warning = null;
        }
    }
    
    render(){
            const signInRoutePageProps = {
                    username:this.username,
                    password:this.password,
                    onChangeUsername:this.onChangeUsername,
                    onChangePassword:this.onChangePassword,
                    onHandleButton:this.onHandleButton,
                    warning:this.warning
            };
        return(
            <SignInPage {...signInRoutePageProps}/>
        );
    }
}

export default withRouter(SignInRoute);