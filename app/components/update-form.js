import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
      var params = {
        username: this.get('username'),
        title: this.get('title'),
        content: this.get('content')
      };
      $('.updatemodal').modal('hide');
      $('#update-form').trigger('reset');
      this.sendAction('update', post, params);
    }
  }
});
