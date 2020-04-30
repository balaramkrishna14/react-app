import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {observer} from 'mobx-react';

import CartItem from '../CartItem/CartItem.js';

const DisplayCartList = styled.div`
    ${tw`overflow-y-auto`};
    height:500px;
`;

@observer
class CartList extends React.Component{

    onRemoveCartItem = (removedCartItemDetails) => {
        const {onRemoveCartItem} = this.props;
        onRemoveCartItem(removedCartItemDetails);
    }
    
    getProductDetailsById = () => {
        const {getProductDetailsById} = this.props;
        getProductDetailsById();
    }
    
    renderingCartList = () => {
        const {cartProductList,onRemoveCartItem,getProductDetailsById} = this.props;
        return cartProductList.map((eachCartItem) => 
        <CartItem key = {eachCartItem.productId}
                  eachCartItem = {eachCartItem}
                  onRemoveCartItem = {onRemoveCartItem}
                  getProductDetailsById = {getProductDetailsById}
        />);
    }
    
    render(){
        return(
            
            <DisplayCartList>
            {this.renderingCartList()}
            </DisplayCartList>
            
            );
    }
}

export default CartList;