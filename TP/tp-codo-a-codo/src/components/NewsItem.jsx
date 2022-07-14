import React from 'react'
import '../styles/NewsItem.css';

function NewsItem(news) {

    return (
        <li className="newsCard">  
            <img
                width={250}
                height={220}
                className='newsImage'
                src={news.urlToImage}
                alt="imágen de la noticia"
            />
            <p>{news.title}</p> 
            {news.author && <p>AUTOR: {news.author} </p>}
        </li>
    );

}

export {NewsItem};
