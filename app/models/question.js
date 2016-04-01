import DS from 'ember-data';

export default DS.Model.extend({
  book: DS.attr(),
  question: DS.attr(),
  author: DS.attr(),
  message: DS.attr()
});
