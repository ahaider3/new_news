import alt from '../alt';
import NewsListActions from '../actions/NewsListActions';

class NewsListStore {
  constructor() {
    this.bindActions(NewsListActions);
    this.characters = [];
    this.cards = [];
    this.response = undefined;
  }

  onGetTopNewsSuccess(data) {
    console.log("HIHI");
 //   this.cards =[5];
    this.cards = data;
    this.response = true;

  }

}

export default alt.createStore(NewsListStore);
