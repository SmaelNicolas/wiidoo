import "./app.css";
import { ArrowScroll } from "./Components/ArrowScroll/ArrowScroll";
import { Divider } from "./Components/Divider/Divider";
import { Navbar } from "./Components/Navbar/Navbar";
import { Contact } from "./Sections/Contact/Contact";
import { Hero } from "./Sections/Hero/Hero";
import { Services } from "./Sections/Services/Services";

function App() {
	return (
		<div className='appContainer'>
			<Navbar />
			<Hero />
			<ArrowScroll />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Services />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Contact />
		</div>
	);
}

export default App;
