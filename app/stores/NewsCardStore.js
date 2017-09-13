import alt from '../alt';
import NewsListActions from '../actions/NewsListActions';

class NewsCardStore {
  constructor() {
    this.bindActions(NewsListActions);
    this.characters = [];
    this.cards = [];
  }

  onGetTopNewsSuccess(data) {
    console.log("HIHI");
 //   this.cards =[5];
    this.cards = data;
  }

}

export default alt.createStore(NewsCardStore);
