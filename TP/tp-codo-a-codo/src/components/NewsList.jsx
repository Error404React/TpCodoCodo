import {getHeadlines} from '../service/apiCalls';
import {NewsItem} from "./NewsItem";
import { useState, useEffect, React } from "react";
import '../styles/NewsList.css';

function NewsList(){
  const [news, setNews] = useState([]);
  useEffect(() =>
  {
    getHeadlines('sport').then(setNews);
  }, []);

  return (
    <>
      <ul className="newsGrid" >
        {
          news.length === 0 ? (<div>Cargando...</div>) 
          :
          news.map((n) => (<NewsItem key={news.indexOf(n)} {...n} />))
        }
      </ul>
    </>
  ); 
}

export {NewsList}