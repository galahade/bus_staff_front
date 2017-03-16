import Ember from 'ember';
//import TableCommon from '../mixins/table-common';
import Table from 'ember-light-table';

const {
  computed,
  inject
} = Ember;

export default Ember.Component.extend({
  store: inject.service(),
  data: null,
  doubleClickRow: null,
  columns: computed(function() {
    return [{
      label: '编号',
      valuePath: 'id',
      width: '50px',
//      sortable: false,
    }, {
      label: '姓名',
      valuePath: 'name',
      width: '60px'
    }, {
      label: '工种',
      valuePath: 'jobType',
      width: '50px'
    }, {
      label: '入职时间',
      valuePath: 'onboardTime',
      width: '90px'
    }, {
      label: '身份证号',
      valuePath: 'personalID',
      width: '160px'
    }, {
      label: '驾照',
      valuePath: 'driverType',
      width: '50px'
    },{
      label: '实习期',
      valuePath: 'isInternship',
      width: '50px'
    }, {
      label: '多次入职',
      valuePath: 'isMultitimeHired',
      width: '80px'
    }, {
      label: '首次入职',
      valuePath: 'firstOnboardTime',
      width: '90px'
    }, {
      label: '电话',
      valuePath: 'phone',
      width: '100px'
    }, {
      label: '部门',
      valuePath: 'department',
      width: '50px'
    }, {
      label: '联系人',
      valuePath: 'emergencyContact',
      width: '60px'
    }, {
      label: '联系电话',
      valuePath: 'emergencyContactPhone',
      width: '100px'
    }, {
      label: '关系',
      valuePath: 'emergencyContactRelation',
      width: '80px'
    }];
  }),
  table: computed('data', function(){
    return new Table(this.get('columns'), this.get('data'), { enableSync: this.get(true) });
  }),
  actions: {
    doubleClickRow(row) {
      this.get('router').replaceWith('show-driver.show',row.content.id);
     
    }
  }
});