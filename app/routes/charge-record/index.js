import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('charge-record');
/*
		return this.get('store').query('charge-record', {
				busID: '1a853d69-e32c-4fc0-9e3a-d9aaa8df7b74'
			});
*/

	}
	
});
