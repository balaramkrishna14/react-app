import React from 'react';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SubTotalDisplay = styled.div`
    ${tw`text-sm flex justify-between`};
`;

@observer
class SubTotal extends React.Component{
    
    render(){
        const {totalCartAmount} = this.props;
        return(
            
            <SubTotalDisplay>
             <div>SUBTOTAL</div>
             <div>{totalCartAmount}</div>
            </SubTotalDisplay>
            );
    }
}

export default SubTotal;