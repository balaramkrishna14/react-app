import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const WinLoseDiv = styled.div`
    background-color: ${props => props.selectedTheme === 'dark' ? '#1a202c' : '#fff'};
    color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
`;

const ScoreCount = styled.div`
    ${tw`text-3xl `}
`;

const WinLoseText = styled.div`
    ${tw`text-red-600 text-3xl`}
`;

const PlayAgainButton = styled.button`
    ${tw`bg-blue-700`}
`;

class WinOrLose extends React.Component{
    
    render(){
        const {selectedTheme,score} = this.props;
        return(
            <WinLoseDiv selectedTheme={selectedTheme}>
                <ScoreCount>{score}</ScoreCount>
                <WinLoseText>You Win!</WinLoseText>
                <PlayAgainButton>Play Again</PlayAgainButton>
            </WinLoseDiv>
            );
    }
}

          
export default WinOrLose;