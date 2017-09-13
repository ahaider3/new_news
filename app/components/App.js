import React from 'react';
import Footer from './Footer';
import NewsList from './NewsList';

import Header from './Header'

class App extends React.Component {
  render() {
    return (
      <div>
	<Header />
	{this.props.children}
      </div>
    );
  }
}

export default App;
