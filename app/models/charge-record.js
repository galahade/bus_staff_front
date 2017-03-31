import DS from 'ember-data';

export default DS.Model.extend({
	bus: DS.belongsTo('bus', { inverse: null }),
	recordDate: DS.attr(),
	recordStaff: DS.belongsTo('driver', { inverse: null }),
	mileage: DS.attr('number'),
	chargedTWH: DS.attr('number'),
	remainPercent: DS.attr('number'),
	finalPercent: DS.attr('number')
});
