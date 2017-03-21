import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		doRefresh: function () {
 			this.transitionToRoute('buses.index');
   		}
	}
});
