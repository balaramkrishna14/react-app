/*global expect,jest*/
import Cookie from 'js-cookie';

import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
} from "@ib/api-constants";

import {AuthService} from "../../services/AuthService/index.api";
import {AuthStore} from "./AuthStore";
import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json';

        let onSuccess = jest.fn();
        let onFailure = jest.fn();
        let mockSetCookie = jest.fn();
        let mockRemoveCookie = jest.fn();
        
        Cookie.set = mockSetCookie;
        Cookie.remove = mockRemoveCookie;
describe("AuthStore Tests", () => {
    let authAPI;
    let authStore;
    
    beforeEach( () => {
        authAPI = new AuthService();
        authStore = new AuthStore(authAPI);
    });
    
    it("should test initialising auth store", () => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });
    
    it('should test userSignInAPI data fetching state',()=>{
       
        const mockLoadingPromise = new Promise(function(resolve,reject){});
        const mockSignAPI = jest.fn();
        mockSignAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignAPI;
        
        authStore.userSignIn();
        
        expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
    });
    
    it("should test userSignInAPI success state",async () => {
       
        const requestObject = {
            username: "Balarama Krishna Yalamanchili",
            password:"kittu"
        };
        
        const mockSuccessPromise = new Promise(function(resolve,reject){
            resolve(getUserSignInResponse);
        });
        
        const mockSignAPI = jest.fn();
        mockSignAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignAPI;
        
        await authStore.userSignIn(requestObject, onSuccess, onFailure);
        expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
        //expect(mockSetCookie).toBeCalled();
        expect(onSuccess).toBeCalled();
    });
    
    it("should test userSignInAPI failure state", async () => {
        const requestObject ={
            username: 'Balarama Krishna Yalamanchili',
            password: 'kittu'
        };
        
        const mockFailurePromise = new Promise( function(resolve,reject){
            reject(new Error("error"));
        });
        
        const mockSignAPI = jest.fn();
        mockSignAPI.mockReturnValue(mockFailurePromise);
        authAPI.signInAPI = mockSignAPI;
        
        authStore = new AuthStore(authAPI);
        await authStore.userSignIn(requestObject, onSuccess, onFailure);
        
        expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
        expect(authStore.getUserSignInAPIError).toBe("error");
        expect(onFailure).toBeCalled();
    });
    
    it("should test user sign-out", () => {
        authStore.userSignOut();
        //expect(mockRemoveCookie).toBeCalled();
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });
});