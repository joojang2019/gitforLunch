angular.module('app.services', [])

.factory('schoolDataService', [function(){


	//Northwestern Menu
	var NorthwesternAllisonMenu = ['Fried Chicken','Mashed Potato','Ketchup']
	var NorthwesternSargentMenu = ['Hamburgers','Curly Fries','Mustard']
	var NorthwesternPlexEastMenu = ['Fish','Chips','Mayo']
	var NorthwesternHinmanMenu = ['Pork','Tomato','Ketchup']

	//UChicago Menu
	var UChicagoBakerMenu = ['Fried Chicken','Mashed Potato','Ketchup']
	var UChicagoBarletttMenu = ['Hamburgers','Curly Fries','Mustard']
	var UChicagoCatheyMenu = ['Fish','Chips','Mayo']
	var UChicagoGordonMenu = ['Pork','Tomato','Ketchup']

	//UIUC Menu
	var UIUCIkenberrynMenu= ['Fried Chicken','Mashed Potato','Ketchup']
	var UIUCFARMenu = ['Hamburgers','Curly Fries','Mustard']
	var UIUCISRMenu = ['Fish','Chips','Mayo']
	var UIUCBuseyEvnasMenu = ['Pork','Tomato','Ketchup']



	var schoolData = [
		{
			schoolName: 'Northwestern',
			diningHalls: [
				{
					name: 'Allison',
					menu: NorthwesternAllisonMenu,	
					link: 'https://northwestern.sodexomyway.com/images/Allison%20WeeklyMenu_tcm237-9944.htm'						
				},
				{
					name:'Sargent',
					menu: NorthwesternSargentMenu,
					link:'https://northwestern.sodexomyway.com/images/Sargent%20WeeklyMenu_tcm237-12910.htm'
				},
				{
					name:'PlexEast',
					menu: NorthwesternPlexEastMenu,
					link:'https://northwestern.sodexomyway.com/images/Plex%20East%20WeeklyMenu_tcm237-12913.htm'
				},
				{
					name:'Hinman',
					menu: NorthwesternHinmanMenu,
					link: 'https://northwestern.sodexomyway.com/images/Hinman%20WeeklyMenu_tcm237-12915.htm'
				}

			]
		},
		{
			schoolName: 'University of Chicago',
			diningHalls: [
				{
					name: 'Baker',
					menu: UChicagoBakerMenu,	
					link: 'http://uchicago.cafebonappetit.com/cafe/baker/'
				},
				{
					name:'Barlett',
					menu: UChicagoBarletttMenu,
					link: 'http://uchicago.cafebonappetit.com/cafe/bartlett-dining-commons/'
				},
				{
					name:'Cathey',
					menu: UChicagoCatheyMenu,
					link: 'http://uchicago.cafebonappetit.com/cafe/cathey/'
				},
				{
					name:'Gordon',
					menu: UChicagoGordonMenu,
					link:'http://uchicago.cafebonappetit.com/cafe/gordon/'
				}

			]
		},
		{
			schoolName: 'UIUC',
			diningHalls: [
				{
					name: 'Ikenberry',
					menu: UIUCIkenberrynMenu,			
					link:'http://www.housing.illinois.edu/dining/menus/dining-halls'
				},
				{
					name:'FAR',
					menu: UIUCFARMenu,
					link:'http://www.housing.illinois.edu/dining/menus/dining-halls'
				},
				{
					name:'ISR',
					menu: UIUCISRMenu,
					link:'http://www.housing.illinois.edu/dining/menus/dining-halls'
				},
				{
					name:'Busey-Evans',
					menu: UIUCBuseyEvnasMenu,
					link:'http://www.housing.illinois.edu/dining/menus/dining-halls'
				}

			]
		}

	];

	return schoolData;

}])



.service('BlankService', [function(){

}]);