import "./app.css";
import { ArrowScroll } from "./Components/ArrowScroll/ArrowScroll";
import { Divider } from "./Components/Divider/Divider";
import { Navbar } from "./Components/Navbar/Navbar";
import { WhatsApp } from "./Components/WhatsApp/WhatsApp";
import { AboutUs } from "./Sections/AboutUs/AboutUs";
import { Contact } from "./Sections/Contact/Contact";
import { Hero } from "./Sections/Hero/Hero";
import { Services } from "./Sections/Services/Services";

function App() {
	return (
		<div className='appContainer'>
			<WhatsApp />
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
			<AboutUs />
			<Divider />
			<Services />
			<Divider />
			<Contact />
		</div>
	);
}

export default App;
