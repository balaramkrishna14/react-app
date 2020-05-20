import UserService from '../services/UserService/index.api';

import CounterStore from './CounterStore';
import UserStore from './UserStore';

import {authStore} from '../authentication/stores';
import {productStore,cartStore} from '../E-CommerceApp/stores';

const counterStore = new CounterStore();

const userService = new UserService();
const userStore = new UserStore(userService);

export default {userStore,counterStore,authStore,productStore,cartStore};