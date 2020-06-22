import React from 'react';
import {observer,inject} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import SizeFilter from '../SizeFilter/SizeFilter.js';
import ProductList from '../ProductList/ProductList.js';
import Header from '../Header/Header.js';
import ProductCart from '../ProductCart/ProductCart.js';

import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure';
import NoDataView from '../../../components/common/NoDataView';
import {ACCESS_TOKEN} from '../../utils/StorageUtils.js';

import {Pagination} from '../Pagination/Pagination.js';

const Screen = styled.div`
    ${tw`mb-12 bg-white flex justify-start items-start`};
`;

const SizesDisplaySection = styled.div`
    ${tw`ml-8`};
    width:25%;
`;

const SignOutButton = styled.button`
    ${tw`my-5 h-8 w-16 rounded text-sm`};
    border:1px solid black;
`;

const ProductsDisplayingSection = styled.div`
    flex-grow:1;
    width: 70%;
`;

const CartButtonDiv = styled.div`
    width:5%;
 `;   

const DisplayingPagination = styled.div`
    float:right;
`;

@inject('productStore','cartStore','authStore')
@observer
class ProductsPage extends React.Component{
    
    componentDidMount(){
        this.doNetworkCalls();
    }
    
    onClickAddToCart = (eachProduct) => {
        this.props.cartStore.onClickAddToCart(eachProduct);    
    }
    
    doNetworkCalls = () => {
        this.props.productStore.getProductList();
    }
    
    rendersUsersList = observer(() => {
        const {products} = this.props.productStore;
        if(products.length === 0){
            <NoDataView />;
        }
        
        return <ProductList products = {products}
                            onClickAddToCart = {this.onClickAddToCart}
                />;
    })
    
    
    onClickSignOut = () => {
        //console.log(ACCESS_TOKEN,"product page");
        if(ACCESS_TOKEN.length > 0){
            this.props.history.replace({pathname:'/'});
            
        } else {
            this.props.history.push({pathname:'/Products-Page'});
        }
    }
    
    render(){
        //console.log("pPage",this.props.authStore.getUserSignInAPIStatus);
        const {onSelectSize,
               totalNoOfProductsDisplayed,
               onChangeSortBy,
               getProductAPIStatus,
               getProductAPIError,
               onClickLeftButton,
               onClickRightButton,
               PageCounter,
               productsLimit
        } = this.props.productStore;
        return(
            <Screen>
                <SizesDisplaySection>
                    <SignOutButton onClick={this.onClickSignOut}>Sign Out</SignOutButton>
                    <SizeFilter onSelectSize = {onSelectSize}/>
                </SizesDisplaySection>
            
                <ProductsDisplayingSection>
                    <Header totalNoOfProductsDisplayed = {totalNoOfProductsDisplayed} 
                            onChangeSortBy = {onChangeSortBy}
                    />
                   
                <LoadingWrapperWithFailure
                    apiStatus = {getProductAPIStatus}
                    apiError = {getProductAPIError}
                    onRetryClick = {this.doNetworkCalls}
                    renderSuccessUI = {this.rendersUsersList}
                />    
                <DisplayingPagination>
                    <Pagination productsLimit = {productsLimit} totalNoOfProductsDisplayed = {totalNoOfProductsDisplayed} PageCounter = {PageCounter} onClickLeftButton = {onClickLeftButton} onClickRightButton = {onClickRightButton}/>
                </DisplayingPagination>
                </ProductsDisplayingSection>
                
                <CartButtonDiv>
                    <ProductCart />
                </CartButtonDiv>
            </Screen>
            );
    }
}

export default ProductsPage;