import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";


const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
