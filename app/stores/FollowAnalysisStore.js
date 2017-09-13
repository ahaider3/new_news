import alt from '../alt';
import FollowAnalysisActions from '../actions/FollowAnalysisActions';

class FollowAnalysisStore {
  constructor() {
    this.bindActions(FollowAnalysisActions);
    this.data = [];
    this.response = undefined;
  }

  onGetFollowAnalysisSuccess(data) {
    console.log("HIHI");
 //   this.cards =[5];
    this.data = data;
    this.response = true;
  }

}

export default alt.createStore(FollowAnalysisStore);
