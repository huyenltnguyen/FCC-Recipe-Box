// jshint ignore: start
import * as types from './actionTypes';

export function openModal(modalType, modalProps) {
	return {
		type: types.OPEN_MODAL,
		payload: {			
			showModal: true,
			modalType: modalType,
			modalProps
		}
	};
}

export function closeModal() {
	return {
		type: types.CLOSE_MODAL,
		payload: false
	};
}