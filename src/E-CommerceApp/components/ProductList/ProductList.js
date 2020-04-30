import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import Product from '../Product/Product.js';

const ProductListDisplay = styled.div`
    ${tw`flex flex-wrap mt-4`};
`;

class ProductList extends React.Component{
    //props-->products[],onClickAddToCart()
    
    
    onClickAddToCart = (eachProduct) => {
        const {onClickAddToCart} = this.props;
        //console.log("pageList",eachProduct);
        onClickAddToCart(eachProduct);
    }
    
    renderingProducts = () => {
        const {products} = this.props;
        //console.log(products);
        return products.map((eachProduct) =>
        <Product
            onClickAddToCart = {this.onClickAddToCart}
            key = {eachProduct.productId}    
            eachProduct = {eachProduct}
        />
        );
    }
    
    render(){
        return(
            <ProductListDisplay>
                {this.renderingProducts()}
            </ProductListDisplay>
            );
    }
}

export default ProductList;