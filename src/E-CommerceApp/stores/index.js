import ProductStore from './ProductStore/ProductStore.js';
import CartStore from './CartStore/CartStore.js';
import ProductService from '../services/ProductService/index.api.js';


const productService = new ProductService();
const productStore = new ProductStore(productService);
const cartStore = new CartStore(productStore);

export default {productStore,cartStore};

