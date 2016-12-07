import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  gen: null,
  res: null,

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
        alert('Record Saved!');
      });

    },

    undo() {
      location.reload();
    },

    resOption(option){
      this.set('res', option);
    },
    genOption(option){
      this.set('gen', option);
    },

  }

});
