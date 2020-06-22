import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {observer} from "mobx-react";
import {observable} from 'mobx';

const LeftButton = styled.button`
    ${tw`bg-black text-white p-1 m-2 px-3`};
`;

const RightButton = styled.button`
    ${tw`bg-black text-white p-1 m-2 px-3`};
`;

const PageDisplayCount = styled.span`
    ${tw`p-1 px-3`};
    border:1px solid black;
`;

const PageSlashTag = styled.span`
    ${tw`m-2`};
`;

@observer
class Pagination extends React.Component{
    @observable isRightButton = false;
    @observable isLeftButton  = false;
    
     onClickRightButton = () => {
         const {PageCounter,onClickRightButton} = this.props;
         //if(PageCounter == Math.ceil(totalNoOfProductsDisplayed/productsLimit)){
         if(PageCounter == 6){
            this.isRightButton = true;
         } else{
            this.isRightButton = false; 
            onClickRightButton();
         }
     }
    
     onClickLeftButton = () => {
         const {PageCounter,onClickLeftButton} = this.props;
         if(PageCounter == 1){
            this.isLeftButton = true;
         } else{
            this.isLeftButton = false; 
            onClickLeftButton();
         }
     }
     
    render(){
        const {PageCounter} = this.props;
        return(
            <div>
            <LeftButton disabled={this.isLeftButton} onClick={this.onClickLeftButton}>&lt;</LeftButton>
            <PageDisplayCount>{PageCounter}</PageDisplayCount>
                 <PageSlashTag>/</PageSlashTag>
            <span>6</span>
            <RightButton disabled={this.isRightButton} onClick={this.onClickRightButton}>&gt;</RightButton>
            </div>
            );
    }
}

export {Pagination};