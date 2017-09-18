import React from 'react';
import {Link} from 'react-router';
import Img from 'react-image-load';
import NewsCardStore from '../stores/NewsCardStore'
import {Route} from 'react-router-dom';


   	var titleStyle = {
	 	fontFamily: "helvetica",
		fontWeight: "lighter",
//		backgroundColor: "rgba(152, 251, 152, 0.9)",
		color: "rgba(252,251,227,1)",

		height: "100px",
		
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
	 	fontFamily: "helvetica",
		fontWeight: "lighter",
		backgroundColor: "rgba(152, 251, 152, 0.2)",
		width: "60%",
		textAlign: "center",
		padding: 10,
		margin: 0,
		fontSize: 15,
		textDecoration: 'none',
		color: "black"
		
	};
        var linkStyle = {

	backgroundImage: "url(https://image.shutterstock.com/z/stock-photo-closeup-old-and-pale-rough-red-cement-wall-background-in-black-and-white-tone-370690043.jpg)",
	textDecoration:'none',
	color:'black'
	};
	var bareStyle = {

	textDecoration:'none',
	color: "rgba(252,251,227,1)",

//	color:'rgba(108,123,139,1)'
//	color:'black'

	};

    var news_temp1 = [].concat.apply([], this.props.tweets)

	return (
	//	<div style={labelStyle}><Link to={{pathname: '/basic/tweets', query:this.props.text}}> {this.props.text}</Link>
		<div><Link to={'/basic/tweets/' + this.props.id} style={bareStyle}> {this.props.text}</Link>

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
		height: "100px",
		width: "46%",
		borderRadius: 10

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
    var percent_width= (this.props.score[1]/this.props.max)
    var max_width=100
    var curr_width = Math.ceil(percent_width *max_width).toString();
    var max_height=10
    console.log(percent_width);
    console.log(this.props.max);
    return (

        <div style={squareStyle} key = {this.props.text}>
          <div style={titleStyle}>
		Popularity Score: 
                <svg style={{display: "block", height: "100px"}}>
                 <rect height={max_height} width={max_width+10} fill={"rgba(56,56,56,1)"}></rect>
		 <rect height={max_height} width={curr_width} fill="red"></rect>
		</svg>
         </div>
		<Label text={this.props.desc} id={this.props._id}/>
        </div>
    );
  }
}

export default NewsCard;
	/*	<Img
		   className="imgResponsive"
		   height="150"
		   width="60%"
		   src={this.props.url}
		/>
*/
