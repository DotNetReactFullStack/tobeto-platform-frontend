import Navbar from "./components/Navbar/Navbar";
import RouteDefinitions from "./components/Routes/RouteDefinitions";

function App() {
	return (
		<>
			<Navbar />
			<hr className="border border-1 opacity-25 mt-0" />
			<RouteDefinitions />
			{/* Footer */}
		</>
	);
}

export default App;
