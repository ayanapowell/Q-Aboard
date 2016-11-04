import Ember from 'ember';

export function postPopularity(params) {
  var post = params[0];

  if(post.get('comments').get('length') >= 5) {
    return Ember.String.htmlSafe('<i class="lightning icon large"></i>');
  }
}

export default Ember.Helper.helper(postPopularity);
