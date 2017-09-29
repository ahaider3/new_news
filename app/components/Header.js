import React from 'react';
import {Link} from 'react-router';


class Header extends React.Component{

  render() {
   	var headerStyle = {
	 	fontFamily: "HelvectiaNeue-Light",
		fontWeight: "lighter",
//		postion: 'absolute',
//		backgroundColor: "rgba(152, 251, 152, 0.9)",
//		width: "100%",
//	        backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmaUMq-RyV2XkjO7kHmPiLOndAzeLErKuUBHfJ_TJoKdyYj3vb)",
		backgroundColor: "white",
		textAlign: "center",
                verticalAlign:"center",
		padding: 0,
		position: "relative",
		left: "25px",
		margin: 0,
		fontSize: 60,
	//	color: "rgba(252,251,227,1)",
		color: "black",

//		color: "white",

//		display: 'flex',
//		justifyContent: 'center',
		borderRadius: 0
		
	};
   	var capStyle = {
	 	fontFamily: "HelvectiaNeue-Light",
		fontWeight: "lighter",
//		backgroundColor: "rgba(152, 251, 152, 0.9)",
		textAlign: "left",
                position:'absolute',
		padding: 10,
		float: 'left',
		top: "-5px",
		margin: 0,
		fontSize: 10,
//		color: "rgba(252,251,227,1)",
		color:"black",
		justifyContent: 'left',
		textDecoration: 'none',

//		color: "white",
		borderRadius: 0
	};
	var capStyle21 = {
	 	fontFamily: "HelvectiaNeue-Light",
		fontWeight: "lighter",
//		backgroundColor: "rgba(152, 251, 152, 0.9)",
		textAlign: "left",
                position:'absolute',
		padding:0,
		left: 1630,
		top:10,
//		marginLeft: "80px",
//		top: '-85px',
//                left:-"-500px",
		margin: 0,
		fontSize: 14,
//		color: "rgba(252,251,227,1)",
		color:"black",
//		justifyContent: 'right',
		textDecoration: 'none',

//		color: "white",
		borderRadius: 0
	};

   	var capStyle20 = {
	 	fontFamily: "HelvectiaNeue-Light",
		fontWeight: "lighter",
//		backgroundColor: "rgba(152, 251, 152, 0.9)",
		textAlign: "right",
                position:'absolute',
		padding: 10,
		float: 'right',
		margin: 0,
		fontSize: 10,
		color: "rgba(252,251,227,1)",
		justifyContent: 'right',
		textDecoration: 'none',

//		color: "white",
		borderRadius: 0
	};

   	var capStyle1 = {
	 	fontFamily: "HelvectiaNeue-Light",
		fontWeight: "lighter",
//		backgroundColor: "rgba(152, 251, 152, 0.9)",
//		color: "rgba(252,251,227,1)",
		color:"black",
		textDecoration: 'none',
		fontSize: 14,	
		margin:10,

	};
   	var capStyle2 = {
//		backgroundColor: "rgba(152, 251, 152, 0.9)",
//		color: "rgba(252,251,227,1)",
		color:"black",
		textDecoration: 'none',

	};

//		<div class="col-md-6 col-md-offset-3" style={headerStyle}> 
//   var t ={{borderStyle: "solid", borderWidth:"thin", borderColor:"black"}} 
    return ( 
	<div class="row" style={{borderBottom:"1px solid black"}} >
		
		<div style={headerStyle}> 

			<Link to={'/'} style={capStyle2} > News Powered by Data </Link> 

		</div>
		<div style={capStyle21}> 

                <Link to={'/robotJournalist'} style={capStyle1}> Journalism Powered by AI </Link>
               </div>

		<div style={capStyle}> 
		<Link to={'/sources'} style={capStyle1} > Biases of the Media</Link>
		 <Link to={'/trends'} style={capStyle1}> News Trends </Link>

		</div>
	
        </div>
	);
  }
}

export default Header;
