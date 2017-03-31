import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({
	columns: computed(function() {
    return [{
      	label: '牌照号',
      	valuePath: 'license',
      	width: '100px',
    }, {
      	label: '编号',
      	valuePath: 'customID',
    	width: '100px',
    }, {
      	label: '品牌',
      	valuePath: 'brandAlias',
      	width: '100px',
    }, {
      	label: '注册日期',
      	valuePath: 'registerDate',
      	width: '100px',
    }, {
      	label: '车辆识别代码',
      	valuePath: 'vin',
    }, {
      	label: '发动机号',
      	valuePath: 'engineNo',
    }, {
      	label: '核载人数',
      	valuePath: 'personsCapacity',
      	width: '100px',
    }];
  }),
actions: {
  	callback(row) {
		this.replaceRoute('buses.show',row.content.id);
	}
}
	
});
