import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Component.extend({
	store: inject.service(),
	staffResign: null,
	model: null,
	jobTypes: null,
	driverTypes: null,
	departments: null,

	init() {
		this._super(...arguments);
		this.set("jobTypes", this.get("store").query('dictionary',{type: 1}));
		this.set("driverTypes", this.get("store").query('dictionary',{type: 3}));
		this.set("departments", this.get("store").query('dictionary',{type: 2}));

		this.get('jobTypes').then((results) => {
      		if (this.get("model").id == null) {
      			this.set('dest_jobType', results.get("firstObject"));
      			this.get("model").set("jobType", this.get('dest_jobType'));
      		}else {
      			results.forEach((record) => {
      				if (record.id === this.get("model").get("jobType").get("id")) {
      		  			this.set('dest_jobType', record);
      				}
				});
      		}
  	 	});
  	 	this.get('driverTypes').then((results) => {
      		if (this.get("model").id == null) {
      			this.set('dest_driverType', results.get("firstObject"));
      			this.get("model").set("driverType", this.get('dest_driverType'));
      		}else {
      			results.forEach((record) => {
      				if (record.id === this.get("model").get("driverType").get("id")) {
      		  			this.set('dest_driverType', record);
      				}
				});
      		}
  	 	});
  	 	this.get('departments').then((results) => {
      		if (this.get("model").id == null) {
      			this.set('dest_department', results.get("firstObject"));
      			this.get("model").set("department", this.get('dest_department'));
      		}else {
      			results.forEach((record) => {
      				if (record.id === this.get("model").get("department").get("id")) {
      		  			this.set('dest_department', record);
      				}
				});
      		}
  	 	});
	}, 

	actions: {
		resignStaff() {
			this.get("staffResign").save();
		},
		createResignStaff() {
			const staff = this.get("model");
			console.log(staff);
			const staffResign = this.get("store").createRecord('staff-resign',{
				staff: staff
			});

			this.set("staffResign",staffResign);
		},
		destroyResignStaff() {
			this.get("staffResign").deleteRecord();
		},
		comeBack() {
			alert("This function not be supported now.");
		},
		chooseDepartmentDestination(data) {
			this.set('dest_department', data);
      		this.get("model").set("department", data);
		},
		chooseJobTypeDestination(data) {
			this.set('dest_jobType', data);
      		this.get("model").set("jobType", data);
		},
		chooseDriverTypeDestination(data) {
			this.set('dest_driverType', data);
      		this.get("model").set("driverType", data);
		}
	}
});
