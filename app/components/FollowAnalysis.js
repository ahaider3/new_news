import React from 'react';
import {Link} from 'react-router';
import FollowAnalysisStore from '../stores/FollowAnalysisStore'
import FollowAnalysisActions from '../actions/FollowAnalysisActions';
//var LineChart = require('react-d3-components').LineChart;
import {VictoryLegend, VictoryAxis, VictoryChart, VictoryLine, VictoryTheme} from 'victory';
var LineChart = require('react-d3-basic').LineChart;
var Chart = require("react-d3-core").Chart
var Brush = require('react-d3-components').Brush;
var BarChart = require('react-d3-components').BarChart;
var bg="url(data:image/jpeg;base64,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)"

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
    FollowAnalysisActions.getFollowAnalysis1(this);


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
    if(!this.state.response1 || !this.state.response1){
      return false;
   }
    console.log(this.state.data1);
    var data = this.state.data.map((n, index) => {
//	  var n = card.tweets.map((tweet, index1) => {
	return (
		<b> {n.text} </b>
     	);
    });

    var vals = []
    var val_dicts = {}
    var obj_list = {}
    var obj_list1 = {}
    for (var i = 0; i <this.state.data1.length; i++){
      var src = this.state.data1[i].type;
      if (!(src in obj_list1)){
        obj_list1[src] = [];
      }
      var date = new Date(this.state.data1[i].time);
      obj_list1[src].push({x: date, y:this.state.data1[i].frequency});
    }
    for (var i = 0; i < this.state.data.length;i++){
      var src = this.state.data[i].source;
//      if (!(src in dict)){
//        dict['source'] = [];
//      }
      var date = new Date(this.state.data[i].time);
      var date1 = new Date(this.state.data[i].time);
//      dict.src.push(date);
      date.setDate(date.getDate() + this.state.data[i].sentiment);
      vals.push({x: date, y: this.state.data[i].sentiment});
      if (!(src in val_dicts)){
        val_dicts[src] = []
      }
      if (!(src in obj_list)){
        obj_list[src] = []
      }

      if (date1.getYear() >= 117 && date1.getMonth() >= 8 && date1.getDate() >=16){
      obj_list[src].push({x: date1, y: this.state.data[i].sentiment});
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
      color: 'blue'}];
    var x = function(d){
	return d.t;
    }
//    var news_temp1 = [].concat.apply([], news_temp)*/
    var backColor = {backgroundSize: "cover",
		     backgroundImage: bg ,
		     backgroundRepeat: "repeat",
                     color:"white",
		     overflow: 'hidden',
};

//    var summaries = <SourceCard summary={dict} />
    var summaries = []
    var theme_col = "rgba(252,251,227,1)"
    console.log("BEFORE");
    console.log(this.state.data1);
    return (

      <div style={backColor} >
        <div style={{width: "70%"}}>
        <VictoryChart theme={VictoryTheme.materical} scale={{x:"time"}}
		style={{data: {fill:"red"}, labels: {fill:"red"}}}>
	<VictoryLine
	 style={{
          data: { stroke: "red" },
          labels: {fontSize:2},
          parent: { border: "1px solid #ccc"}
         }}
          data={obj_list["cnn"]}
 	  />
	<VictoryLine
	 style={{
          data: { stroke: "green" },
          labels: {fontSize:2},
          parent: { border: "1px solid #ccc"}
         }}
          data={obj_list["FoxNews"]}
 	  />
	<VictoryLine
	 style={{
          data: { stroke: "teal" },
          labels: {fontSize:2},
          parent: { border: "1px solid #ccc"}
         }}
          data={obj_list["BreitbartNews"]}
 	  />

	<VictoryLegend x={105} y={200}
		centerTitle={"News Outlet"}
                orientation={"horizontal"}
		style={{border: {stroke: theme_col }}}
		data={[
			{name: "CNN ", symbol:{fill:"red"}, labels: {fill: theme_col}},
			{name: "Fox News ", symbol:{fill:"green"},  labels: {fill: theme_col}},
			{name: "Breitbart ", symbol:{fill:"teal"}, labels: {fill: theme_col}}
		]} />

      </VictoryChart>
      </div>


        <div style={{width: "70%"}}>
        <VictoryChart theme={VictoryTheme.materical} scale={{x:"time"}}
		style={{data: {fill:"red"}, labels: {fill:"red"}}}>
	<VictoryLine
	 style={{
          data: { stroke: "red" },
          labels: {fontSize:2},
          parent: { border: "1px solid #ccc"}
         }}
          data={obj_list1["cnn"]}
 	  />
	<VictoryLine
	 style={{
          data: { stroke: "green" },
          labels: {fontSize:2},
          parent: { border: "1px solid #ccc"}
         }}
          data={obj_list1["FoxNews"]}
 	  />
	<VictoryLine
	 style={{
          data: { stroke: "teal" },
          labels: {fontSize:2},
          parent: { border: "1px solid #ccc"}
         }}
          data={obj_list1["BreitbartNews"]}
 	  />

	<VictoryLegend x={105} y={200}
		centerTitle={"News Outlet"}
                orientation={"horizontal"}
		style={{border: {stroke: theme_col }}}
		data={[
			{name: "CNN ", symbol:{fill:"red"}, labels: {fill: theme_col}},
			{name: "Fox News ", symbol:{fill:"green"},  labels: {fill: theme_col}},
			{name: "Breitbart ", symbol:{fill:"teal"}, labels: {fill: theme_col}}
		]} />

      </VictoryChart>
      </div>


      </div>
    
    );
  }
}

export default FollowAnalysis;
