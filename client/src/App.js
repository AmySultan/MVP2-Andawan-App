import "./App.css";
import NavBar from "./Components/NavBar";
import Lawyer from "./Components/Lawyer";
import Native from "./Components/Native";
import Home from "./Components/Home";
import Information from "./Components/Information";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Information" component={Information} />
				<Route path="/Home" component={Home} />
				<Route path="/Native" component={Native} />
				<Route path="/Lawyer" component={Lawyer} />
				<Route path="/Native/:id" component={Lawyer} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
