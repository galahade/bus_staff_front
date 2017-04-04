import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({
	/*
	queryParams: ['busID'],
  	busID: null,
  	filteredByBus: computed('busID', 'model', function() {
	    let busID = this.get('busID');
	    let chargeRecord = this.get('model');

	    if (busID) {
	      return chargeRecord.filterBy('busID', busID);
	    } else {
	      return chargeRecord;
	    }
  	})
  	*/
});
