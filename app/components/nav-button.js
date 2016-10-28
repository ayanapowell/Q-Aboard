import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    $('.nav-contents').transition('slide right');
  }
});
