import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	model: DS.attr(),
	alias: DS.attr()
});
