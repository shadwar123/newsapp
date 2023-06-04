import React, { useState,useEffect,  useRef } from "react";
import News from './News';
import './NewsApp.css';
import { Button } from 'antd';

function NewsApp() {
  const apikey = "11df5d84009e42729560712c67451f03";

  const [NewsList, setNewsList] = useState([]);

  const [query, HandleQuery] = useState('tesla');
  const apiurl = `https://newsapi.org/v2/everything?q=${query}&from=2023-05-04&sortBy=publishedAt&apiKey=${apikey}`;



  const queryInputRef = useRef(null);


  useEffect(() => {
    fetchData();
  }, [query])

  async function fetchData() {
    try {
      const response = await fetch(apiurl);
      const jsonData = await response.json();

      setNewsList(jsonData.articles);
    } catch (e) {
      console.log(e, "error occured");
    }
  }

  function HandleSubmit(event) {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    HandleQuery(queryValue);
  }
  //onClick={HandleSubmit}

  return (
    <div>
      <form className="form" onSubmit={HandleSubmit}>
        <label value="inp-text" > <h2 className="heading">News Insider</h2> </label> 
        <input id="inp-text" className="inp-text" placeholder="Search For Latest news" type="text" ref={queryInputRef} />
        {/* <input className="inp-btn" onClick={HandleSubmit} type="submit" value="Submit" /> */}
        <Button className="inp-btn" onClick={HandleSubmit}>Submit</Button>
      </form>
      <div id="newsApp">

        {NewsList&&NewsList.map((news) => {
          return <News key={news.url} news={news} />;
        })}
      </div>
    </div>
  );
}

export default NewsApp;
