import {React, useState} from 'react';
import '../styles/NewsItem.css';
import {NewsWindow} from './NewsWindow';
import {PhotoPlaceholder} from './PhotoPlaceholder'

function NewsItem(news) {
  const [open, setOpen] = useState();
  
  return (
    <li className="newsCard" >  
      {console.log(news)}
      <div className='divTitleDescription'>
        <p className='newsTitle'>
          {news.title}
        </p> 
        <p className='newsContent'>
          {news.description}
        </p>
      </div>
          {/* {
            news.author &&
            <p className='newsAuthor'>AUTOR: {news.author} </p>
          } */}
      {
        news.urlToImage != null
        ?
        <img className='newsImage' src={news.urlToImage} alt="" />
        :
        <PhotoPlaceholder />
      }

      {/* <button className='newsButtonFuente'
        onClick={() => setOpen(true)}> VER FUENTE
      </button> */}
      {/* {
        open && <NewsWindow url={news.url} />
      } */}
    </li>
  );
}

export {NewsItem};

