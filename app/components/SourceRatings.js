import React from 'react';
import {Link} from 'react-router';
import SourceRatingsStore from '../stores/SourceRatingsStore'
import SourceRatingsActions from '../actions/SourceRatingsActions';
import SourceCard from './SourceCard';
import NumericLabel from 'react-pretty-numbers';
var bg="url(data:image/jpeg;base64,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)"
   	var capStyle2 = {
//		backgroundColor: "rgba(152, 251, 152, 0.9)",
//		color: "rgba(252,251,227,1)",
		color:"black",
	//	textDecoration: 'none',

	};

   	var signupStyle = {
	 	fontFamily: "HelvectiaNeue-Light",
		fontWeight: "lighter",
//		postion: 'absolute',
//		backgroundColor: "rgba(152, 251, 152, 0.9)",
//		width: "100%",
//	        backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmaUMq-RyV2XkjO7kHmPiLOndAzeLErKuUBHfJ_TJoKdyYj3vb)",
	//	backgroundColor: "black",
		textAlign: "center",
                verticalAlign:"center",
		padding: 10,
                width: "50%",
		position: "relative",
		left: "385px",
		margin: 0,
		fontSize: 16,
	//	color: "rgba(252,251,227,1)",
		color: "black",

//		color: "white",

//		display: 'flex',
//		justifyContent: 'center',
		borderRadius: 0
		
	};



function compare(a,b) {
  if (a.score > b.score)
    return -1;
  if (a.score < b.score)
    return 1;
  return 0;
}

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
    var newG  = {backgroundColor: "white"}
//    var summaries = <SourceCard summary={dict} />
    var option = {'precision':2};
    var sort_scores = this.state.news.sort(compare);
    var output = this.state.news.map((n, index) => {
            return <SourceCard  text={n.source} score={Math.round(n.score*1000)/1000} />
     });
/*    var summaries = []
    for (var key in dict) {
      summaries.push(<SourceCard k={key} scores={dict[key]}/>);
    }*/
    return (

      <div style={newG}>
        <div style={signupStyle}>
          {"Quantifying the bias and sensationalism of popular news sources (higher the better). More information on calculations: "}

			<Link style={capStyle2} to={'/aboutus'} > here </Link> 
        </div>
	{output}
      </div>
    );
  }
}

export default SourceRatings;
