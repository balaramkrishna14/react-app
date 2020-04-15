import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GridGameNavbarHeader = styled.div`
    ${tw`border border-green-700 m-auto flex flex-col`}
    background-color: ${props => props.selectedTheme === 'dark' ? '#1a202c' : '#fff'};
    color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
    `;

const TopLevel = styled.div`
    ${tw`flex justify-center text-xl mb-12`}
`;

const DisplayLevel = styled.div`
    ${tw`flex justify-around text-xl`}
`;

const ThemeButton = styled.button`
    ${tw`border p-2`}
    border-color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
`;

class Header extends React.Component{
    
    render(){
        const {selectedTheme,onChangeTheme} = this.props;
        return(
            <GridGameNavbarHeader selectedTheme={selectedTheme}>
                <TopLevel>Top Level: 0</TopLevel>
                <DisplayLevel>
                    <div>Level: 0</div>
                    <ThemeButton onClick={onChangeTheme} selectedTheme={selectedTheme}>
                    Mode: { selectedTheme === "light" ? "LIGHT" : "DARK"}</ThemeButton>
                </DisplayLevel>
            </GridGameNavbarHeader>
            );
    }
}

//<GameScore>Score: {score}</GameScore>
//<GameTopScore>Top Score: {topScore}</GameTopScore>
//<ThemeButton onClick={onChangeTheme} selectedTheme={selectedTheme}>
//{ selectedTheme === "light" ? "LIGHT THEME" : "DARK THEME"}</ThemeButton>
            
export default Header;