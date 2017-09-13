import alt from '../alt';
import TweetListActions from '../actions/TweetListActions';

class TweetListStore {
  constructor() {
    this.bindActions(TweetListActions);
    this.characters = [];
    this.cards = [];
    this.currCards = [];
  }

  onGetTopNewsSuccess(data) {
    console.log("HIHI");
 //   this.cards =[5];
    this.cards = data;
  }

}

export default alt.createStore(TweetListStore);
