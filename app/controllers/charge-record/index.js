import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({
	queryParams: ['busID'],
  	busID: null,
  	data: computed('busID', 'model', function() {
	    let busID = this.get('busID');
	    let chargeRecord = this.get('model');

	    if (busID) {
	      return chargeRecord.filterBy('bus.id', busID);
	    } else {
	      return chargeRecord;
	    }
  	}),
	columns: computed(function() {
	    return [{
	      label: '记录日期',
	      valuePath: 'recordDate',
	    }, {
	      label: '车号',
	      valuePath: 'bus.license',
	      width: '100px'
	    }, {
	      label: '剩余电量(%)',
	      valuePath: 'remainPercent',
	      width: '100px'
	    }, {
	      label: '充电度数',
	      valuePath: 'chargedTWH',
	      width: '100px'
	    }, {
	      label: '最终电量(%)',
	      valuePath: 'finalPercent',
	      width: '180px'
	    }, {
	      label: '行驶里程(km)',
	      valuePath: 'mileage',
	      width: '180px'
	    }, {
	      label: '记录人',
	      valuePath: 'recordStaff.name',
	    }];
  	}),
  	actions: {
	    callback(row) {
			this.replaceRoute('charge-record.show',row.content.id);

		}
  	}
});
