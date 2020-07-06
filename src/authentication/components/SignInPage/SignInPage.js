import React from 'react'
import { observer } from 'mobx-react'

//import {ACCESS_TOKEN} from '../../utils/StorageUtils.js';
import {
   SignPage,
   SigninTitle,
   SignInFrom,
   FieldsInput,
   UserInput,
   SignInButton,
   WarningDiv
} from '../../styledComponents/index.js'

@observer
class SigninPage extends React.Component {
   usernameRef = React.createRef()

   componentDidMount() {
      //document.getElementById("userName").focus();
      this.usernameRef.current.focus()
   }
   /* @action.bound
    onClickSignIn(){
       //console.log(ACCESS_TOKEN,'signin page');
       if(ACCESS_TOKEN.length > 0 && this.username.length > 0 && this.password.length > 0){
           this.props.history.replace({pathname: '/Products-Page' });
       } else {
          this.props.history.push({pathname: '/' });
       }
    }*/

   render() {
      const {
         username,
         password,
         onChangeUsername,
         onChangePassword,
         onHandleButton,
         warning
      } = this.props

      //alert(WarningDisplay());
      return (
         <SignPage>
            <SignInFrom>
               <FieldsInput>
                  <SigninTitle>Sign in</SigninTitle>
                  <UserInput
                     value={username}
                     ref={this.usernameRef}
                     onChange={onChangeUsername}
                     placeholder='Username'
                     type='text'
                  />
                  <UserInput
                     value={password}
                     ref={this.passwordRef}
                     onChange={onChangePassword}
                     placeholder='Password'
                     type='password'
                  />
               </FieldsInput>
               <SignInButton onClick={onHandleButton}>Sign in</SignInButton>
               <WarningDiv>{warning}</WarningDiv>
            </SignInFrom>
         </SignPage>
      )
   }
}

export { SigninPage }
