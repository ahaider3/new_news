import React from 'react';
import {Link} from 'react-router';
//var PieChart = require('react-d3-components').PieChart;
var bg_col = "rgba(252,251,227,1)"
import {VictoryPolarAxis, VictoryPie, VictoryChart} from "victory";
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
//		backgroundColor: "rgba(152, 251, 152, 0.9)",
		color: "rgba(252,251,227,1)",

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
    console.log(this.props.scores);
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
    var backColor = {backgroundImage: "url(http://www.misucell.com/data/out/10/IMG_386461.png)"};

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
    );
  }
}

export default SourceCard;


//	<PieChart data={pie_data} width={600} height={400} margin={{top: 10, bottom: 10, left: 100, right: 100}} />
