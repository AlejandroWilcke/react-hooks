import { createStore, combineReducers } from 'redux';
import { postsReducer } from './reducers/post.reducer';
import { commentsReducer } from './reducers/comment.reducer';

const rootReducer = combineReducers({
	posts: postsReducer,
	comments: commentsReducer
	}
);

export const store = createStore(rootReducer);