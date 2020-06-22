import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
//import { toast,ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

const EachProductCart = styled.div`
    ${tw`bg-white m-3 flex flex-col justify-center items-center`};
`;

const ProductImage = styled.img`
    ${tw`w-48 h-48 mb-2`};
`;

const FreeShipping = styled.span`
    ${tw`text-xs w-20 h-6 bg-black text-white`};
    display:${props => props.isFreeShipping ? 'block': 'none'}
`;

const AddCartButton = styled.div`
    ${tw`mt-2 w-48 h-10 rounded bg-black text-white flex justify-center items-center`};
`;

const CurrencyFormat = styled.span`
    ${tw`text-xs mt-4`};
`;


class Product extends React.Component{
    
    /*notify = () => {
        toast.success("Product added to your cart!", {
            position: toast.POSITION.BOTTOM_CENTER,
            type: toast.TYPE.WARNING
        });
    }*/
    
    onClickAddToCart = () => {
        const {onClickAddToCart,eachProduct} = this.props;
        
        //this.notify();
        onClickAddToCart(eachProduct);
    }
    
    render(){
        const {eachProduct} = this.props;
        
        const eachInstallment = (eachProduct.price/eachProduct.installmentsCount).toFixed(2);
        return(
            <EachProductCart>
                <FreeShipping isFreeShipping= {eachProduct.isFreeShipping}>Free shipping</FreeShipping>
                <ProductImage src={eachProduct.imageURL}/>
                <div>{eachProduct.title}</div>
                <div>
                    <CurrencyFormat>{eachProduct.currencyFormat}</CurrencyFormat>
                    <span>{eachProduct.price}</span>
                </div>
                <div>or {eachProduct.installmentsCount} x {eachProduct.currencyFormat} {eachInstallment}</div>
                <AddCartButton onClick = {this.onClickAddToCart}>Add to cart</AddCartButton>
                {/*<ToastContainer />*/}
            </EachProductCart>    
            );
    }
}

export default Product;