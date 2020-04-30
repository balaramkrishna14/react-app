import {observable} from 'mobx';

class CartItemModel{
    @observable quantity
    
    constructor(eachProductDetail){
        const {
            productId,
            availableSizes,
            currencyFormat,
            currencyId,
            description,
            installmentsCount,
            isFreeShipping,
            price,
            printStyle,
            title,
            imageURL
        } = eachProductDetail;
        
        this.productId = productId;
        this.availableSizes = availableSizes;
        this.currencyFormat = currencyFormat;
        this.currencyId = currencyId;
        this.description = description; 
        this.installmentsCount = installmentsCount;
        this.isFreeShipping = isFreeShipping;
        this.price = price;
        this.printStyle = printStyle;
        this.title = title;
        this.imageURL = imageURL;
        this.cartItemId = Math.random();
        this.quantity  = 1;
    }
    
    incrementQuantity(){
        this.quantity++;
    }
}

export default CartItemModel;