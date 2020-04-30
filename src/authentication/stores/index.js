import {observable,action} from 'mobx';
import { API_INITIAL } from '@ib/api-constants';

class AuthStore{
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError = null;
    @observable authAPIService;
    
    constructor(userService){
        this.userService = userService;
        this.init();
    }
    
    @action.bound
    init(){
       this.getUserSignInAPIStatus = "API_INITIAL";  
       this.getUserSignInAPIError = null;
       this.authAPIServicec;
    }
    
    @action.bound
    userSignIn(){
        
    }
    
    @action.bound
    setUserSignInAPIResponse(usersResponse){
        this.users = usersResponse.map((user) => user.name);
    }
    
    @action.bound
    setUserSignInAPIError(error){
        this.getUserApiError = error;
    }
    
    @action.bound
    setUserSignInAPIStatus(apiStatus){
        this.getUsersApiStatus = apiStatus;
    }
    
    @action.bound
    userSignOut(){
        
    }
    
    @action.bound
    clearStore() {
        this.init();
    }
}

export default AuthStore;



/*
import {observable,action} from 'mobx';
import { API_INITIAL } from '@ib/api-constants';

import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';

import UserService from '../../services/UserService/index.fixture.js';

class UserStore{
    @observable getUsersApiStatus
    @observable getUserApiError
    @observable users
    
    constructor(userService) {
        this.userService = userService;
        this.init();
    }
    
    @action.bound
    init() {
        this.getUsersApiStatus = API_INITIAL;
        this.getUserApiError = null;
        this.users = [];
    }
    
    @action.bound
    setUsersAPIResponse(usersResponse){
        this.users = usersResponse.map((user) => user.name);
    
    }
    
    @action.bound
    setUsersAPIError(error){
        this.getUserApiError = error;
        
    }
    
    @action.bound
    setUsersAPIStatus(apiStatus){
        this.getUsersApiStatus = apiStatus;
        
    }
    
    @action.bound
    getUsersAPI() {
              
        const usersPromise = this.userService.getUsersAPI();
        
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUsersAPIStatus, this.setUsersAPIResponse)
        .catch(this.setUsersAPIError);
        
        }
    
    @action.bound
    clearStore() {
        this.init();
    }
}

export default UserStore;

*/