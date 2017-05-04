import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({
	columns: computed(function() {
	    return [{
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
	    },{
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
	actions: {
    	callback(row) {
			this.replaceRoute('staffs.show',row.content.id);
		}
	}
});
