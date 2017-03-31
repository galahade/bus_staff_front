import Ember from 'ember';

export default Ember.Component.extend({
	title: null,
	model: null,
	readonly: true,
	goBack: null,
	backURL: null,
	actions: {
		post() {
			let bus = this.get("model");
			bus.save();
			this.get("goBack")();
		},
	    changeEditable() {
			this.toggleProperty('readonly');
		},
	    cancel() {
    		this.toggleProperty('readonly');
    		if (this.get("model").id == null) {
    			this.get("model").deleteRecord();
    		} else {
    			this.get("model").rollbackAttributes();
    		}
    		this.get("goBack")();
	    }
	}
});
