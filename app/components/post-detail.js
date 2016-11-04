import Ember from 'ember';

export default Ember.Component.extend({
  commentsFilled: false,
  actions: {
    commentFormShow() {
      $('#new-comment').transition('slide down');
    },
    showComments() {
      $('.show-button').hide();
      $('.hide-button').addClass('hidden-button2');
      $('.hidden-comments').transition('slide down');
    },
    showComments2() {
      $('.hidden-comments').transition('slide down');
      setTimeout(function() {
        $('.hide-button').removeClass('hidden-button2');
        $('.show-button').show();
      }, 400);
    }
  }
});
