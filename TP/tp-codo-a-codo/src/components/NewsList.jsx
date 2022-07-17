import {getHeadlines} from '../service/apiCalls';
import {NewsItem} from "./NewsItem";
import { useState, useEffect, React } from "react";
import '../styles/NewsList.css';

function NewsList(props){
  const [news, setNews] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line
    getHeadlines(props.category).then(setNews);
  }, [props.category]);
  return (
    <>
      <ul>
        {news.length === 0 ? (<div>Cargando ... </div>) 
          : (<section className="newsGrid" > {news.map((n) => (<NewsItem key={news.indexOf(n)} {...n} /> ))}</section>)
        }
      </ul>
    </>
  ); 
}

export {NewsList}
