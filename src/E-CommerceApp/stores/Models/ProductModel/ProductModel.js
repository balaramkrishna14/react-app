class ProductModel{
    
    constructor(eachProductDetail){
        const {
            id,
            availableSizes,
            currencyFormat,
            currencyId,
            description,
            installments,
            isFreeShipping,
            price,
            style,
            title,
            image
        } = eachProductDetail;
        
        this.productId = id;
        this.availableSizes = availableSizes;
        this.currencyFormat = currencyFormat;
        this.currencyId = currencyId;
        this.description = description; 
        this.installmentsCount = installments;
        this.isFreeShipping = isFreeShipping;
        this.price = price;
        this.printStyle = style;
        this.title = title;
        this.imageURL = image;
    }
}

export default ProductModel;