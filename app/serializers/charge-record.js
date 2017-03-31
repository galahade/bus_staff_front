import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    bus: { embedded: 'always' },
    recordStaff: { embedded: 'always' }
  }
});
