import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  isFound: false,
  searchResult: "0",

  actions: {
    search: function (num){
      var myStore = this.get('store');

      var self = this;
      myStore.query('post', {number: num}).then(function (post) {
        //console.log(post);
        //console.log(post.content[0].record.data.firstName);

        for (var i=0; i<100; i++){
          if (post.content[i].record.data.number == num){
            self.set('searchResult', post.content[i].id);
            self.set('isFound', true);
            break;
          }
        }

        if (self.get('isFound') == false){
          alert("No student exists with this id.");
        }
      });
    }
  }

});
