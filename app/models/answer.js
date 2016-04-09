import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  response: DS.attr(),
  date: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
