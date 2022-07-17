import React from 'react';
import '../styles/PhotoPlaceholder.css'

function PhotoPlaceholder(){
    return (
      <>
        <a className='aImage' href="https://placeholder.com">
          <img className='newsImage' src="https://via.placeholder.com/280x150.png?text=Noticia+sin+imágen" alt=''/>
        </a>
      </>
    ); 
}

export {PhotoPlaceholder}