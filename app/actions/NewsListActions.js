import alt from '../alt';
import $ from 'jquery';
class NewsListActions {
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

export default alt.createActions(NewsListActions);
