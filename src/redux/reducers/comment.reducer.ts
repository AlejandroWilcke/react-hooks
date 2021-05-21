import { SET_COMMENTS, ADD_COMMENT } from '../actions/comment.action';

//I wanted the comments to stay alive at refresh.

const storedComments = JSON.parse( localStorage.getItem('comments') );

let commentId : number = storedComments ? storedComments[storedComments.length - 1].id + 1 : 500;

const getStoredComments = ( postId: number ) => {
	
	let commentsInStorage = JSON.parse(localStorage.getItem("comments")) || [];
			
	let previousComments = [];

	commentsInStorage.forEach( comment => {
		if( comment.postId === postId){
			previousComments.push(comment)
		}
	})

	return previousComments;
}

const createComment = (postId, comment) => {
	
	let newComment = 
	{
		postId,
		id: commentId,
		name: "Patagonian",
		email: "patagonian@patagonian.it",
		body: comment
	}

	let commentsInStorage = JSON.parse(localStorage.getItem("comments")) || [];
	localStorage.setItem(`comments`, JSON.stringify([...commentsInStorage, newComment]))

	commentId++;

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