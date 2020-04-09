import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import Navbar from './Navbar.js';
import EmojiCard from './EmojiCard.js';
import WinOrLose from './WinOrLose.js';
import HowToPlay from './HowToPlay.js';

const TotalEmojisCards=styled.div`
    ${tw`flex flex-wrap p-5`}
    background-color: ${props => props.selectedTheme === 'dark' ? "#000" : 'whitesmoke'};
    color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
`;

class EmojiGame extends React.Component{
    //emojisId=0
    state={
        score:0,
        topScore:0,
        gameState:'PLAYING', //WON,LOSE
        emojis:[
            {id: 1,isClicked:false,name:'Exploding Head',image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png'},
            {id: 2,isClicked:false,name:'Grinning Face with Sweat',image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png'},
            {id: 3,isClicked:false,name:'Smiling Face with Heart-Eyes',image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png'},
            {id: 4,isClicked:false,name:'Smirking Face',image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png'},
            {id: 5,isClicked:false,name:'Thinking Face',image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png'},
            {id: 6,isClicked:false,name:'Winking Face',image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png'},
            {id: 7,isClicked:false,name:'Grinning Face',image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png'},
            {id: 8,isClicked:false,name:'Crying Face',image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png'},
            {id: 9,isClicked:false,name:'Astonished Face',image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png'},
            {id: 10,isClicked:false,name:'Face with Tears of Joy',image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png'},
            {id: 11,isClicked:false,name:'Star-Struck',image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png'},
            {id: 12,isClicked:false,name:'Winking Face with Tongue',image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png'}
            ]
    }
    
    onEmojiClick = (emojiId) => {
        const {score,emojis} = this.state;
        const foundBool = emojis.find(findEmoji => findEmoji.id === emojiId);
        if(foundBool.isClicked === false){
            foundBool.isClicked = true;
            this.incrementScore();
            this.shuffleEmojis();
            if(score === 11){
                    this.setState({
                        gameState:'WON',
                    });
                }
        }
        else{
                this.setState({
                gameState:'LOSE',
                });
        }
    }
    
    
    shuffleEmojis = () => {
        const {emojis} = this.state;
        let emojisShuffle = emojis.sort(() => Math.random() - 0.5);
        this.setState({ emojis:emojisShuffle});
    }
    
    incrementScore = () => {
        const {score} = this.state;
        this.setState({
            score:score + 1,
        });
    }
    
    resetGame = () => {
        let {emojis,topScore,score,} = this.state;
        if(topScore < score){
            topScore = score;
        }    
        
        emojis.map(findEmoji => findEmoji.isClicked = false);
        this.setState({
            topScore,
            score:0,
            gameState:'PLAYING'
        });
    }
    
    render(){
        const {selectedTheme,onChangeTheme} = this.props;
        const {emojis,score,gameState,topScore} = this.state;
        
        return(
        <div>
        <Navbar topScore={topScore} score={score} selectedTheme={selectedTheme} onChangeTheme={onChangeTheme}/>
        {
          (gameState === 'PLAYING')?<TotalEmojisCards selectedTheme={selectedTheme}>
          {emojis.map((eachEmoji) => <EmojiCard onEmojiClick={this.onEmojiClick}
          selectedTheme={selectedTheme}
          emojis={eachEmoji} key={eachEmoji.id}/>)}
          </TotalEmojisCards>
          :<WinOrLose resetGame={this.resetGame} score={score} gameState={gameState} selectedTheme={selectedTheme}/>
        }
        <HowToPlay selectedTheme={selectedTheme}/>
        </div>
        );
    }
}


export default EmojiGame;