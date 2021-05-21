import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { IComment, ICommentsState } from '../../ts/interfaces/comments.interface';
import { cutText } from '../../utils';
import { ADD_COMMENT } from '../../redux/actions/comment.action';
import { Title } from '../general';
import { Container, ContentWrapper, Row } from './CommentsStyle';

const CommentsList = () => {

	const comments : any = useSelector<ICommentsState>(state => state.comments);
	const [comment, setComment] = useState("");

	const dispatch = useDispatch();
	const addComment = ( comment : string ) => {
		dispatch( { type: ADD_COMMENT, payload: comment } );
		setComment("");
	}

	return(
		<Container>
			<Title>Comments</Title>
			<ContentWrapper>
				{ comments.length > 0 && comments.map( ( comment : IComment, i : number ) => {
					return (
						<Row key={i}>
							<span style={{color: 'rgba(175, 175, 175)'}}> {comment.email.split("@")[0]}: </span> 
							<span style={{color: 'white'}}>{cutText(comment.body)}</span>
						</Row>
					)
				} )}
				{ comments.length > 0 ? 
					(
						<Row>
							<span style={{color: 'white'}}>Add a comment:</span>
							<input type="text" className="invisibleInput" value={comment} onChange={(e) => setComment(e.target.value)}/>
							<Button variant="dark" onClick={ () => addComment(comment)}>Send</Button>
						</Row> 
					)
				: null }
			</ContentWrapper>
		</Container>
	)
}

export default CommentsList;