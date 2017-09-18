import alt from '../alt';
import FollowAnalysisActions from '../actions/FollowAnalysisActions';

class FollowAnalysisStore {
  constructor() {
    this.bindActions(FollowAnalysisActions);
    this.data = [];
    this.response = undefined;
    this.data1 = [];
    this.response1 = undefined;

  }

  onGetFollowAnalysisSuccess(data) {
    console.log("HIHI");
 //   this.cards =[5];
    this.data = data;
    this.response = true;
  }

  onGetFollowAnalysis1Success(data) {
    console.log("1HIHI");
 //   this.cards =[5];
    this.data1 = data;
    this.response1 = true;
  }

}
export default alt.createStore(FollowAnalysisStore);
