import Ember from 'ember';

export default Ember.Route.extend({
  return this.store.findRecord('question', params.question_id)
});
