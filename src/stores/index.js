import UserService from '../services/UserService/index.api';

import CounterStore from './CounterStore';
import UserStore from './UserStore';

const counterStore = new CounterStore();

const userService = new UserService();
const userStore = new UserStore(userService);

export default {userStore,counterStore};