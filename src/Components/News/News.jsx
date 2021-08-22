import React from 'react';
import './News.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Col} from 'react-bootstrap';

const News = (props) => {
    const {title, description, urlToImage, publishedAt, url, author} = props.article;
    return (
                <Col md={4}>
                    <Card className= 'text-left'>
                        <Card.Img variant="top" src={urlToImage} width="50%" alt="Image doesn't show"/>
                        <Card.Body>
                        <small className="d-block pb-2 text-muted">Published at {publishedAt}</small>
                            <Card.Title><a href={url}>{title} </a>
                            </Card.Title>
                            <small className="d-block pb-2 text-muted">{author}</small>
                            <Card.Text>
                            {description}
                            </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
    );
};

export default News;