import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DisplaySizeFiltersDiv = styled.div`
    ${tw`ml-3 flex flex-col flex-wrap`};
`;

const SizeFilterTitle = styled.div`
    ${tw`mb-3 font-bold`};
`;

const ButtonSize = styled.button`
    ${tw`m-1 w-10 h-10 rounded-full bg-gray-400`};
`;
//    background-color:${props => props.isToggled ? 'lightgray' : 'black'};

class SizeFilter extends React.Component{
    
    onSelectSize = (event) => {
        const {onSelectSize} = this.props;
        onSelectSize(event.target.value);
    }
    
    render(){
        return(
            <DisplaySizeFiltersDiv>
                <SizeFilterTitle>Sizes:</SizeFilterTitle>
                <div>
                <ButtonSize  value = "XS" onClick = {this.onSelectSize}>XS</ButtonSize>
                <ButtonSize  value = "S" onClick = {this.onSelectSize}>S</ButtonSize>
                <ButtonSize  value = "M" onClick = {this.onSelectSize}>M</ButtonSize>
                <ButtonSize  value = "L" onClick = {this.onSelectSize}>L</ButtonSize>
                <ButtonSize  value = "XL" onClick = {this.onSelectSize}>XL</ButtonSize>
                <ButtonSize  value = "XXL" onClick = {this.onSelectSize}>XXL</ButtonSize>
                </div>
            </DisplaySizeFiltersDiv>
            );
    }
}

export default SizeFilter;