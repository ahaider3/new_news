import React from 'react';
import {Link} from 'react-router';
import TweetListStore from '../stores/TweetListStore'
import TweetListActions from '../actions/TweetListActions';
import TweetCard from './TweetCard';

var bg="url(data:image/jpeg;base64,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)"


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
    var backColor = {backgroundSize: "cover",
		     backgroundImage: bg ,
		     backgroundRepeat: "repeat",
		     overflow: 'hidden',
};

    return (

      <div style={backColor}>
	{news}
      </div>
    );
  }
}

export default TweetList;
