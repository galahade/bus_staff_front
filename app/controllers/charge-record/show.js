import Ember from 'ember';

export default Ember.Controller.extend({
	backURL: 'charge-record.index',
	readonly: true,
	actions: {
		doRefresh: function () {
			this.transitionToRoute(this.get('backURL'), { queryParams: { busID: this.model.get("bus").get("id") }});
	   	}
   	}
});
