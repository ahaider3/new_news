import React from 'react';
import {Link} from 'react-router';
//var PieChart = require('react-d3-components').PieChart;
var bg_col = "rgba(252,251,227,1)"
import {VictoryPolarAxis, VictoryPie, VictoryChart} from "victory";

function normalize(s) {
  if (s == "the-huffington-post")
    return "Huffington Post";
  if (s== "cnn")
    return "CNN";
  if (s== "cnbc")
    return "CNBC";
  if (s== "bbc-news")
    return "BBC News";
  if (s== "the-economist")
    return "Economist";
  if (s== "bloomberg")
    return "Bloomberg";
  if (s== "al-jazeera-english")
    return "AlJazeera English";
  if (s== "the-wall-street-journal")
    return "Wall Street Journal";
  if (s== "breitbart-news")
    return "Breitbart News";




  return s;
}

	var squareStyle = {
		padding: 0,
		marginLeft:"5px",
		margin: "15px",
		display: "inline-block",
//		fontSize: "10px",
///                display: "flex",
//		flexDirection: "row",
//		flexWrap: "wrap",
//		justifyContent: "space-between",
//		textAlign: "justify",
		height: "85px",
		width: "20%",
//		borderRadius: 10,
		color:"red",
		borderColor: "rgba(47,79,79,.4)",
                borderStyle: "solid",
		borderWidth: "1px",

	};


/*	var squareStyle = {
		padding: "10px",
		color: "red",
//		margin: 0,
		display: "inline-block",
//		justifyContent: "space-between",
//		textAlign: "justify",
//		height: "100px",
//		width: "26%",
//		borderRadius: 10

	};
*/
      var graphBG = {
        fontFamily: "helvetica",
	fontWeight: "lighter",
	width: "60%",
        height: "10%",
	margin: 300,

	};

   	var titleStyle = {
	 	fontFamily: "helvetica",
		fontWeight: "lighter",
		backgroundColor: "yellow",
		color: "white",

		width: "100%",
		height:"30%",
		textAlign: "center",
		padding: 10,
		margin: 0,
		fontSize: 25,
		display: 'flex',
		justifyContent: 'center',
		borderRadius: 0
		
	};


   	var textStyle = {
	 	fontFamily: "helvetica",
		fontWeight: "bold",
//		backgroundColor: "rgba(204,204,0,1)",
		color: "black",

//		width: "45%",
//		height:"30%",
//		textAlign: "center",
//		padding: 10,
//		marginLeft: "35px",
		marginLeft: "5px",
//                marginLeft: 150px",
		fontSize: 25,
//		display: 'flex',
//		justifyContent: 'center',
//		borderRadius: 10
		
	};
   	var numStyle1 = {
	 	fontFamily: "helvetica",
		fontWeight: "normal",
//		backgroundColor: "blue",
		color: "rgba(47,79,79,1)",

//		width: "10%",
//		height:"30%",
//		textAlign: "center",
		padding: 10,
		margin: 0,
                marginBottom: "25px",
		fontSize: 25,
//		display: 'flex',
//		justifyContent: 'center',
//		borderRadius: 10
		
	};

   	var numStyle = {
	 	fontFamily: "helvetica",
		fontWeight: "bold",
		backgroundColor: "blue",
		color: "white",

		width: "25%",
		height:"30%",
		textAlign: "center",
		padding: 10,
                marginLeft: "250px",
		margin: 0,
		fontSize: 25,
		display: 'flex',
		justifyContent: 'center',
		borderRadius: 0
		
	};



class SourceCard extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    console.log("News List Mounted");

  }

  componentDidMount() {
    console.log("News List Mounted");

  }

  componentWillUnmount() {
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    /*console.log(this.props.scores);
    console.log(this.props.k);
    console.log("HERE");

    var scores = {}
    for (var i = 0; i < this.props.scores.length; i ++) {
      var score = this.props.scores[i];
      if (!(score in scores)){
        scores[score] = 0;
      }
      scores[score] += 1;
    }
    console.log(scores[0]);
      var pie_data = [{x: 'Very Subjective', y:scores[2]}, {x: 'Subjective', y:scores[1]}, 
		{x:'Objective', y: scores[0]}];

//    var news_temp1 = [].concat.apply([], news_temp)*/
    var percent_width= (this.props.score/1)
    var curr_width;
    var max_width=100
    var mid_width = 50;
    if (this.props.score > 0){
       curr_width = (Math.ceil(max_width * this.props.score) + mid_width).toString();
    }
    else{
	curr_width = ( mid_width - Math.ceil(max_width * (-1 * this.props.score))).toString();
    }

//    var curr_width = Math.ceil(percent_width *max_width).toString();
    var max_height=10

    var backColor = {backgroundImage: "url(http://www.misucell.com/data/out/10/IMG_386461.png)"};
    return ( 
       <div style={squareStyle}>
        
        <div style={textStyle}>
        {normalize(this.props.text)}
        </div>
        <div style={numStyle1}>
                <svg style={{display: "block", height: "10px"}}>
                 <rect height={max_height} width={max_width+10} fill={"red"}></rect>
		 <rect height={max_height} width={curr_width} fill="green"></rect>

		</svg>

	{this.props.score}

        </div>
      </div>
   );
/*
    return (
      <div style={graphBG}>
      <div style={titleStyle}>
	{this.props.k}
      </div>
      <div style={{height: "10%"}}>
       <VictoryChart polar>
  <VictoryPolarAxis
      tickValues={[0, 45, 90, 135, 180, 225, 270, 315]}
      labelPlacement="vertical"
    />
       <VictoryPie
	data={pie_data}
        radius={20}
	labelRadius={60}
	style={{labels:{fill:bg_col, fontSize:10}}}
	colorScale={["blue", "cyan", "steelblue"]}/>
      </VictoryChart>
      </div>
      </div>
    );*/
  }
}

export default SourceCard;


//	<PieChart data={pie_data} width={600} height={400} margin={{top: 10, bottom: 10, left: 100, right: 100}} />
