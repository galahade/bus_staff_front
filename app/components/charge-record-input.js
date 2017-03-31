import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Component.extend({
	store: inject.service(),
	model: null,
	readonly: true,
	buses: null,
	des_bus: null,
	drivers: null,
	destination: null,
	init() {
		this._super(...arguments);
		this.set("drivers", this.get("store").findAll('driver'));
		const promise = this.get('drivers');
      	promise.then((results) => {
      		if (this.get("model").id == null) {
      			this.set('destination', results.get("firstObject"));
      			this.get("model").set("recordStaff", this.get('destination'));
      		}else {
      			results.forEach((record) => {
      				if (record.id === this.get("model").get("recordStaff").get("id")) {
      		  			this.set('destination', record);
      				}
				});
      		}
  	 	});
  	 	this.set("buses", this.get("store").findAll('bus'));
  	 	const promise_bus = this.get('buses');
      	promise_bus.then((results) => {
      		if (this.get("model").id == null) {
      			this.set('des_bus', results.get("firstObject"));
      			this.get("model").set("bus", this.get('des_bus'));
      		}else {
      			results.forEach((record) => {
      				if (record.id === this.get("model").get("bus").get("id")) {
      		  			this.set('des_bus', record);
      				}
				});
      		}
  	 	});
  	 	
	}, 
	actions: {
		chooseDestination(driver) {
      		this.set('destination', driver);
      		this.get("model").set("recordStaff", driver);

    	},
    	chooseBusDestination(bus) {
      		this.set('des_bus', bus);
      		this.get("model").set("bus", bus);
    	}
    }

});
