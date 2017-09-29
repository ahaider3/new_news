import React from 'react';
import {Link} from 'react-router';


class AboutUs extends React.Component{

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
		padding: 10,
		position: "relative",
		left: "25px",
		margin: 0,
		fontSize: 16,
	//	color: "rgba(252,251,227,1)",
		color: "black",

//		color: "white",

//		display: 'flex',
//		justifyContent: 'center',
		borderRadius: 0
		
	};
    return ( 
		
		<div style={headerStyle}> 

		{"World News Analytics aims to present the world's news through the lens of statistics. The goal is to reduce yellow journalism and sensationalism in modern media." }
		</div>
	
       
	);
  }
}

export default AboutUs;
