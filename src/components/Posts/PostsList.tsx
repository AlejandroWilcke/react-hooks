import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Accordion, Pagination } from 'react-bootstrap';

import { IPostsState, IPost } from '../../ts/interfaces/post.interface';
import { SET_POSTS } from '../../redux/actions/post.action';
import { SET_COMMENTS } from '../../redux/actions/comment.action';
import { getPosts } from '../../data/Posts';
import { getCommentsFromPost } from '../../data/Comments';
import { parseText } from '../../utils';
import { Title } from '../general';
import { Container } from './PostsStyle';

const PostsList = () => {
	
	const posts : any = useSelector<IPostsState>(state => state.posts);
	const postsPerPage = 5;
	const [actualPage, setActualPage] = useState(1)
	const [postsToSkip, setPostsToSkip] = useState(0)
	
	const dispatch = useDispatch();

	useEffect( () => {
		( async () => dispatch( { type: SET_POSTS, payload: await getPosts() } ) )()
	}, []);

	const setComments = async ( postId : string ) => {
		dispatch( { type: SET_COMMENTS, payload: await getCommentsFromPost(postId) })
	}

	const firstPage = () => {
		setPostsToSkip(0)
		setActualPage(1)
	}

	const lastPage = () => {
		setPostsToSkip(posts.length - postsPerPage)
		setActualPage( Math.ceil(posts.length / postsPerPage) )
	}

	const prevPage = () => { 
		if( postsToSkip > 0 ){ setPostsToSkip( postsToSkip - postsPerPage ) }
		if( actualPage > 1 ){ setActualPage( actualPage - 1) }
	}
	const nextPage = () => {
		if( postsToSkip + postsPerPage < posts.length ){ setPostsToSkip( postsToSkip + postsPerPage ) }
		if( actualPage < posts.length / postsPerPage) { setActualPage( actualPage + 1 ) }
	}

	const paginationNumbers = () => {
		//Setups the number range in the pagination, based on how many posts you see and how many there are.
		if( posts.length ){
			const pageNumbers = []
			let pageNumber = 1;
			
			for(let i = 0; i < posts.length; i+= postsPerPage){
				pageNumbers.push(
					<Pagination.Item 
						key={pageNumber}
						active={ actualPage === pageNumber ? true : false}
						disabled={ actualPage !== pageNumber ? true : false}
						className="pagination"
					>
						{pageNumber}
					</Pagination.Item>
				)
				pageNumber++;
			}
	
			return pageNumbers;
		}
	}

	return(
			<Container>
				<Title>Posts</Title>
				<Accordion>
					{ posts.length > 0 && posts.slice(postsToSkip, postsPerPage + postsToSkip).map( ( post: IPost, i: number ) => {
							return(
								<Card key={i} bg="dark" className="borderWhite responsiveCard" onClick={ () => setComments(post.id) }>
									<Accordion.Toggle as={Card.Header} eventKey={i.toString()}>
										<span style={{color: "white"}} className="bold">{parseText(post.title)}</span>
									</Accordion.Toggle>
									<Accordion.Collapse eventKey={i.toString()} style={{border: "3px solid white !important"}}>
										<Card.Body>
											<span style={{color: "white"}}>{post.body}</span>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							)
					})}
				</Accordion>
				<div style={{position: "absolute", bottom: "7.5%"}}>
					<Pagination>
						<Pagination.First className="pagination" onClick={ () => firstPage()}/>
						<Pagination.Prev className="pagination" onClick={ () => prevPage()}/>
						{paginationNumbers()}
						<Pagination.Next className="pagination" onClick={ () => nextPage()} />
						<Pagination.Last className="pagination" onClick={ () => lastPage()}/>
					</Pagination>
				</div>
			</Container>
	)
}

export default PostsList;