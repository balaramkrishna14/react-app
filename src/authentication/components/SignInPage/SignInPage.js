import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';

import {ACCESS_TOKEN} from '../../utils/StorageUtils.js';
import  {SignPage,SigninTitle,SignInFrom,FieldsInput,UserInput,SignInButton,WarningDiv} from '../../styledComponents/index.js';

@observer
class SignInPage extends React.Component{
    @observable username
    @observable password
    @observable isSubmitted
    constructor(){
        super();
        this.username = '';
        this.password = '';
        this.isSubmitted = false;
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
        this.onClickSignIn();
    }
    
    @action.bound
    WarningDisplay(){
        if(this.username.length === 0 && this.isSubmitted){
            return <WarningDiv>Please enter username</WarningDiv>;
        } else if(this.password.length === 0 && this.isSubmitted){
            return <WarningDiv>Please enter password</WarningDiv>;
        }else{
            return null;
        }
    }
    
    @action.bound
    onClickSignIn(){
        console.log(ACCESS_TOKEN,'signin page');
       if(ACCESS_TOKEN.length > 0 && this.username.length > 0 && this.password.length > 0){
           this.props.history.replace({pathname: '/Products-Page' });
          
       } else {
          this.props.history.push({pathname: '/' }); 
            
       }
    }
    
    render(){
        return(
            <SignPage>
                <SignInFrom>
                    <FieldsInput>
                        <SigninTitle>Sign in</SigninTitle>                
                            <UserInput value={this.username}
                                onChange={this.onChangeUsername} 
                                placeholder="Username" 
                                type="text"
                            />
                            <UserInput value={this.password} 
                                onChange={this.onChangePassword} 
                                placeholder="Password" 
                                type="password"
                            />
                        </FieldsInput>    
                    <SignInButton onClick={this.onHandleButton}>Sign in</SignInButton>
                    {this.WarningDisplay()}
                </SignInFrom>
            </SignPage>
            );
    }
}
export default withRouter(SignInPage);