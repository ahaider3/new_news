import alt from '../alt';
import SourceRatingsActions from '../actions/SourceRatingsActions';

class SourceRatingsStore {
  constructor() {
    this.bindActions(SourceRatingsActions);
    this.characters = [];
    this.news = [];
    this.response = undefined;
  }

  onGetSourceRatingsSuccess(data) {
    console.log("HIHI");
 //   this.cards =[5];
    this.news = data;
    this.response = true;
  }

}

export default alt.createStore(SourceRatingsStore);
