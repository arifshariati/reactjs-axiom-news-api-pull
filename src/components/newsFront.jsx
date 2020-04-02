import React, { Component } from 'react';
import Axios from 'axios';
import {Card,CardDeck,Button} from 'react-bootstrap';
import '../assets/css/newsFront.css';

class NewsFront extends Component{
    state={
        articles:[]
    }
    componentDidMount(){
        this.getArticles();
    }
    async getArticles(){
        const KEY="1eef6d1799164641972598884245ee39";
        const ENDPOINT="https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=".concat(KEY);
        const response=await Axios.get(ENDPOINT);
        this.setState({
          articles:response.data.articles
        })
        console.log(this.state.articles);
      }
    render(){
        return(
            <div className="news-container">
                <CardDeck>
                {
                    this.state.articles.map((article,i)=>
                    <Card key={i}>
                        <Card.Img variant="top" src={article.urlToImage}/>
                        <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{article.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Card.Link href={article.url} target="_blank">Origin</Card.Link>
                        </Card.Footer>
                    </Card>
               
                    )
                }
                </CardDeck>
                
            </div>     
        )
    }
}
export default NewsFront;