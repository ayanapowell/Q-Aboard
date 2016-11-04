import Ember from 'ember';

export default Ember.Component.extend({
    addNewComment: false,
    actions: {
      commentFormShow() {
        this.set('addNewComment', true);
      },
      saveComment() {
        var user = this.get('user');
        var title = this.get('title');
        var description = this.get('description');
        var post = this.get('post');
        var params = {user, title, description, post};
        if(user === "" || title === "" || description === "" || post === "") {
          alert('All fields required');
        } else {
          this.sendAction('saveComment', params);
          this.set('addNewComment', false);
          $('#new-comment').hide();
        }
      }
    }
});
