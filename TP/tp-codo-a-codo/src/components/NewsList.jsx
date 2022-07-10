import {getHeadlines} from '../service/apiCalls';
import {NewsItem} from "./NewsItem";
import { useState, useEffect, React } from "react";
import './NewsList.css';

function NewsList(){
  const [news, setNews] = useState([]);
  useEffect(() => {getHeadlines().then(setNews);}, []);
  return (
    <>
      <ul className="newsGrid" >
        {news.length === 0 ? (<div>Cargando...</div>) 
          : (<section> {news.map((n) => (<NewsItem key={news.indexOf(n)} {...n} /> ))}</section>)
        }
      </ul>
    </>
  ); 
}

export {NewsList}