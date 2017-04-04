import Ember from 'ember';

export default Ember.Controller.extend({
	backURL: 'charge-record.index',
	readonly: false,
	init() {
		this._super(...arguments);
		this.set('readonly', false);
	},
	actions: {
		doRefresh: function () {
			console.log(this.model.get("bus").get("id"));
	 			this.transitionToRoute(this.get('backURL'), { queryParams: { busID: this.model.get("bus").get("id") }});
	   	}
   	}
});
