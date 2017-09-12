import * as types from '../actions/actionTypes';

export default function(state = [], action) {
	switch(action.type) {
		case types.RECIPE_ADDED:
			console.log([...state, action.payload]);
			return [...state, action.payload];
		default:
			return [
				{ 
					name: 'Pumpkin Pie',
					ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]
				},

				{ 
					name: 'Spaghetti',
					ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]
				},

				{
					name: 'Onion Pie',
					ingredients: ["Onion", "Pie Crust",]
				}			
			]
	}
}

