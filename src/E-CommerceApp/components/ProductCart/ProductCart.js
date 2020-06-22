import React from 'react';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
//import {FiShoppingCart} from 'react-icons/fi';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import CartList from '../CartList/CartList.js';
import CheckoutButton from '../CheckoutButton/CheckoutButton.js';
import SubTotal from '../SubTotal/SubTotal.js';

const ShowCart = styled.div`
    ${tw`p-2 h-full  flex flex-col bg-blue-900 justify-between`};
    color:white;
    position: fixed;
    right:0;
    width:350px;    
`;

const CartButton = styled.div`
    ${tw`p-1 text-white text-5xl bg-blue-900 flex justify-center items-center`};
    position: fixed;
`;

const CartButtonInCart = styled.div`
    ${tw`text-5xl flex justify-center items-center`};
    
`;

const DisplayingTotalCart = styled.div`
    ${tw`flex`};
`;

const HideCartButton = styled.div`
    ${tw`text-white flex justify-center items-center bg-blue-900`};
    position: fixed;
    width:50px;
    height:50px;
`;

const CartCount = styled.div`
    ${tw`text-sm pl-2 text-yellow-600`};
    position:absolute;
`;

const CardHeader =styled.div`
    ${tw`flex justify-center items-center mb-4 mt-2`};
`;

const CardTitle = styled.div`
    ${tw`text-xl ml-2 font-bold`};
`;

const PakapakanaDiv = styled.div`
    ${tw`flex justify-start h-min-screen`};
    position: fixed;
    width:400px;
    right:0;
    top:0;
`;

const AddTitle = styled.div`
    ${tw`flex justify-center items-center text-sm`};
`;

@inject('cartStore')
@observer
class ProductCart extends React.Component{
    
    @observable shouldDisplayCart
    
    constructor(){
        super();
        this.shouldDisplayCart = false;
    }
    
    showCart = () => {
        this.shouldDisplayCart = true;
    }
    
    hideCart = () => {
        this.shouldDisplayCart = false;
    }
    
    render(){
        const {cartStore} = this.props;
        return(
            <DisplayingTotalCart>
            {(this.shouldDisplayCart) ?
            <PakapakanaDiv>
                <HideCartButton onClick = {this.hideCart}>X</HideCartButton>
             <ShowCart>
                
                 <div>
                 <CardHeader>
                  <CartButtonInCart>
                   <FiShoppingCart/>
                   <CartCount>{cartStore.noOfProductsInCart}</CartCount>
                  </CartButtonInCart>
                  <CardTitle>Cart</CardTitle>
                 </CardHeader>
                 
                 {(cartStore.noOfProductsInCart > 0) ? 
                 <CartList 
                     getProductDetailsById = {cartStore.getProductDetailsById}
                     onRemoveCartItem = {cartStore.onRemoveCartItem}
                     cartProductList = {cartStore.cartProductList}
                 /> :
                 <AddTitle>Add some products in the cart</AddTitle>
                 }
                </div>
                
                <div>
                 <SubTotal totalCartAmount = {cartStore.totalCartAmount}/>
                 <CheckoutButton clearCart = {cartStore.clearCart} totalNumber = {cartStore.noOfProductsInCart}/>
                </div>
                
             </ShowCart>
            </PakapakanaDiv>
            :
                <CartButton onClick = {this.showCart}>
                    {/*<FiShoppingCart />*/}
                    <CartCount>{cartStore.noOfProductsInCart}</CartCount>
                </CartButton>
            
            }
            </DisplayingTotalCart>
            );
    }
}

export default ProductCart;