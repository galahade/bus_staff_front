import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	jobType: DS.attr(),
	onboardTime: DS.attr(),
	personalID: DS.attr(),
	driverType: DS.attr(),
	isInternship: DS.attr(),
	isMultitimeHired: DS.attr(),
	firstOnboardTime: DS.attr(),
	phone: DS.attr(),
	department: DS.attr(),
	emergencyContact: DS.attr(),
	emergencyContactPhone: DS.attr(),
	emergencyContactRelation: DS.attr()
});