import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm(post) {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        username: this.get('username'),
        title: this.get('title'),
        content: this.get('content')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
