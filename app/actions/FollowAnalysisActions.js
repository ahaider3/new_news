import alt from '../alt';

class FollowAnalysisActions {
  constructor() {
    this.generateActions(
      'getFollowAnalysisSuccess',
      'getFollowAnalysisFail'
    );
  }

  getFollowAnalysis(comp) {

    console.log('IN AJAX');
    $.ajax({ url: '/api/followAnalysis' })
      .done((data) => {
        console.log(data)
        this.actions.getFollowAnalysisSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getFollowAnalysisFail(jqXhr)
      });
  }
}

export default alt.createActions(FollowAnalysisActions);
