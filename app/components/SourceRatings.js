import React from 'react';
import {Link} from 'react-router';
import SourceRatingsStore from '../stores/SourceRatingsStore'
import SourceRatingsActions from '../actions/SourceRatingsActions';
import SourceCard from './SourceCard';


class SourceRatings extends React.Component {
  constructor(props) {
    super(props);

    this.state = SourceRatingsStore.getState();
    this.onChange = this.onChange.bind(this);
    console.log("News List Mounted");

  }

  componentDidMount() {
    console.log("News List Mounted");

    SourceRatingsStore.listen(this.onChange);
    SourceRatingsActions.getSourceRatings(this);
 //   fetch("/api/basic")
   //    .then((response) => response.json)
  }

  componentWillUnmount() {
    SourceRatingsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    console.log("IN RENDER")
    if(!this.state.response){
      return false;
   }
    var news = this.state.news.map((n, index) => {
//	  var n = card.tweets.map((tweet, index1) => {
	return (
		<b> {n.title} </b>
     	);
    });
    var dict = {};
    for (var i = 0 ; i < this.state.news.length; i ++){
      var source = this.state.news[i]['source'];
        if (!(source in dict)){
          dict[source] = [];
      }
      dict[source].push(this.state.news[i]['score'])
    }
    console.log(dict);
     
//    var news_temp1 = [].concat.apply([], news_temp)*/
    var backColor = {backgroundImage: "url(http://www.misucell.com/data/out/10/IMG_386461.png)"};
//    var summaries = <SourceCard summary={dict} />
    var summaries = []
    for (var key in dict) {
      summaries.push(<SourceCard k={key} scores={dict[key]}/>);
    }
    return (

      <div style={backColor}>
	{summaries}
      </div>
    );
  }
}

export default SourceRatings;
