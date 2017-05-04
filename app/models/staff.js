import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	jobType: DS.belongsTo('dictionary', { inverse: null }),
	onboardTime: DS.attr(),
	personalID: DS.attr(),
	driverType: DS.belongsTo('dictionary', { inverse: null }),
	isInternship: DS.attr('boolean'),
	isMultitimeHired: DS.attr('boolean'),
	isResign: DS.attr('boolean'),
	firstOnboardTime: DS.attr(),
	phone: DS.attr(),
	department: DS.belongsTo('dictionary', { inverse: null }),
	emergencyContact: DS.attr(),
	emergencyContactPhone: DS.attr(),
	emergencyContactRelation: DS.attr()
});
