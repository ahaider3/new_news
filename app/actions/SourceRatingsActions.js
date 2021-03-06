import alt from '../alt';
import $ from 'jquery';

class SourceRatingsActions {
  constructor() {
    this.generateActions(
      'getSourceRatingsSuccess',
      'getSourceRatingsFail'
    );
  }

  getSourceRatings(comp) {

    console.log('IN AJAX');
    $.ajax({ url: '/api/newsRatings' })
      .done((data) => {
        console.log(data)
        this.actions.getSourceRatingsSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getSourceRatingsFail(jqXhr)
      });
  }
}

export default alt.createActions(SourceRatingsActions);
