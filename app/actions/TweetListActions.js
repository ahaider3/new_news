import alt from '../alt';

class TweetListActions {
  constructor() {
    this.generateActions(
      'getTopNewsSuccess',
      'getTopNewsFail'
    );
  }

  getTopNews() {

    console.log('IN AJAX');
    $.ajax({ url: '/api/basic' })
      .done((data) => {
        this.actions.getTopNewsSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getTopNewsFail(jqXhr)
      });
  }
}

export default alt.createActions(TweetListActions);
