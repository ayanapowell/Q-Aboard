import Ember from 'ember';

export function snippet(params) {
  var content = params[0];
  if (content.length > 100) {
    var snippet = content.substring(0, 100) + " ... ";
    return new Ember.Handlebars.SafeString(snippet);
  } else {
    return content;
  }
}

export default Ember.Helper.helper(snippet);
