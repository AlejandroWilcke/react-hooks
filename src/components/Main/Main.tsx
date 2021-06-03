import PostsList from '../Posts/PostsList';
import CommentsList from '../Comments/CommentsList';
import { Container, ContentWrapper } from './MainStyle';

const Main = () => {
	return(
		<Container>
			<ContentWrapper className="fadeIn">
				<PostsList />
				<CommentsList/>
			</ContentWrapper>
		</Container>
	)
}

export default Main;