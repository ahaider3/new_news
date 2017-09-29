import alt from '../alt';
import AboutUsActions from '../actions/AboutUsActions';

class AboutUsStore {
  constructor() {
    this.bindActions(AboutUsActions);
    this.username="";
    this.password="";
  }

}

export default alt.createStore(AboutUsStore);
