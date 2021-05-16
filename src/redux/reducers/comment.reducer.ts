import { SET_COMMENTS, ADD_COMMENT } from '../actions/comment.action';

//I wanted the comments to stay alive at refresh.

const getStoredComments = (postId) => {
	let commentsInStorage = JSON.parse(localStorage.getItem("comments")) || [];
			
	let previousComments = [];

	commentsInStorage.forEach( comment => {
		if( comment.postId == postId){
			previousComments.push(comment)
		}
	})

	return previousComments;
}

const createComment = (postId, comment) => {
	let newComment = {
		postId,
		id: 500,
		name: "Patagonian",
		email: "patagonian@patagonian.it",
		body: comment
	}

	let commentsInStorage = JSON.parse(localStorage.getItem("comments")) || [];
	localStorage.setItem(`comments`, JSON.stringify([...commentsInStorage, newComment]))

	return newComment;
}

type Action = {
	type: string,
	payload: any
}

export const commentsReducer = ( state = [], action: Action ) => {
	switch(action.type){
		case SET_COMMENTS: {
			return getStoredComments(action.payload[0].postId).concat(action.payload)
		}
		case ADD_COMMENT: {
			return [ ...state, createComment(state[0].postId, action.payload)]
		}
		default:
			return state;
	}
}