import Ember from 'ember';

export default Ember.Controller.extend({
	readonly: true,

	actions: {
		changeEditable() {
			this.toggleProperty('readonly');
		},

		cancel() {
			this.toggleProperty('readonly');
		}
	}
});
