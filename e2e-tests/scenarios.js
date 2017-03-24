'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('ToDo List Application', function()
{

	describe('itemList', function()
	{

		it('should be possible to control items list order via the drop-down menu', function() {
      	var orderSelect = element(by.model('$ctrl.orderList'));
      	var nameOption = orderSelect.element(by.css('option[value="name"]'));
      	var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));









  	});	

});
