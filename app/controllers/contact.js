import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',
	isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isValidMessage: Ember.computed.gte('textMessage.length',5),
	isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),
	isDisabled: Ember.computed.not('isValid'),

	actions: {
		sendMessage() {
			alert(`Sending message: ${this.get('emailAddress')}`);
			this.set('responseMessage', `We got your message and we'll get in touch soon: ${this.get('emailAddress')}`);
	   		this.set('emailAddress', '');
	   		this.set('textMessage', '');
	    }
	}
});
