import React from 'react';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DisplayingCheckoutButton = styled.div`
    ${tw`flex justify-center items-center my-3`};
`;

const CheckOutButton = styled.div`
    ${tw`bg-black flex justify-center items-center w-full h-10 rounded`};
`;
//background-color:${props => props.disabled ? "red" : "black"};

@observer
class CheckoutButton extends React.Component{
    
    clearCart = () => {
        const {clearCart} = this.props;
        clearCart();
    }
    
    
    render(){
        const {totalNumber} = this.props;
          
        return(
            <DisplayingCheckoutButton>
             <CheckOutButton disabled = {totalNumber.length ? true : false} onClick={this.clearCart}>CHECKOUT</CheckOutButton>
            </DisplayingCheckoutButton>
        );
    }
}

export default CheckoutButton;