import "./app.css";
import { ArrowScroll } from "./Components/ArrowScroll/ArrowScroll";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Sections/Hero/Hero";

function App() {
	return (
		<div className='appContainer'>
			<Navbar />
			<Hero />
			<ArrowScroll />
		</div>
	);
}

export default App;
