import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		console.log("Im going to get drivers");

		return this.get('store').query('staff',{type: "support"});
	}
});
