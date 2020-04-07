import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EmojisCard = styled.div`
    ${tw`bg-white shadow-custom flex items-center flex-col m-6 h-64 w-64`}
    background-color: ${props => props.selectedTheme === 'dark' ? '#2b6cb0' : '#fff'};
    color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
`;


const EmojiImg = styled.img`
    ${tw`h-48`}
`;


class EmojiCard extends React.Component{
    
    onEmojiClick = () => {
         const {onEmojiClick,emojis} = this.props;
         onEmojiClick(emojis.id);
      }
    
    render(){
        const {emojis,selectedTheme} = this.props;
        return(
        <EmojisCard onClick={this.onEmojiClick} selectedTheme={selectedTheme}>
        <EmojiImg src={emojis.image} alt="not found"/>
        <p>{emojis.name}</p>
        </EmojisCard>
        );
    }
}

export default EmojiCard;