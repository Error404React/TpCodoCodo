import React from 'react';

function PhotoPlaceholder(){
    return (
      <>
        <a href="https://placeholder.com">
          <img className='newsImage' src="https://via.placeholder.com/280x150.png?text=Noticia+sin+imágen" alt=''/>
        </a>
      </>
    ); 
}

export {PhotoPlaceholder}