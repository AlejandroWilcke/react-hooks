import styled from 'styled-components';
import PostsList from './PostsList';
import CommentsList from './CommentsList';

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`

const ContentWrapper = styled.div`
	display: flex;
	width: 80%;
	height: 85%;
	margin: auto;
	background-color: rgba(200, 200, 200, 0.1);
	border: 3px solid rgba(200, 200, 200, 0.85);
	border-radius: 10px;
	padding: 30px 30px 30px 30px;
`

const Main = () => {
	return(
		<Container>
			<ContentWrapper>
				<PostsList/>
				<CommentsList/>
			</ContentWrapper>
		</Container>
	)
}

export default Main;