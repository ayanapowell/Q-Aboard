import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    destroyPost(post) {
      if(confirm("Are you sure you want to delete this post?")) {
        $('.trash').transition('pulse');
        this.sendAction('destroyPost', post);
      }
    },
    showUpdateForm() {
      $('.large.modal').modal('show');
    },
    update(post, params) {
      this.sendAction('update', post, params);
    }
  }
});
