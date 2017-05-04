import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
    	jobType: { embedded: 'always' },
    	driverType: { embedded: 'always' },
    	department: { embedded: 'always' }
    }
});
