import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Main';

const App = () => {
	return(
		<Router>
			<Switch>
				<Route path="/">
					<Main/>
				</Route>
			</Switch>
		</Router>
	)
}

export default App;