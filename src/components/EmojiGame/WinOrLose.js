import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const WinLoseDiv = styled.div`
    ${tw`text-center`}
    background-color: ${props => props.selectedTheme === 'dark' ? '#1a202c' : '#fff'};
    color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
`;

const ScoreCount = styled.div`
    ${tw`text-3xl `}
`;

const WinLoseText = styled.div`
    ${tw`text-red-500 m-3 text-2xl font-bold`}
`;

const PlayAgainButton = styled.button`
    ${tw`bg-blue-700 p-3 text-white text-2xl rounded`}
`;

class WinOrLose extends React.Component{
    
    render(){
        const {selectedTheme,score,gameState,resetGame} = this.props;
        return(
            <WinLoseDiv selectedTheme={selectedTheme}>
                <ScoreCount>{score}</ScoreCount>
                <WinLoseText>{(gameState === 'LOSE') ? 'You Lose!' : 'You Won!'}</WinLoseText>
                <PlayAgainButton onClick={resetGame}>Play Again</PlayAgainButton>
            </WinLoseDiv>
            );
    }
}

export default WinOrLose;