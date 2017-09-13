import React from 'react';
import {Link} from 'react-router';
var PieChart = require('react-d3-components').PieChart;

      var graphBG = {
        fontFamily: "monospace",
	fontWeight: "bold",
	width: "100%",
	textAlign: "center",
	padding: 10,
	margin: 0,
	fontSize: 15,
	color: "white",
	display: 'flex',
	justifyContent: 'center',
	borderRadius: 20

	};

   	var titleStyle = {
	 	fontFamily: "monospace",
		fontWeight: "bold",
		backgroundColor: "rgba(152, 251, 152, 0.9)",
		width: "100%",
		textAlign: "center",
		padding: 10,
		margin: 0,
		fontSize: 15,
		color: "black",
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
      var pie_data = { 
	label: 'Objectivity',
        values: [{x: 'Very Subjective', y:scores[2]}, {x: 'Subjective', y:scores[1]}, 
		{x:'Objective', y: scores[0]}]};

//    var news_temp1 = [].concat.apply([], news_temp)*/
    var backColor = {backgroundImage: "url(http://www.misucell.com/data/out/10/IMG_386461.png)"};

    return (
      <div>
      <div style={titleStyle}>
	{this.props.k}
      </div>
      <div style={graphBG}>
	<PieChart data={pie_data} width={600} height={400} margin={{top: 10, bottom: 10, left: 100, right: 100}} />
       
      </div>
      </div>
    );
  }
}

export default SourceCard;
