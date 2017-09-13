import React from 'react';
import {Link} from 'react-router';
import Img from 'react-image-load';
import NewsCardStore from '../stores/NewsCardStore'
import {Route} from 'react-router-dom';

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
class Label extends React.Component {
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
	 	fontFamily: "monospace",
		fontWeight: "bold",
		backgroundColor: "rgba(152, 251, 152, 0.2)",
		width: "60%",
		textAlign: "center",
		padding: 10,
		margin: 0,
		fontSize: 15,
		color: "#66FFFF"
		
	};
    var news_temp1 = [].concat.apply([], this.props.tweets)

	return (
	//	<div style={labelStyle}><Link to={{pathname: '/basic/tweets', query:this.props.text}}> {this.props.text}</Link>
		<div style={labelStyle}><Link to={'/basic/tweets/' + this.props.id}> {this.props.text}</Link>

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

class NewsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = NewsCardStore.getState();

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
    return (

        <div style={squareStyle} key = {this.props.text}>
		<Img
		   className="imgResponsive"
		   height="150"
		   width="60%"
		   src={this.props.url}
		/>
		<Label text={text} id={this.props._id}/>

        </div>
    );
  }
}

export default NewsCard;
