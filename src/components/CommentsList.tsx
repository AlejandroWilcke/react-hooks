import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IComment, ICommentsState } from '../ts/interfaces/comments.interface';
import { cutText } from '../utils';
import { ADD_COMMENT } from '../redux/actions/comment.action';

const ContentWrapper = styled.div`
	margin: auto;
	margin-left: 30px;
	margin-top: 0px;
	width: 100%;
	height: 90%;
	display: flex;
	flex-wrap: wrap;
	background-color: rgba(200, 200, 200, 0.1);
	border: 3px solid rgba(200, 200, 200, 0.85);
	border-radius: 10px;
	padding: 30px 30px 30px 30px;
`

const Row = styled.div`
	border: 1px solid white;
	border-radius: 20px;
	//max-height: 10%;
	width: 100%;
	padding: 0.8vw;
	&:hover{
        background-color: rgba(200, 200, 200, 0.5);
    }
	font-size: 0.9vw;
`

const CommentsList = () => {

	const comments : any = useSelector<ICommentsState>(state => state.comments);
	const [comment, setComment] = useState("");

	const dispatch = useDispatch();
	const addComment = ( comment : string ) => dispatch( { type: ADD_COMMENT, payload: comment } )

	return(
		<>
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
							<input type="text" className="invisibleInput" onChange={(e) => setComment(e.target.value)}/>
							<Button variant="dark" onClick={ () => addComment(comment)}>Send</Button>
						</Row> 
					)
				: null }
			</ContentWrapper>
		</>
	)
}

export default CommentsList;