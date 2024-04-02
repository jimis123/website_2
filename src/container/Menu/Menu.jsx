import React from 'react';
import './Menu.css';

import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

function Menu() {
  return (
    <div className='app__menu flex__center section__padding' id='menu'>
      <div className='app__menu-title'>
        <SubHeading title='Menu thats fits your palatte' />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className='app__menu-menu'>

          <div className="app__menu-menu_wine flex__center">
            <h1 className="app__menu-menu_heading">Wine & Beer</h1>
          
            <div className="app__menu-menu_items">  
              {data.wines.map((wine, index) => (
                  <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
              ))}
            </div>
          </div>

          <div className='app__menu-menu_img'>
              <img src={images.menu} alt="menu img" />
          </div>

          <div className="app__menu-menu_cocktails flex__center">
            <h1 className="app__menu-menu_heading">Cocktails</h1>
          
            <div className="app__menu-menu_items">  
              {data.cocktails.map((cocktails, index) => (
                  <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>
              ))}
            </div>
          </div>

      </div>

      <div style={{marginTop: '15px'}}>
          <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
}

export default Menu
