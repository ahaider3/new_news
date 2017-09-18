import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import NewsList from './components/NewsList';
import TweetList from './components/TweetList';
import SourceRatings from './components/SourceRatings';
import FollowAnalysis from './components/FollowAnalysis';



export default (
  <Route component={App}>
    <Route path='/' component={NewsList} />
 //   <Route path='/basic/tweets/:value' component={TweetList} />
    <Route path='/basic/tweets/:val' component={props => <TweetList {...props} foo="lol" />} />
//    <Route path='/tweets/:val' component={props => <TweetList {...props} foo="lol" />} />

    <Route path='/sources' component={SourceRatings} />
    <Route path='/trends' component={FollowAnalysis} />


  </Route>
);
