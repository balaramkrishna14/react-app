import React from 'react';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EachCartItem = styled.div`
    ${tw`py-2 text-sm flex justify-between`};
    border-top: 1px solid white;
`;

const EachCartItemImg = styled.img`
    ${tw`w-12`};
    height:70px;
`;

const CartCurrency = styled.div`
    ${tw`text-yellow-600`};
`;

const RemoveCartProduct = styled.div`
    ${tw`text-right text-black text-sm font-bold`};
`;

const AdhoOkateRasukondi = styled.div`
    ${tw`flex`};
`;

const Inkokati = styled.div`
    ${tw`mx-2`};
`;

@observer
class CartItem extends React.Component{
    
    onRemoveCartItem = (removedCartItemDetails) => {
        const {onRemoveCartItem} = this.props;
        onRemoveCartItem(removedCartItemDetails);
    }
    
    getProductDetailsById = () => {
        const {getProductDetailsById} = this.props;
        getProductDetailsById();
    }
    render(){
        const {eachCartItem} = this.props;
        console.log("cartItem",eachCartItem);
        return(
            
            <EachCartItem>
              <AdhoOkateRasukondi>
               <EachCartItemImg src={eachCartItem.imageURL}/>
               <Inkokati>
                <div>{eachCartItem.title}</div>
                <div>{eachCartItem.printStyle}</div>
                <div>Quantity: {eachCartItem.quantity}</div>
               </Inkokati>
              </AdhoOkateRasukondi>
              <div>
               <RemoveCartProduct onClick = {this.onRemoveCartItem}>X</RemoveCartProduct>
               <CartCurrency>
                <span>{eachCartItem.currencyFormat}</span>
                <span> {eachCartItem.price}</span>
               </CartCurrency>
              </div>
            </EachCartItem>
            );
    }
}

export default CartItem;