import DS from 'ember-data';

export default DS.Model.extend({
	license: DS.attr(),
	customID: DS.attr(),
	brandID: DS.attr(),
	brandAlias: DS.attr(),
	registerDate: DS.attr(),
	vin: DS.attr(),
	engineNo: DS.attr(),
	personsCapacity: DS.attr('number')
});
