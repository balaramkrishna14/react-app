import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const HeaderSection = styled.div`
    ${tw`flex justify-between mt-20`};
`;

const SortingSection = styled.div`
    ${tw`flex justify-center items-center`};
`;

class Header extends React.Component{
    
    onSelectSortBy = (event) => {
        const {onChangeSortBy} = this.props;
        onChangeSortBy(event.target.value);
    }
    
    render(){
        const {totalNoOfProductsDisplayed} = this.props;
        return(
            <HeaderSection>
            <div>{totalNoOfProductsDisplayed} Product(s) found.</div>
            
            <SortingSection>
            <div>Sort price by:&nbsp;</div>
            <select onChange = {this.onSelectSortBy}>
                <option value = 'SELECT'>Select</option>
                <option value = 'ASCENDING'>Lowest to highest</option>
                <option value = 'DESCENDING'>Highest to lowest</option>
            </select>
            </SortingSection>
            </HeaderSection>
            );
}
}
export default Header;