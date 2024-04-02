import React, { useRef } from 'react';
import './Gallery.css';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import { images } from '../../constants';
import { SubHeading } from '../../components';


function Gallery() {
  
  const scrollref = useRef(null);
  
  const scroll = (direction) => {
    const {current} = scrollref;

    if (direction === 'Left'){
      current.scrollLeft -= 300;
    }else{
      current.scrollLeft += 300;
    }
  }

  const Images = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
          <SubHeading title='Instagram' />
          <h1 className='headtext__cormorant'>Photo Gallery</h1>
          <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <button type='button' className='custom__button' style={{marginTop: '1rem'}}>View More</button>
      </div>

      <div className='app__gallery-images'>
          <div className='app__gallery-images_container' ref={scrollref}>
            {Images.map((image, index) => (
              <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery image" />
                <BsInstagram className='gallery__image-icon' />
              </div>
            ))}
          </div>
          <div className='app__gallery-images_arrows'>
              <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('Left')} />
              <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('Right')} />
          </div>
      </div>
    </div>
  )
}

export default Gallery
