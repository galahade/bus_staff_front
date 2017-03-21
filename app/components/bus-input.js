import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Component.extend({
	readonly: false,
	model: null,
	store: inject.service(),
	brands: null,
	destination: null,
	goBack: null,

	init() {
		this._super(...arguments);
		this.set("brands", this.get("store").findAll('brand'));
		const promise = this.get('brands');
      	promise.then((results) => {
      		if (this.get("model").id == null) {
      			this.set('destination', results.get("firstObject"));
      			this.get("model").brandID = this.get('destination').id;
      		}else {
      			results.forEach((brand, index) => {
      				if (brand.id == this.get("model").get("brandID")) {
      		  			this.set('destination', brand);
      				}
				});
      		}
  	 	});
	}, 

	actions: {
		postBus() {
			let bus = this.get("model");			
			bus.save();
			this.get("goBack")();
		},
		chooseDestination(brand) {
      		this.set('destination', brand);
      		this.get("model").brandID = brand.id;
    	},
    	changeEditable() {
			this.toggleProperty('readonly');
		},
    	cancel() {
    		this.get("goBack")();
    	}
	}
});