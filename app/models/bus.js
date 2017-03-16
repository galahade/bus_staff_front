import DS from 'ember-data';

export default DS.Model.extend({
	license: DS.attr(),
	customID: DS.attr(),
	brand: DS.attr(),
	productionDate: DS.attr()
});
