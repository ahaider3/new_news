import alt from '../alt';

class SourceRatingsActions {
  constructor() {
    this.generateActions(
      'getSourceRatingsSuccess',
      'getSourceRatingsFail'
    );
  }

  getSourceRatings(comp) {

    console.log('IN AJAX');
    $.ajax({ url: '/api/sourceRatings' })
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
