/*global expect,jest*/
import React from "react";
import {render} from "@testing-library/react";
import {SignInPage}  from './SignInPage.js';

describe("SignInPage", () => {
    it("should render typed username", () => {
        const username = "Balarama Krishna Yalamanchili";
        const obj = render(
            <SignInPage username = {username} onChangeUsername={() => {}}/>
        );
        
        const usernameField = obj.getByPlaceholderText("Username");
        expect(usernameField.value).toBe(username);
    });
    
    it("should render typed password", () => {
       const password = "kittu";
       const {getByPlaceholderText} = render(
            <SignInPage password = {password} onChangePassword={() => {}}/>
           );
        
       const passwordField = getByPlaceholderText("Password");
       expect(passwordField.value).toBe(password);
    });
    
    it("should render given error message", () => {
       const {getByText} = render(
            <SignInPage warning = "Invalid username"/>
           );
        getByText(/Invalid username/i);
    });
});