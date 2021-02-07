import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import elem from '../../images/elem.png';
import hs from '../../images/hs.png';
import college from '../../images/college.png'

function Cards() {
  return (
    <div className='cards'>
      <h1 className="title retain">Educational Background</h1>
      <hr className="divider"></hr>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={elem}
              text='1st honorable mention'
              details='Competed in various competitions in Math and Science'
              label='Santulan Elementary School'
              // path='/sign-up'
            />
            <CardItem
              src={hs}
              text='6th honorable mention'
              details='Competed in various competitions in Literary and Math. Foreign Language Student.'
              label='Tinajeros National High School'
              // path='/sign-up'
            />
            <CardItem
              src={college}
              text='Bachelor of Science in Electronics Engineering'
              details='Publication: Weight Prediction System for Nile Tilapia using Image Processing and Predictive Analysis'
              label='Technological University of the Philippines'
              // path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
