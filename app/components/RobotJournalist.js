import React from 'react';
import {Link} from 'react-router';
import RobotJournalistStore from '../stores/RobotJournalistStore'
import RobotJournalistActions from '../actions/RobotJournalistActions';
import RobotCard from './RobotCard';

import NumericLabel from 'react-pretty-numbers';
function compare(a,b) {
 
  if (a["time"] > b["time"])
    return -1;
  if (a["time"] < b["time"])
    return 1;
  return 0;
}

class RobotJournalist extends React.Component {
  constructor(props) {
    super(props);

    this.state = RobotJournalistStore.getState();
    this.onChange = this.onChange.bind(this);
    console.log("News List Mounted");

  }

  componentDidMount() {
    console.log("News List Mounted");

    RobotJournalistStore.listen(this.onChange);
    RobotJournalistActions.getRobotJournalist(this);
 //   fetch("/api/basic")
   //    .then((response) => response.json)
  }

  componentWillUnmount() {
    RobotJournalistStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    console.log("IN RENDER")
    if(!this.state.response){
      return false;
   }
 /*   var news = this.state.news.map((n, index) => {
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
   */  
//    var news_temp1 = [].concat.apply([], news_temp)*/
    var backColor = {backgroundSize: "cover",
		     backgroundImage:"url(http://www.misucell.com/data/out/10/IMG_386461.png)",
		     backgroundRepeat: "repeat",
		     overflow: 'hidden',
};
    var newG  = {backgroundColor: "white", padding:10}
//    var summaries = <SourceCard summary={dict} />
    var option = {'precision':2};
//    var sort_scores = this.state.news.sort(compare);
;
    var clean_out = this.state.rj.map ((n, index) => {
           return {"headline": n.headline, "time": new Date(n.time), "iter": n.iter};
     });
    var sorted_clean = clean_out.sort(compare);
    var output = sorted_clean.map((n, index) => {
	    return <RobotCard key={n["headline"]} text={n["headline"]} time={n["time"]} />;
	 });
/*    var summaries = []
    for (var key in dict) {
      summaries.push(<SourceCard k={key} scores={dict[key]}/>);
    }*/
    console.log(this.state.rj);
    return (

      <div style={newG}>
	{"Meet RJ, the robot journalist! He is learning how to be a better journalist and so as you can see he isn't that great right now! Here are his recent thoughts on news events:"}
	{output}
      </div>
    );
  }
}

export default RobotJournalist;
