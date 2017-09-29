import alt from '../alt';
import RobotJournalistActions from '../actions/RobotJournalistActions';

class RobotJournalistStore {
  constructor() {
    this.bindActions(RobotJournalistActions);
    this.characters = [];
    this.news = [];
    this.response = undefined;
  }

  onGetRobotJournalistSuccess(data) {
    console.log("HIHI");
 //   this.cards =[5];
    this.rj = data;
    this.response = true;
  }

}

export default alt.createStore(RobotJournalistStore);
