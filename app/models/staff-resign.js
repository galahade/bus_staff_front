import DS from 'ember-data';

export default DS.Model.extend({
	staff: DS.belongsTo('staff'),
	resignDate: DS.attr(),
	resignReason: DS.attr(),
});
