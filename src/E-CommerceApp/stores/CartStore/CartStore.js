import {observable,action,computed} from 'mobx';

import CartItemModel from '../Models/CartItemModel/CartItemModel.js';

class CartStore{
    
    @observable cartProductList
    @observable productStore
    
    constructor(productStore){
       this.productStore = productStore;
       this.cartProductList = [];
    }
    
    @computed
    get totalCartAmount(){
        let totalPrice = 0;
         this.cartProductList.map((eachCartItem) =>
            totalPrice += eachCartItem.price * eachCartItem.quantity
        );
        return totalPrice.toFixed(2);
    }
    
    @computed
    get noOfProductsInCart(){
        let totalCartProducts = 0;
        this.cartProductList.map((eachCartItem) => totalCartProducts += eachCartItem.quantity); 
        return totalCartProducts;
    }
    
    @action.bound
    getProductDetailsById(){
        
    }
    
    @action.bound
    onClickAddToCart(eachProductDetail){
        let productsDetails = new CartItemModel(eachProductDetail);
        
       const findValue = this.cartProductList.find((eachCartItem) => 
                        eachCartItem.productId === productsDetails.productId);
       
       findValue? findValue.incrementQuantity() : this.cartProductList.push(productsDetails);
    }
    
    @action.bound
    onRemoveCartItem(removedCartItemDetails){
        const findIndex = this.cartProductList.indexOf(removedCartItemDetails);
        this.cartProductList.splice(findIndex,1);
    }
    
    @action.bound
    clearCart(){
        this.cartProductList = [];
    }
    
}

export default CartStore;