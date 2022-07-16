import {React, useState} from 'react';
import '../styles/NewsItem.css';
import {NewsWindow} from './NewsWindow';
import {PhotoPlaceholder} from './PhotoPlaceholder'

function NewsItem(news) {
    const [open, setOpen] = useState();
    return (
        <li className="newsCard" >  
            {news.urlToImage != null ? <img className='newsImage' src={news.urlToImage} alt=""/>
            :<PhotoPlaceholder/>}
            <p>{news.title}</p> 
            {news.author && <p>AUTOR: {news.author} </p>}
            <button onClick={() => setOpen(true)}>VER FUENTE</button>
            {open && <NewsWindow url={news.url}/> }
        </li>
    );
}

export {NewsItem};

