import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../../pages';

import { HeroHeader } from '../../components';

import './Home.css';

class Home extends Component{
  constructor(props){
    super(props);

    this.state={
      gameInfo:[{
        title: "Maplestory",
        content: "Kill Alot of Monsters",
        picture: "hello",
        rating: "*****",
        reviewNumber: "Reviews: 5",
        dateReleased: "stff",
      },
      {
        title: "League Of Legends",
        content: "Kill Alot of Champions",
        picture: "nothello",
        rating: "*****",
        reviewNumber: "Reviews: 166",
        dateReleased: "stff",
      }],
    }
  }
  componentDidMount(){

  }
  render(){
    return(
      <Page>
        <div className="home">
          <HeroHeader />
          <ul className="heroGameList">
            {
              this.state.gameInfo.map((data, key) => {
                return(
                <li key={key}>
                  <GameInfo data={data} />
                </li>);
              })
            }
          </ul>
        </div>
      </Page>
    );
  }
}

const GameInfo = ({data}) => {
  let {title, content, picture, rating, reviewNumber, dateReleased} = data;
  let link = "/game/" + title;
  return(
    <React.Fragment>
      <Link className="gameInfo" to={link}>
        <img src={picture} alt=""/>
        <div className="card">
          <div className="title">
            {title}
          </div>
          <div className="rating">
            {rating}
          </div>
          <div className="content">
            {content}
          </div>
          <div className="reviewNumber">
            {reviewNumber}
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default Home;
