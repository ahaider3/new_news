import React from 'react';
import {Link} from 'react-router';
import Img from 'react-image-load';
import TweetCardStore from '../stores/TweetListStore';
import {Route} from 'react-router-dom';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import * as d3 from 'd3';



//var PieChart = require('react-d3-basic').PieChart;
//var PieChart = ReactD3.PieChart;
var PieChart = require('react-d3-components').PieChart;
var BarChart = require('react-d3-basic').BarChart;
var LineChart = require('react-d3-basic').LineChart;
import WorldMap from './misc/WorldMap';


//var generalChartData = require('dsv?delimiter=,!../data/pie_test.csv')
//import { Arc } from './misc/Arc';
import Arc from './misc/Arc';

   	var titleStyle = {
	 	fontFamily: "helvetica",
		fontWeight: "bold",
//		backgroundColor: "rgba(152, 251, 152, 0.9)",
		width: "100%",
		textAlign: "center",
		padding: 10,
		margin: 0,
		fontSize: 15,
	        color: "rgba(252,251,227,1)",
		display: 'flex',
		justifyContent: 'center',
		borderRadius: 0
		
	};


var buttonStyle = {
		fontSize: "1em",
		width: "20%",
		height: 60,
		margin: 10,
		fontFamily: "monospace",
		color: "#333",
		fontWeight: "bold",
		lineHeight: "3px"
};

function CollaspeButton(props){
	return(
	<button className="btn btn-default" style={buttonStyle} onClick={props.onClick}>
	  Collaspe Info
	 </button>
	);
}
function MoreInfoButton(props){
	return(
	<button className="btn btn-default" style={buttonStyle} onClick={props.onClick}>
	  MoreInfo
	 </button>
	);
}
class TweetLabel extends React.Component {
  constructor(props){
    super(props)

  }
  onClick(){
//    e.preventDefault()
    this.context.router.push('/')
//    window.location ='/basic';
  }
  render() {
 	var labelStyle = {
	 	fontFamily: "helvetica",
		fontWeight: "lighter",
//		backgroundColor: "rgba(152, 251, 152, 0.2)",
		width: "60%",
		textAlign: "center",
		padding: 10,
		margin: 0,
		fontSize: 15,
//		color: "black"
		color: "rgba(252,251,227,1)",
		
	};

	var squareStyle = {
		padding: 10,
		margin: 5,
		display: "inline-block",
		justifyContent: "space-between",
		height: 150,
		width: "30%"
	};

    var news_temp1 = [].concat.apply([], this.props.tweets)
        console.log('minceck')
        console.log(this.props.text)
	return (
	//	<div style={labelStyle}><Link to={{pathname: '/basic/tweets', query:this.props.text}}> {this.props.text}</Link>a
		<div style={squareStyle} key={this.props.text}>
			<div style={labelStyle}>
			{this.props.text}
			</div>

//		{this.props.children}
		</div>
//                const Button = () => (
//		<Route render={({ history }) => (
                 
//		 <div style={labelStyle}>
//		 <Link to='/'>Check</Link></div>
/*       		  <button 
		    className="btn btn-default"
		    style={labelStyle}
		    onClick={this.onClick}>
                    {this.props.text}
		    </button>*/
//			<div style={labelStyle}>{this.props.text}</div>
//	)} />
//	)} />
	);//);
}
}

class TweetGraph extends React.Component {
  constructor(props){
    super(props)
    this.pie = d3.pie()
		 .value((d) => d.value);
    this.colors = d3.scaleOrdinal(d3.schemeCategory10);

  }

  arcGen(d, i) { 
    return (
       <Arc key={`arc-${i}`}
        data={d}
        innerRadius={100}
        outerRadius={200}
        color={this.colors(i)} />
  );
 }
 
  genPie(){
  var data= [{"label":"one", "value":20},
        {"label":"two", "value":50}];
  let pie = this.pie(data),
    translate = `translate(${180}, ${360})`;
  return (
    <g transform={translate}>
    {pie.map((d, i) => this.arcGen(d, i))}
    </g>
   )
  }
  createPieChart(){
    

  }
  createBarChart() {
      const node = this.node
      const dataMax = max(this.props.sentiments)
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, 500])

   select(node)
      .selectAll('rect')
      .data(this.props.sentiments)
      .enter()
      .append('rect')
   
   select(node)
      .selectAll('rect')
      .data(this.props.sentiments)
      .exit()
      .remove()
   
   select(node)
      .selectAll('rect')
      .data(this.props.sentiments)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 25)
      .attr('y', d => 500 - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25)
   }

  componentDidMount(){
    this.createBarChart()
  }

  componentDidUpdate(){
    this.createBarChart()
  }


render() {
/*      var chartSeries = [ 
	{ "field": "<2",
	  "name": "<2"
	},
	{
	  "field":">2",
	  "name": ">2"
	}
      ];*/
      var chartSeries = [
	{ 
	  field: 'y',
	  name: 'Frequency'
	}
      ];
      var num_data = this.props.sentiments.map((d, ind) => {
	 return {x: d, y: 8};
      });
      var pos = [];
      console.log(this.props.sentiments.length)
      for (var i = 0; i < this.props.sentiments.length; i ++) {
          if (this.props.sentiments[i] >= 3){
            pos.push(3);
          }
      }

      var neg = [];
      console.log(this.props.sentiments.length)
      for (var i = 0; i < this.props.sentiments.length; i ++) {
          if (this.props.sentiments[i] < 2){
            neg.push(3);
          }
      }
      var pie_data = { 
	label: 'Sentiments',
        values: [{x: 'Positive', y:pos.length, color:'white'}, {x: 'Negative', y:neg.length}, 
		{x:'Neutral', y: this.props.sentiments.length-pos.length-neg.length}]};

      var data= {label: '', values: num_data};
      var x = function(d){
        return d.x.toString();
      };
      var value = function(d){
        return d.toString();
      };
//      var xScale = 'identity';
      var xScale = 'ordinal';
      var xLabel = "Sentiment";
      var yLabel = "Frequency";
      var yTicks=[10];
      console.log(num_data);
      var mapBG = {
        fontFamily: "monospace",
	fontWeight: "bold",
	backgroundColor: "grey",
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
      var graphBG = {
        fontFamily: "helvetica",
	fontWeight: "bold",
	width: "100%",
	textAlign: "center",
	padding: 10,
	margin: 0,
	fontSize: 15,
	color: "white",
	display: 'flex',
	justifyContent: 'center',
	borderRadius: 0

	};

      return ( 
      <div>
       <div style={mapBG}>
        <WorldMap />
       </div>
      <div style={titleStyle}>
	How the world feels...
      </div>
      <div style={graphBG}>
	<PieChart data={pie_data} color={"white"} width={600} height={400} margin={{top: 10, bottom: 10, left: 100, right: 100}} />
       
      </div>
      </div>
    );
   }
}


class TweetCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = TweetCardStore.getState();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onChange(state) {
    this.setState(state);
  }
  handleMoreInfo(){
    this.setState({showAnalysis: true});
  }

  handleReduceInfo(){
    this.setState({showAnalysis: false});
  }

  render() {
	var squareStyle = {
		padding: 10,
		margin: 5,
		display: "inline-block",
		justifyContent: "space-between",
		height: 150,
		width: "30%"
	};
    let text = null;
    let button = null;
    if (this.state.showAnalysis) {
  	text = this.props.desc;
	button = <CollaspeButton onClick={this.handleReduceInfo}/>;

    }
    else {
    	text = this.props.text;
	button = <MoreInfoButton onClick={this.handleMoreInfo}/>;
	console.log("Have Button");
    }
    console.log(this.state.showAnalysis);
    var tweets = this.props.text.map((tweet, index) => {
	return (
		<TweetLabel text={tweet} />

     	);
    });
    var tweets_loc = this.props.loc.map((l, index) => {
	return (
		<TweetLabel text={l} />

     	);
    });
    var tweet_graph = <TweetGraph sentiments={this.props.sentiments} />
    console.log("DOUBLE")
    console.log(tweets_loc)


    return (
	<div>
        <div  key = {this.props.text}>

	{tweet_graph}
	
	<div style={titleStyle}>
	  What the world says...
	</div>
	{tweets}
	{tweets_loc}

      </div>
      </div>

    );
  }
}

export default TweetCard;
//	<BarChart data = {num_data} width={700} height = {400} chartSeries={chartSeries} x={x} 
//	xScale={xScale} xLabel={xLabel} yLabel={yLabel} yTicks={yTicks} />
//<LineChart data={num_data} chartSeries={chartSeries} width={700} height={400} x={x} xScale={xScale}/>
//      <svg ref={node => this.node = node}
  //    width={500} height={500}>
    //  </svg>

