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
					priority: 1,
					completed: 'Y',
				},
				{
					name: 'Go Home',
					description: 'Remember your mobile phone',
					priority: 5,
					completed: 'N',
				},
				{
					name: 'Check Traffic',
					description: 'Google Maps',
					priority: 4,
					completed: 'N'
				}
			];

			this.orderList = "priority";

		}

	});