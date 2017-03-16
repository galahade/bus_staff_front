import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
    launchConfirmDialog() {
      this.set('confirmShown', true);
    },

    submitConfirm() {
      // trigger action on parent component
     
      const promise = this.get('onConfirm') (this.get('confirmValue'));
      promise.then(() => {
      	this.set('confirmShown', false);
  	  });
    },

    cancelConfirm() {
      this.set('confirmShown', false);
    }
  }
});
