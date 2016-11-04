import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  location: DS.attr(),
  comments: DS.hasMany('comment', { async: true})
});
