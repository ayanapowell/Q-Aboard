import Ember from 'ember';

export default Ember.Component.extend({
  showComments: false,
  actions: {
    showComments() {
      this.set('showComments', true);
    }
  }
});
