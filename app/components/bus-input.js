import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Component.extend({
	model: null,
	store: inject.service(),
	brands: null,
	destination: null,
	callback: null,

	init() {
		this._super(...arguments);
		this.set("brands", this.get("store").findAll('brand'));
		const promise = this.get('brands');
      	promise.then((results) => {
      		this.set('destination', results.get("firstObject"));
      		this.get("model").brandID = this.get('destination').id;
  	 	});
	}, 

	actions: {
		postBus() {
			let bus = this.get("model");			
			bus.save();
			this.get("callback")();
		},
		chooseDestination(brand) {
      		this.set('destination', brand);
      		this.get("model").brandID = brand.id;
      		// this.calculateRoute();
      		// this.updatePrice();
    }
	}
});