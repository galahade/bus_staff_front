import Ember from 'ember';

export default Ember.Controller.extend({
	backURL: 'staffs.index',
	readonly: false,
	actions: {
		doRefresh: function () {
 			this.transitionToRoute('staffs.index');
   		}
	}
});