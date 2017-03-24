describe('itemList', function() {
	
	// load module that contains itemList component before each test
	beforeEach(module('itemList'));


	// Test the controller
	describe('todoListController', function() {

		var ctrl;

		beforeEach(inject(function($componentController) {
			ctrl = $componentController('itemList');

		}));

		it('should create a items model with 3 items', function() {
			expect(ctrl.tasks.length).toBe(3);
		});

		it('should set a default value for the orderList model', function(){
			expect(ctrl.orderList).toBe('priority');
		});

 	});
 });