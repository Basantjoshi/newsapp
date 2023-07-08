import React, { Component } from "react";

export class newsitem extends Component {

  render() {
    let { title, description,urlToImage,url } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={urlToImage}
            alt="..."
          />
          <div className="card-body">
            <h5 className="title">{title}</h5>
            <p className="desc">{description}</p>
            <a rel="noreferrer" href={url} target="_blank" className="btn btn-dark">
             Read more
              </a>
           
          </div>
         
        </div>
        

      </div>
      
    );
  }
}

export default newsitem;
