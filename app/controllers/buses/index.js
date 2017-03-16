import Ember from 'ember';

export default Ember.Controller.extend({
	datasource: Ember.computed('store', function() {
    	return this.get('store').findAll('bus');
	}),
	actions: {
		doRefresh: function () {
 			this.set('model',this.get('store').createRecord('bus'));
   		}
	}
});
