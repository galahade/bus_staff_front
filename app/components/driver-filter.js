import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Component.extend({
	store: inject.service(),
	results: [],

	actions: {
		showA1A3() {
			this.get('store').query('staff', {
				driverType: 'qualified',
				type: 'driver'
			}).then((results) => this.set('results', results));
		},
		showIsInternship() {
			let dirvers = this.get('results');
			let filtedDriver = dirvers.filterBy('isInternship', true);
			this.set('results', filtedDriver);
		}
	}
});
