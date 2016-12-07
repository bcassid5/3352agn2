import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //return this.store.findAll('post');
    //console.log(this.get('store').queryRecord('post', {number: "250123456"}));
    this.store.query('post', {filter: {_id: "5845f7d0acc656a633be0aa5"}}).then(function(result){
      console.log(result);
      return result;
    });
  }
});
