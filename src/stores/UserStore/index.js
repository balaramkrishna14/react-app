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
        //this.getUsersApiStatus = API_SUCCESS;
        //console.log(this.users)
    }
    
    @action.bound
    setUsersAPIError(error){
        this.getUserApiError = error;
        //this.getUsersApiStatus = API_FAILED;
       // console.log("error",error);
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

//const userService = new UserService();
//const userStore = new UserStore(userService);
export default UserStore;