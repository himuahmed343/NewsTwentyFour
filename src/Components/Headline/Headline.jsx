import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import News from './../News/News';

const Headline = () => {
    const [articles, setArticle] = useState([])
    useEffect(() => { 
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a8a14eae653141d3b842384391fcb362'
        fetch(url)
        .then(response => response.json())
        .then(data => setArticle(data.articles))
      });
    return (
        <div>
            <h1>Top Headline: {articles.length}</h1>
            <Row>
            {
                articles.map(article => <News article={article}></News>)
            }
            </Row>

            
        </div>
    );
};

export default Headline;