import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://localhost:8000'
	//host: 'http://192.168.1.7:8000'
});
