import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save1() {
      var date = new Date();
      date = date.toString().substring(4, 15);
      var momentDate = moment(date).format('MM/DD/YYYY');
      var params = {
        author: this.get('author') ? this.get('author'): "",
        response: this.get('response') ? this.get('response'): "",
        question: this.get('question'),
        date: momentDate,
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
