// Register the ItemList component and associated controller and template
angular.
	module('itemList').
	component('itemList', {
		templateUrl: 'item-list/item-list.template.html', 
		controller: function todoListController() {
			this.tasks = 
			[
				{
					name: 'Have Lunch',
					description: 'Only half an hour',
				},
				{
					name: 'Go Home',
					description: 'Check Traffic',	
				}
			];

		}

	});