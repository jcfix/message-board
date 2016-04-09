import Ember from 'ember';
import moment from 'moment';


export default Ember.Component.extend({
 addNewQuestion: false,
 actions: {
    questionFormShow() {
    this.set('addNewQuestion', true);
    },

    save1() {
      var date = new Date();
      date = date.toString().substring(4, 15);
      var momentDate = moment(date).format('MM/DD/YYYY');
      var params = {
         question: this.get('question') ? this.get('question'): "",
         author: this.get('author') ? this.get('author'): "",
         message: this.get('message') ? this.get('message'): "",
         date: momentDate,
      };
      console.log(date);
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
