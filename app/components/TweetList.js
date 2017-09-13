import React from 'react';
import {Link} from 'react-router';
import TweetListStore from '../stores/TweetListStore'
import TweetListActions from '../actions/TweetListActions';
import TweetCard from './TweetCard';

class TweetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = TweetListStore.getState();
    this.onChange = this.onChange.bind(this);
    console.log("News List Mounted");

  }

  componentDidMount() {
    console.log("News List Mounted");

    TweetListStore.listen(this.onChange);
    TweetListActions.getTopNews();
 //   fetch("/api/basic")
   //    .then((response) => response.json)
  }

  componentWillUnmount() {
    TweetListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    console.log("News List Mounted");
    var news_temp = this.state.cards.filter((card, index) => {
      this.props.params.value !== card._id
    });
    var news = this.state.cards.map((card, index) => {
        if (card._id == this.props.params.value){
//	  var n = card.tweets.map((tweet, index1) => {
	return (
		<TweetCard text={card.tweets} url={card.url_image} id={index} desc={card.description}
		 _id={card._id} loc={card.loc} sentiments={card.sentiments}/>

     	);
	}
	else return false;
    });
    console.log('check');
    console.log(this.state.cards);
    console.log(news_temp);
//    var news_temp1 = [].concat.apply([], news_temp)*/
    var backColor = {backgroundImage: "url(http://www.misucell.com/data/out/10/IMG_386461.png)"};

    return (

      <div style={backColor}>
	{news}
      </div>
    );
  }
}

export default TweetList;
