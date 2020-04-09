import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EmojiNavbarHeader = styled.div`
    ${tw`flex justify-between items-center h-20 p-4`}
    background-color: ${props => props.selectedTheme === 'dark' ? '#1a202c' : '#fff'};
    color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
    `;
 
const Space1 = styled.div`
    ${tw`flex font-normal text-3xl`}
`;
 
const Space2 = styled.div`
    ${tw`flex justify-between`}
`;

const GameScore = styled.p`
    ${tw`font-bold m-2`}
`;

const GameTopScore = styled.p`
    ${tw`font-bold m-2`}
`;

const ThemeButton = styled.button`
    ${tw`border p-2`}
    border-color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
`;

class Navbar extends React.Component{
    
    render(){
        const {selectedTheme,onChangeTheme,score,topScore} = this.props;
        return(
            <EmojiNavbarHeader selectedTheme={selectedTheme}>
            
            <Space1>Emoji Game</Space1>
            
            <Space2>
            <GameScore>Score: {score}</GameScore>
            <GameTopScore>Top Score: {topScore}</GameTopScore>
            <ThemeButton onClick={onChangeTheme} selectedTheme={selectedTheme}>
            { selectedTheme === "light" ? "LIGHT THEME" : "DARK THEME"}</ThemeButton>
            </Space2>
            </EmojiNavbarHeader>
            );
    }
}

export default Navbar;