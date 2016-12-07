import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  gen: null,
  res: null,
  firstRecord: null,
  lastRecord: null,
  prevRecord: null,
  nextRecord: null,

  actions: {
    save: function (id) {

      var myStore = this.get('store');

      var self = this;
      myStore.findRecord('post', id).then(function (post) {

        post.set('number', self.get('selectedModel.number'));
        post.set('firstName', self.get('selectedModel.firstName'));
        post.set('lastName', self.get('selectedModel.lastName'));
        post.set('DOB', self.get('selectedModel.DOB'));
        if (self.get('res') == null){
          post.set('residency', self.get('selectedModel.residency'));
        } else {
          post.set('residency', self.get('res'));
        }
        if (self.get('gen') == null){
          post.set('gender', self.get('selectedModel.gender'));
        } else {
          post.set('gender', self.get('gen'));
        }

        post.save();
        //alert('Record Saved!');
      });
      this.get('routing').transitionTo('posts' );
    },

    undo() {
      location.reload();
    },

    firstRecord(){
      var myStore = this.get('store');

      var self = this;
      myStore.query('post', {number: 111111111}).then(function (post) {
        //console.log(post);
        //console.log(post.content[0].record.data.firstName);

        self.set('firstRecord', post.content[0].id);

      });
    },

    lastRecord(){
      var myStore = this.get('store');

      var self = this;
      myStore.query('post', {number: 111111111}).then(function (post) {
        //console.log(post);
        //console.log(post.content[0].record.data.firstName);

        self.set('lastRecord', post.content[99].id);

      });
    },

    previousRecord(){
      var myStore = this.get('store');

      var self = this;
      myStore.query('post', {number: 111111111}).then(function (post) {
        //console.log(post);
        //console.log(post.content[0].record.data.firstName);
        var prev = -1;
        var current = self.get('selectedModel.id');

        for (var i =0; i<100;i++){
          if (current == post.content[i].id){
            prev = i-1;
          }
        }

        self.set('prevRecord', post.content[prev].id);

      });
    },

    nextRecord(){
      var myStore = this.get('store');

      var self = this;
      myStore.query('post', {number: 111111111}).then(function (post) {
        //console.log(post);
        //console.log(post.content[0].record.data.firstName);
        var next = -1;
        var current = self.get('selectedModel.id');

        for (var i =0; i<100;i++){
          if (current == post.content[i].id){
            next = i+1;
          }
        }

        self.set('nextRecord', post.content[next].id);

      });
    },

    resOption(option){
      this.set('res', option);
    },
    genOption(option){
      this.set('gen', option);
    },

  }

});
