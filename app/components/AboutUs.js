import React from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AboutUsStore from '../stores/AboutUsStore';
import $ from 'jquery';

var overStyle= {
      backgroundColor:"rgba(40,40,40,1)",
      margin: 10
  }

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


class AboutUs extends React.Component{
  constructor(props) {
    super(props);

    this.state = AboutUsStore.getState();
 //   this.onChange = this.onChange.bind(this);

  }

  handleClick(event){
    console.log(this.state.username);
    console.log("here");
    console.log(this.state.password);
    $.ajax({ 
	url: '/api/emails',
	type: "POST",
        data: {email: this.state.username}})
    this.setState({username:""})
  }

  render() {
   	var headerStyle = {
	 	fontFamily: "HelvectiaNeue-Light",
		fontWeight: "lighter",
//		postion: 'absolute',
//		backgroundColor: "rgba(152, 251, 152, 0.9)",
//		width: "100%",
//	        backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmaUMq-RyV2XkjO7kHmPiLOndAzeLErKuUBHfJ_TJoKdyYj3vb)",
//		backgroundColor: "white",
		textAlign: "center",
                verticalAlign:"center",
		padding: 10,
		position: "relative",
		left: "25px",
		margin: 0,
		fontSize: 16,
	//	color: "rgba(252,251,227,1)",
		color: "white",

//		color: "white",

//		display: 'flex',
//		justifyContent: 'center',
		borderRadius: 0
		
	};

//                          <TextField hintText={"Email Address"} floatingLabelText={"Email"} />

//			  <AppBar title="Sign Up" />
    return ( 
		<div style={overStyle}>
		<div style={headerStyle}> 

		{"World News Analytics aims to present the world's news through the lens of statistics. The goal is to reduce yellow journalism and sensationalism in modern media." }
		</div>
		<div>
		 <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
			<div style={signupStyle}>

                        <TextField floatingLabelText={"Email Address for newsletters"} hintText={"Email"} 
			onChange={(event, newValue) =>
			this.setState({username:newValue})} />

			<RaisedButton label="Submit" primary={true} backgroundColor={"black"} onClick={(event) => this.handleClick(event)} labelColor="black" />
			</div>

		 </MuiThemeProvider>
                 </div>
		</div>
	
       
	);
  }
}

export default AboutUs;
