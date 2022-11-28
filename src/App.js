import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom"
import Checkout from "./Checkout";


function App() {
  return (
    <div className="App">
			<BrowserRouter>
			<Header />
				<Routes>
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
