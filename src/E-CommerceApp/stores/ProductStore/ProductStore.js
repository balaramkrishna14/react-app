import {observable,action,computed} from 'mobx';
import { API_INITIAL } from '@ib/api-constants';

import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
//import ProductService from '../../services/ProductService/index.fixture.js';
import ProductModel from '../Models/ProductModel/ProductModel.js';

class ProductStore{
    @observable getProductAPIStatus
    @observable getProductAPIError
    @observable productList
    //@observable productsAPIService
    @observable sizeFilter//[]
    @observable sortBy
    @observable PageCounter;
    @observable productsIndex;
    
    constructor(productService) {
        this.productService = productService;
        this.init();
    }
    
    @action.bound
    onClickLeftButton(){
        this.PageCounter--;
        this.productsIndex = this.productsLimit * (this.PageCounter - 1);
        this.getProductList();
    }
    
    @action.bound
    onClickRightButton(){
        this.PageCounter++;
        this.productsIndex = this.productsLimit * (this.PageCounter - 1);
        this.getProductList();
    }
    
    @action.bound
    setProductListResponse(productsData){
       // console.log(productsData);
        const productsDetails = productsData.products.map((eachProduct) =>
             new ProductModel(eachProduct)
        );
        this.productList = productsDetails;
    }
    
    @action.bound
    init() {
        this.PageCounter = 1;
        this.getProductAPIStatus = API_INITIAL;
        this.getProductAPIError = null;
        this.productList = [];
        this.sizeFilter = [];
        this.sortBy = "SELECT"; //ASCENDING,DESCENDING
        this.productsLimit = 3;
        this.productsIndex = this.productsLimit * (this.PageCounter - 1);
    }
    
    @action.bound
    onSelectSize(eachSize){
        if(this.sizeFilter.includes(eachSize)){
            let sizeIndex = this.sizeFilter.indexOf(eachSize);
            this.sizeFilter.splice(sizeIndex,1);
        } else{
            this.sizeFilter.push(eachSize);
        }
    }
    
    @action.bound
    onChangeSortBy(event){
        this.sortBy = event;
    }
    
    @computed
    get totalNoOfProductsDisplayed(){
        return this.sortedAndFilteredProducts.length;
    }
    
    @computed
    get products(){
        return this.sortedAndFilteredProducts;
    }

    @computed
    get sortedAndFilteredProducts(){
       let updatingProducts,updatedFilteredProducts;
       updatedFilteredProducts = this.productList;
       
       if(this.sizeFilter.length > 0){
           updatedFilteredProducts = [];
        for(let i = 0; i < this.productList.length; i++){
            for(let j = 0; j < this.sizeFilter.length; j++){
                if(this.productList[i].availableSizes.indexOf(this.sizeFilter[j]) != -1){
                    updatedFilteredProducts.push(this.productList[i]);
                    break;
                }
            }
         }    
       }
        
        if(this.sortBy === "ASCENDING"){
            updatingProducts = updatedFilteredProducts.sort((a, b) => a.price - b.price);
            
        } else if(this.sortBy === "DESCENDING"){
            updatingProducts = updatedFilteredProducts.sort((a, b) => b.price - a.price);
        } else {
            updatingProducts = updatedFilteredProducts;
        }
        return updatingProducts;
    }

    @action.bound
    setGetProductListAPIStatus(apiStatus){
        this.getProductAPIStatus = apiStatus;
    }
    
    @action.bound
    setGetProductListAPIError(error){
        this.getProductAPIError = error;
    }
    
    @action.bound
    getProductList() {
        const productsPromise = this.productService.getProductsAPI(this.productsLimit,this.productsIndex);
        return bindPromiseWithOnSuccess(productsPromise)
        .to(this.setGetProductListAPIStatus, this.setProductListResponse)
        .catch(this.setGetProductListAPIError);
        }
    
    @action.bound
    clearStore() {
        this.init();
    }
}

export default ProductStore;