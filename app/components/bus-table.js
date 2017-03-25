import Ember from 'ember';
import Table from 'ember-light-table';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  data: [],
  doubleClickRow: null,
  columns: computed(function() {
    return [{
      label: '牌照号',
      valuePath: 'license',
      width: '100px',
//      sortable: false,
    }, {
      label: '编号',
      valuePath: 'customID',
      width: '100px'
    }, {
      label: '品牌',
      valuePath: 'brandAlias',
      width: '100px'
    }, {
      label: '注册日期',
      valuePath: 'registerDate',
      width: '100px'
    }, {
      label: '车辆识别代码',
      valuePath: 'vin',
      width: '180px'
    }, {
      label: '发动机号',
      valuePath: 'engineNo',
      width: '180px'
    }, {
      label: '核载人数',
      valuePath: 'personsCapacity',
      width: '30px'
    }];
  }),
  table: computed('data', function(){
    return new Table(this.get('columns'), this.get('data'), { enableSync: true });
  }),
  actions: {
    doubleClickRow(row) {
      this.get('router').replaceWith('buses.show',row.content.id);
    }
  }
});