import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
    launchConfirmDialog() {
      if(this.get("initData") != null) {
          this.get("initData")();
      }
      this.set('confirmShown', true);
    },

    submitConfirm() {
      // trigger action on parent component
      const promise = this.get('onConfirm') (this.get('confirmValue'));
      try {
        promise.then(() => {
          this.set('confirmShown', false);
        });
      } catch(e) {
        
      }
      this.set('confirmShown', false);
    },

    cancelConfirm() {
      if(this.get("cancel") != null) {
        this.get("cancel")();
      }
      this.set('confirmShown', false);
    }
  }
});
