import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/oxygentube.jpg'
              text='Check out products for Oxygen Tubes'
              label='Medical'
              path='/products'
            />
            <CardItem
              src='/images/wheelchair.jpg'
              text='Check if you can rent or buy Wheelchairs'
              label='Medical'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/Piils.jpg'
              text='Found a difficult way to buy a specific medicine!'
              label='Medical'
              path='/products'
            />
            <CardItem
              src='images/masks.jpg'
              text='Avoid spreading coronavirus and buy masks!'
              label='Medical'
              path='/products'
            />
            <CardItem
              src='images/question.jpg'
              text='You are free to ask what you want!'
              label='Advices'
              path='/questions'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;