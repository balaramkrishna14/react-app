import {observable,action} from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from "@ib/mobx-promise";

class AuthStore{
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    @observable authAPIService;
    
    constructor(userService){
        this.authAPIService = userService;
        this.init();
    }
    
    @action.bound
    init(){
       this.getUserSignInAPIStatus = API_INITIAL;  
       this.getUserSignInAPIError = null;
    }
    
    @action.bound
    userSignIn(requestObject,onSignInSuccess,onSignInFailure) {
    const userSignInAPIPromise = this.authAPIService.signInAPI(requestObject);
    return bindPromiseWithOnSuccess(userSignInAPIPromise)
      .to(this.setUserSignInAPIStatus, response => {
        this.setUserSignInAPIResponse(response);
        onSignInSuccess();
      })
      .catch(error => {
        this.setUserSignInAPIError(error);
        onSignInFailure();
      });
  }
    
    @action.bound
    setUserSignInAPIResponse(usersResponse){
        this.users = usersResponse.map((user) => user.name);
    }
    
    @action.bound
    setUserSignInAPIError(error){
        this.getUserSignInAPIError = error;
    }
    
    @action.bound
    setUserSignInAPIStatus(apiStatus){
        
        this.getUserSignInAPIStatus = apiStatus;
    }
    
    @action.bound
    userSignOut(){
        this.clearStore;
    }
    
    @action.bound
    clearStore() {
        this.init();
    }
}

export {AuthStore};