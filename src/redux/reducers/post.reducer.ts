import { SET_POSTS } from '../actions/post.action';

//Had some troubles with setup, need to fix 'any'.

type Action = {
	type: string,
	payload: any;
}

export const postsReducer = ( state = [], action: Action ) => {
	switch(action.type){
		case SET_POSTS: {
			return [...action.payload]
		}
		default:
			return state;
	}
}