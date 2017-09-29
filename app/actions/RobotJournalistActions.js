import alt from '../alt';
import $ from 'jquery';

class RobotJournalistActions {
  constructor() {
    this.generateActions(
      'getRobotJournalistSuccess',
      'getRobotJournalistFail'
    );
  }

  getRobotJournalist(comp) {

    console.log('IN AJAX');
    $.ajax({ url: '/api/rj' })
      .done((data) => {
        console.log(data)
        this.actions.getRobotJournalistSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getRobotJournalistFail(jqXhr)
      });
  }
}

export default alt.createActions(RobotJournalistActions);
