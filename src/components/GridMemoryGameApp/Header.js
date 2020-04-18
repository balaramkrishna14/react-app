import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GridGameNavbarHeader = styled.div`
    
    background-color: ${props => props.selectedTheme === 'dark' ? '#000' : '#whitesmoke'};
    color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
    width: ${props => props.gameLevelsData}px;
`;

const TopLevel = styled.div`
    ${tw`flex justify-center text-xl mb-12`}
`;

const DisplayLevel = styled.div`
    ${tw`flex justify-between items-center text-xl`}
`;

const ThemeButton = styled.button`
    ${tw`border p-2`}
    border-color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
`;

class Header extends React.Component{
    
    render(){
        const {selectedTheme,onChangeTheme,topLevel,gameLevelsData,level} = this.props;
        return(
            <GridGameNavbarHeader gameLevelsData = {gameLevelsData[level].gridWidth} selectedTheme = {selectedTheme}>
                <TopLevel>Top Level: {topLevel}</TopLevel>
                <DisplayLevel>
                    <div>Level: {level}</div>
                    <ThemeButton onClick={onChangeTheme} selectedTheme={selectedTheme}>
                    Mode: { selectedTheme === "light" ? "LIGHT" : "DARK"}</ThemeButton>
                </DisplayLevel>
            </GridGameNavbarHeader>
            );
    }
}

export default Header;