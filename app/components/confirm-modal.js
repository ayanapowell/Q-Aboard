import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal() {
      $('.ui.confim-modal').modal('hide');
    },
    destroyPost(post) {
      var confirmation = this.get('yes');
      alert(confirmation);
      this.sendAction('destroyPost', post, confirmation);
    }
  }
});
