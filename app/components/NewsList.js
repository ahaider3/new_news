import React from 'react';
import {Link} from 'react-router';
import NewsListStore from '../stores/NewsListStore'
import NewsListActions from '../actions/NewsListActions';
import NewsCard from './NewsCard';


class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = NewsListStore.getState();
    this.onChange = this.onChange.bind(this);
    console.log("News List Mounted");

  }

  componentDidMount() {
    console.log("News List Mounted");

    NewsListStore.listen(this.onChange);
    NewsListActions.getTopNews();
  }

  componentWillUnmount() {
    NewsListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    console.log("News List Mounted");
    var keys = this.state.cards.length;
    console.log(keys);
/*    var news_temp = this.state.cards.map((card, index) => {
      return <li>{card.tweets}</li>;
    });
    var news_temp1 = [].concat.apply([], news_temp)*/
    var news = this.state.cards.map((card, index) => {
	return (
		<NewsCard text={card.title} url={card.url_image} id={index} desc={card.description}
		 _id={card._id}/>
     	);

	});
    var backColor = {backgroundImage: "url(http://i.imgur.com/2DX85MH.jpg)",
		     backgroundImage: "url(http://www.serenitysys.com/photogallery/alaska_2009/leg_08/2009-07-28_dalton_hwy/DSC_1105_Sunset_over_the_mountains.jpg)"};

    return (
        <div style={backColor}>
	{news}
//        {this.props.children}
        </div>
    );
  }
}

export default NewsList;
