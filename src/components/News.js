import React from 'react'
import './News.css';
import { Button } from 'antd';
function News({news}) {
  return (
    <div className='news-card'>
        <img src={news.urlToImage} alt={news.title} />
        <h2 className='title'>{news.title}</h2>
        <p>{news.description}</p>
        <Button onClick={()=> {window.open(news.url)}}>Read More</Button>

    </div>
  )
}

export default News