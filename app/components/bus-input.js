import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Component.extend({
	model: null,
	store: inject.service(),
	callback: null,
	actions: {
		postBus() {
			let bus = this.get("model");			
			bus.save();
			this.get("callback")();
		}
	}
});