import Ember from 'ember';
import Table from 'ember-light-table';
import { task } from 'ember-concurrency';

const {
  inject,
  computed
} = Ember;

export default Ember.Mixin.create({
  store: inject.service(),

  page: 0,
  limit: 100,
  dir: 'asc',
  sort: 'id',

  isLoading: computed.oneWay('fetchRecords.isRunning'),
  enableSync: true,

  data: [],
  model: [],
  meta: null,
  columns: null,
  table: null,

  init() {
    this._super(...arguments);
    let records = this.get('data');
console.log(records);
    let table = new Table(this.get('columns'), records, { enableSync: this.get('enableSync') });
    let sortColumn = table.get('allColumns').findBy('valuePath', this.get('sort'));

    // Setup initial sort column
    if (sortColumn) {
      sortColumn.set('sorted', true);
    }

    let columnstemp = table.columns;
    console.log(columnstemp);

    this.set('table', table);
  },

  fetchRecords: task(function*() {
    let records = yield this.get('store').findAll('driver');
    this.get('model').pushObjects(records.toArray());
    this.set('meta', records.get('meta'));
  }).restartable(),

  actions: {
    onScrolledToBottom() {
  
    },

    onColumnClick(column) {
      if (column.sorted) {
        this.setProperties({
          dir: column.ascending ? 'asc' : 'desc',
          sort: column.get('valuePath'),
        });
        this.get('model').clear();
      }
    }
  }
});