import React , {useState} from 'react'
import axios from "axios"

const NewsApp = () => {
    const apiLink = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d"
    var [newsList,changeNews] = useState([])
   
  React.useEffect(
    ()=>{
        axios.get(apiLink).then(
          (response)=>{
           changeNews(response.data.articles) 
           console.log(response.data)
          }
        )
        
      },[]
      
    )
   
    return (
        <div>
            <br/>
        <h1>Top Headlines from India</h1>
        <br/>
        {newsList.map((article, index) => (
          <div key={index}>
            <h2 style={{color:"Blue"}}>{article.title}</h2>
            <p style={{fontWeight:"bolder",color:'green'}}>{article.author} | {article.publishedAt} </p>
            <p>{article.content}</p>
            <p>{article.description}</p>
           <img src={article.urlToImage} alt="" style={{marginLeft:'25%'}} height="300px" width="300px"/>
           <p style={{color:"red"}}>{article.url}</p>
          </div>
        ))}
        <br/>
      </div>
    )}
  


export default NewsApp