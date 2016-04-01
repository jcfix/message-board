import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        book: this.get('question.book') ? this.get('question.book'): "",
        question: this.get('question.question') ? this.get('question.question'): "",
        author: this.get('question.author') ? this.get('question.author'): "",
        message: this.get('question.message') ? this.get('question.message'): "",
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
