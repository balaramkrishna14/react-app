import {AuthStore} from "./Authstore/AuthStore";

import {AuthService} from '../services/AuthService/index.api.js';

const authService = new AuthService();
const authStore = new AuthStore(authService);


export {authStore};