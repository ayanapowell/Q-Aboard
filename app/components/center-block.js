import Ember from 'ember';

export default Ember.Component.extend({
    click() {
      $('.small.modal').modal('show');
    }
});
