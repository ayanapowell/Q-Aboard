import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        username: this.get('username'),
        title: this.get('title'),
        content: this.get('content')
      };
      $('.small.modal').modal('hide');
      $('#add-post').trigger('reset');
      this.sendAction('savePost', params);
    }
  }
});
