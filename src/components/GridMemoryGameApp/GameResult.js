import React from 'react';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const WinResultDiv = styled.div`
    ${tw`text-center mt-16`}
    background-color: ${props => props.selectedTheme === 'dark' ? '#000' : 'whitesmoke'};
    color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
`;

const LevelCount = styled.div`
    ${tw`text-4xl font-bold`}
`;

const WinText = styled.div`
    ${tw`text-green-500 m-3 text-3xl font-bold`}
`;

const PlayAgainButton = styled.button`
    ${tw`bg-blue-700 p-3 text-white text-2xl rounded`}
`;

@observer
class GameResult extends React.Component{
    
    onPlayAgainClick = () => {
        const {onPlayAgainClick} = this.props;
        onPlayAgainClick();
    }
    
    render(){
        const {selectedTheme,level} = this.props;
        return(
            <WinResultDiv selectedTheme={selectedTheme}>
                <LevelCount>{level}</LevelCount>
                <WinText>Congratulations! You completed all the levels.</WinText>
                <PlayAgainButton onClick={this.onPlayAgainClick}>Play Again</PlayAgainButton>
            </WinResultDiv>
        );
    }
}

export default GameResult;