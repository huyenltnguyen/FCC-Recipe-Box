// jshint ignore: start
import * as types from '../actions/actionTypes';

export default function(state = false, action) {
	switch(action.type) {
		case types.OPEN_MODAL:
			return action.payload;
		
		case types.CLOSE_MODAL:
			return action.payload;

		default:
			return state;	
	}


}
