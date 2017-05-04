import Ember from 'ember';
import Table from 'ember-light-table';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  data: [],
  call: null,
  columns: null,
  sort: null,
  dir: 'asc',
  table: computed('data', 'columns', function(){
    return new Table(this.get('columns'), this.get('data'), { enableSync: true });
  }),
  actions: {
    doubleClickRow(row) {
      this.get('call')(row);
    },
    onColumnClick(column) {
          if (column.sorted) {
            this.setProperties({
              dir: column.ascending ? 'asc' : 'desc',
              sort: column.get('valuePath')
            });
            this.get('model').clear();
          }
      }
  }
});