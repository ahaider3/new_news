import React from 'react';
import {Link} from 'react-router';
import FollowAnalysisStore from '../stores/FollowAnalysisStore'
import FollowAnalysisActions from '../actions/FollowAnalysisActions';
var LineChart = require('react-d3-components').LineChart;
var Brush = require('react-d3-components').Brush;
var BarChart = require('react-d3-components').BarChart;

//import * as d3 from 'd3';
import {scaleTime} from 'd3-scale';
import {scaleLinear} from 'd3-scale';

import { timeParse } from 'd3-time-format';


class FollowAnalysis extends React.Component {
  constructor(props) {
    super(props);

    this.state = FollowAnalysisStore.getState();
    this.onChange = this.onChange.bind(this);
    console.log("News List Mounted");

  }

  componentDidMount() {
    console.log("News List Mounted");

    FollowAnalysisStore.listen(this.onChange);
    FollowAnalysisActions.getFollowAnalysis(this);
 //   fetch("/api/basic")
   //    .then((response) => response.json)
  }

  componentWillUnmount() {
    FollowAnalysisStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    console.log("IN RENDER")
    if(!this.state.response){
      return false;
   }
    var data = this.state.data.map((n, index) => {
//	  var n = card.tweets.map((tweet, index1) => {
	return (
		<b> {n.text} </b>
     	);
    });

    var vals = []
    var val_dicts = {}
    for (var i = 0; i < this.state.data.length;i++){
      var src = this.state.data[i].source;
//      if (!(src in dict)){
//        dict['source'] = [];
//      }
      var date = new Date(this.state.data[i].time);
//      dict.src.push(date);
      date.setDate(date.getDate() + this.state.data[i].sentiment);
      vals.push({x: date, y: this.state.data[i].sentiment});
      if (!(src in val_dicts)){
        val_dicts[src] = []
      }
      val_dicts[src].push({x: date, y: this.state.data[i].sentiment});
    }
    var dates = vals.map((v, ind) => {
	return v.x;
    });
    
    var start_date =  new Date(Math.min.apply(null,dates));
    var end_date =  new Date(Math.max.apply(null,dates));
    var earliest_date = new Date(end_date.valueOf())
    earliest_date.setDate(earliest_date.getDate() - 10);
    var real_start = new Date(Math.max.apply(null,[start_date, earliest_date]))
    console.log(earliest_date)
    console.log('test')
    console.log(end_date)
    console.log(start_date)
    vals.sort(function(a,b){
	return b.x - a.x;
    });
    var parseDate = timeParse("%y-%b-%d");
    var sample_date = new Date(this.state.data[0].time);
    var res = []
    for (var key in val_dicts){
       var d = {label: key, values: val_dicts[key]};
       res.push(d);
    }
//    var res = [{label: 'A', values: val_dicts['BreitbartNews']}, {label:'B', values:val_dicts['cnn']}]
    var xScale = scaleTime().domain([real_start, end_date]).range([0,800])
    var yScale = scaleLinear().domain([0, 6]).range([600,0])
    var dashFunc = function(label) {
        if (label == "cnn") {
            return "4 4 4";
        }
        if (label == "BreitbartNews") {
            return "3 4 3";
        }
    }

    var widthFunc = function(label) {
        if (label == "cnn") {
            return "4";
        }
        if (label == "BreitbartNews") {
            return "2";
        }
    }

    var linecapFunc = function(label) {
        if (label == "cnn") {
            return "round";
        }
    }
//    console.log(dict['src']);
//    console.log(this.state.data.length)
    var cs = [{
      field: 'y',
      name: 'y',
      color: 'blue'}, 
      {field:'y',
       name: 'y',
       color: 'red'}]
    var x = function(d){
	return d.x;
    }
//    var news_temp1 = [].concat.apply([], news_temp)*/
    var backColor = {backgroundImage: "url(http://www.misucell.com/data/out/10/IMG_386461.png)"};
//    var summaries = <SourceCard summary={dict} />
    var summaries = []
    return (

      <div >
	<LineChart
          data={res}
	  width={800}
	  height={600}
	  x={x}
	  xScale={xScale}
	  margin={{top: 10, bottom: 50, left: 50, right: 50}}
          shapeColor={"red"}
	  stroke={{strokeDasharray: dashFunc, strokeWidth: widthFunc, strokeLinecap: linecapFunc}}
 	  />
      </div>
    );
  }
}

export default FollowAnalysis;
