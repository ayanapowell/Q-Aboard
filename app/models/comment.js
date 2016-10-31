import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  post: DS.belongsTo('post', { async: true})
});
