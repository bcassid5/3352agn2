import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  isFound: false,
  searchResult: "0",

  actions: {
    search: function (num){
      var myStore = this.get('store');

      var self = this;

      alert(num);
      myStore.find('post', {number: num}).then(function (post) {
        alert(num);


        if (post.number == null){
          alert("No student exists with this id.");

        } else {
          self.set('searchResult', post.number);
          self.set('isFound', true);

        }

      });
    }
  }

});
