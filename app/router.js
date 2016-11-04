import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('postpage');
  this.route('post', {path: '/post/:post_id'});
  this.route('admin');
  this.route('favorites');
});

export default Router;
