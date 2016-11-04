import Ember from 'ember';

export default Ember.Component.extend({
  commentsFilled: false,
  actions: {
    commentFormShow() {
      $('#new-comment').transition('slide down');
    },
    showComments() {
      $('.hidden-comments').transition('slide down');
    }
  }
});
