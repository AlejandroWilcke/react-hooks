export interface IPost {
	userId: string;
	id: string;
	title: string;
	body: string;
}

export interface IPostsState {
  posts: IPost[];
}