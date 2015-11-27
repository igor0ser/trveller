'use strict';
 
/* App Module */

var travellerApp = angular.module('travellerApp', []);

travellerApp.controller('JourneysList',function($scope){
	$scope.journeys = 
	[
		{
			"id": 0,
			"name": "Azor Islands",
			"content1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, iure, consequatur!",
			"content2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sed ut inventore vero, repellendus accusantium voluptatem, ea cupiditate, doloribus quo, asperiores eaque nobis?",
			"bg": "img/thumbs/i1.jpg",
			"bg2": "img/i1.jpg"
		},
		{
			"id": 1,
			"name": "Maldives",
			"content1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, iure, consequatur!",
			"content2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sed ut inventore vero, repellendus accusantium voluptatem, ea cupiditate, doloribus quo, asperiores eaque nobis?",
			"bg": "img/thumbs/i2.jpg",
			"bg2": "img/i2.jpg"
		},
		{
			"id": 2,
			"name": "Seychelles",
			"content1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ex? In.",
			"content2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolorum et, dolore optio aliquid. Reiciendis est quaerat non tenetur, quod nisi, beatae adipisci.",
			"bg": "img/thumbs/i3.jpg",
			"bg2": "img/i3.jpg"
		},
		{
			"id": 3,
			"name": "Venice",
			"content1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, vitae, enim.",
			"content2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi et soluta, id temporibus molestiae in ut totam quam quae, error ratione earum, eligendi.",
			"bg": "img/thumbs/i4.jpg",
			"bg2": "img/i4.jpg"
		},
		{
			"id": 4,
			"name": "San Francisko",
			"content1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur enim.",
			"content2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolore odio excepturi ad. Libero ipsum est eum recusandae necessitatibus corporis, saepe cupiditate deleniti!",
			"bg": "img/thumbs/i5.jpg",
			"bg2": "img/i5.jpg"
		},
		{
			"id": 5,
			"name": "Garda lake",
			"content1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus, ipsam?",
			"content2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores laboriosam excepturi, laudantium ratione quas similique asperiores ullam suscipit, dicta itaque quo iste, alias.",
			"bg": "img/thumbs/i6.jpg",
			"bg2": "img/i6.jpg"
		},
		{
			"id": 6,
			"name": "Canada",
			"content1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, officiis, iste.",
			"content2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat possimus incidunt molestiae autem quibusdam architecto et, voluptatum eaque error odio velit, aspernatur nihil.",
			"bg": "img/thumbs/i7.jpg",
			"bg2": "img/i7.jpg"
		},
		{
			"id": 7,
			"name": "Switzerland",
			"content1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa atque, voluptas!",
			"content2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis inventore quisquam, ullam nihil, totam aperiam aliquid ipsa corporis, consequuntur, debitis porro sequi quo?",
			"bg": "img/thumbs/i8.jpg",
			"bg2": "img/i8.jpg"
		},
		{
			"id": 8,
			"name": "Nepal",
			"content1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, eveniet, modi.",
			"content2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ex commodi veritatis quia id dicta praesentium, consectetur minima, architecto tenetur consequuntur possimus illum.",
			"bg": "img/thumbs/i9.jpg",
			"bg2": "img/i9.jpg"
		}
	]

});