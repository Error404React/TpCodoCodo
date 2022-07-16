import {React, useState} from 'react';
import '../styles/NewsItem.css';
import {NewsWindow} from './NewsWindow';
import {PhotoPlaceholder} from './PhotoPlaceholder'

function NewsItem(news) {
  const [open, setOpen] = useState();
  
  return (
    <li className="newsCard" >  
      {console.log(news)}
      {
            news.urlToImage != null
            ?
            <img className='newsImage' src={news.urlToImage} alt="" />
            :
            <PhotoPlaceholder />
          }
          <p className='newsTitle'>
            {news.title}
          </p> 
          {
            news.author &&
            <p className='newsAuthor'>AUTOR: {news.author} </p>
          }
          <button className='newsButtonFuente'
            onClick={() => setOpen(true)}> VER FUENTE
          </button>
        {
          open && <NewsWindow url={news.url} />
        }
    </li>
  );
}

export {NewsItem};

