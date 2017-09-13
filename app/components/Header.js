import React from 'react';


class Header extends React.Component{

  render() {
   	var headerStyle = {
	 	fontFamily: "monospace",
		fontWeight: "bold",
		backgroundColor: "rgba(152, 251, 152, 0.9)",
		width: "60%",
		textAlign: "center",
		padding: 10,
		margin: 10,
		fontSize: 15,
		color: "black",
		display: 'flex',
		justifyContent: 'center',
		borderRadius: 20
		
	};

    return ( 
	<div class="row">
		<div class="col-md-6 col-md-offset-3" style={headerStyle}> News Powered by Data </div>
        </div>
	);
  }
}

export default Header;
