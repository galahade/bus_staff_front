import DS from 'ember-data';

export default DS.Model.extend({
	Id: DS.attr(),
	Name: DS.attr(),
	StaffId: DS.attr(),
	JobType: DS.attr(),
	OnboardTime: DS.attr(),
	PersonalID: DS.attr(),
	DriverType: DS.attr(),
	IsInternship: DS.attr(),
	IsMultiTimeHired: DS.attr(),
	FirstOnboardTime: DS.attr(),
	Phone: DS.attr(),
	Department: DS.attr(),
	EmergencyContact: DS.attr(),
	EmergencyContactPhone: DS.attr(),
	EmergencyContactRelation: DS.attr(),
});
