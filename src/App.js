import "./app.css";
import { ArrowScroll } from "./Components/ArrowScroll/ArrowScroll";
import { Divider } from "./Components/Divider/Divider";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarResponsive } from "./Components/NavbarResponsive/NavbarResponsive";
import { WhatsApp } from "./Components/WhatsApp/WhatsApp";
import { AboutUs } from "./Sections/AboutUs/AboutUs";
import { Contact } from "./Sections/Contact/Contact";
import { Hero } from "./Sections/Hero/Hero";
import { Services } from "./Sections/Services/Services";
// import { WorkWith } from "./Sections/WorkWith/WorkWith";

function App() {
	return (
		<div className="appContainer">
			<WhatsApp />
			<Navbar />
			<NavbarResponsive />
			<Hero />
			<Divider />
			<AboutUs />
			<Divider />
			<Services />
			<Divider />
			{/* <WorkWith />
			<Divider /> */}
			<Contact />
			<Divider />
			<Divider />
			<Divider />
		</div>
	);
}

export default App;
