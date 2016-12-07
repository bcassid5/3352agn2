import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr(), 
  firstName: DS.attr(), 
  lastName: DS.attr(), 
  DOB: DS.attr('string'), 
  residency: DS.attr(),
   gender: DS.attr()
});
