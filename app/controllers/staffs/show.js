import Ember from 'ember';

export default Ember.Controller.extend({
	backURL: 'staffs.index',
	readonly: true,
	actions: {
		doRefresh: function () {
			this.transitionToRoute(this.get('backURL'));
	   	}
   	}
});
