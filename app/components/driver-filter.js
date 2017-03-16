import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Component.extend({
	store: inject.service(),

	init() {
		this._super(...arguments);
		this.get('store').findAll('driver').then((results) => this.set('results', results));
	},

	actions: {
		showA1A3() {
			this.get('store').query('driver', {
				driverType: 'qualified'
			}).then((results) => this.set('results', results));
		},
		showIsInternship() {
			this.get('store').query('driver', {
				driverType: 'internship'
			}).then((results) => this.set('results', results));
		}
	}
});
