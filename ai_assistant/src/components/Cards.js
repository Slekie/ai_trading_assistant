import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these trading bots!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/slick-ai-bot.jpeg'
              text='This is a fully automated AI trading robot for multiple assets'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/slick-ultimate-bot.jpg'
              text='This trading robot is for multiple currency pairs for forex'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/slick-charminita-bot.jpg'
              text='Slick Charminita trading robot is built for trading cryptocurrency'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/slick-superior-bot.jpg'
              text='Experience a true trend following trading robot for long term traders'
              label='Quest'
              path='/products'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;