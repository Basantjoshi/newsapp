import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {


  constructor() {
    
    super();
    this.state = {
      articles: [],
      page:1,
    
      // loading: false
    }
  }

  async componentDidMount() {
    
    let url ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a88007016b294f3c8f021bf94f47d431&page=1&pageSize=10";
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({articles: parseddata.articles})
  }
  handleprev = async()=>{
        
         let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a88007016b294f3c8f021bf94f47d431&page=${this.state.page-1}&pageSize=10`;
         let data = await fetch(url);
         let parseddata = await data.json();
         
          this.setState ({
            page: this.state.page - 1,
          articles: parseddata.articles
           
          })
  }
  handlenex = async()=>{
    
        if(this.state.page+1>Math.ceil(this.state.totalResults/10)){

        }
        else{
    let url =` https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a88007016b294f3c8f021bf94f47d431&page=${this.state.page+1}&pageSize=10`;
    let data = await fetch(url);
    let parseddata = await data.json();
    
     this.setState ({
      page: this.state.page + 1,
     articles: parseddata.articles
     
     
    })
   }
      
    

  }
  render() {
   
    return (
      <div className="container my-3">
        <h2>Daily News Update</h2>
        <div className="row">
          {this.state.articles?.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <Newsitem
                  title={element.title?element.title:""}
                  description={element.description?element.description:""}
                  urlToImage={element.urlToImage}
                  url={element.url}

                />
      
              </div>
              
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprev} >&larr; Previous</button>
             <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/10)} type="button" className="btn btn-dark " onClick={this.handlenex} >Next &rarr;</button>
             </div>
      </div>
    )
  }
}

export default News;
