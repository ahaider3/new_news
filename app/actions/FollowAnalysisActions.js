import alt from '../alt';

class FollowAnalysisActions {
  constructor() {
    this.generateActions(
      'getFollowAnalysis1Success',
      'getFollowAnalysis1Fail',
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
  getFollowAnalysis1(comp) {

    console.log('IN AJAX1');
    $.ajax({ url: '/api/followAnalysis1' })
      .done((data) => {
        console.log(data)
        this.actions.getFollowAnalysis1Success(data)
      })
      .fail((jqXhr) => {
        this.actions.getFollowAnalysis1Fail(jqXhr)
      });
  }
}
export default alt.createActions(FollowAnalysisActions);
