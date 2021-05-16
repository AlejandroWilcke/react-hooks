export interface IComment {
	postId: string;
	id: string;
	name: string;
    email: string;
	body: string;
}

export interface ICommentsState {
  comments: IComment[];
}