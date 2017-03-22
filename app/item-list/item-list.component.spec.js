describe('itemList', function() {
	
	// load module that contains itemList component before each test
	beforeEach(module('todoApp'));


	// Test the controller
	describe('todoListController', function() {


	it('should create a items model with 2 items',
		inject(function($componentController) {

			var ctrl = $componentController('itemList');

			expect(ctrl.tasks.length).toBe(2);

		}));

 	});
 });