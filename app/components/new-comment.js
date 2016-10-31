import Ember from 'ember';

export default Ember.Component.extend({
    addNewComment: false,
    actions: {
      commentFormShow() {
        this.set('addNewComment', true);
      },
      saveComment(params) {
        $('#new-comment').hide();
        var params = {
          user: this.get('user'),
          title: this.get('title'),
          description: this.get('description'),
          post: this.get('post')
        };
        this.set('addNewComment', false);
        this.sendAction('saveComment', params);
      }
    }
});
