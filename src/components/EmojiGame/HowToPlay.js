import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Help=styled.div`
    ${tw`p-3`}
    background-color: ${props => props.selectedTheme === 'dark' ? '#1a202c' : '#fff'};
    color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
`;

const H1=styled.h1`
    ${tw`text-2xl font-bold`}
`;

const H5=styled.h5`
    ${tw`text-xl p-3`}
`;

class HowToPlay extends React.Component{
    
    
    render(){
        const {selectedTheme} = this.props;
        return(
            <Help selectedTheme={selectedTheme}>
                <H1>How to play?</H1>
                <H5>Get points by clicking on an image but more than once!</H5>
            </Help>
            );
    }
}

export default HowToPlay;