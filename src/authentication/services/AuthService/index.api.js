import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/routeConstants/APIConstants.js';

class AuthService{
    api
    constructor() {
        this.api = create({
            baseURL : 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
        });
    }
    
    signInAPI(req){
        //console.log(networkCallWithApisauce)
        return networkCallWithApisauce(
            this.api,
            'v1/signin/',
            req,
            apiMethods.get
        );
    }
}

export {AuthService};