import React from 'react';
import logo from './TheVegCultureLogo.jpg';
import vegImage from "./TheVegWeAreClosed.png";
import './App.css';

function App() {
	React.useEffect(() => {
		let mainImage = document.getElementById("main-image") as HTMLElement;
		mainImage.classList.add("animator");
	}, []);
	return (
	<div className="App">
		<div className="banner">
			FREE DELIVERY TO KITCHENER, WATERLOO, CAMBRIDGE & GUELPH
		</div>
		<header className="header">
			<img src={logo} className="logo" alt="" />
			<nav>
				<button className="nav-link" onClick={clickedNavLink}>
					HOME
				</button>
				<button className="nav-link" onClick={clickedNavLink}>
					ORDER NOW
				</button>
				<button className="nav-link" onClick={clickedNavLink}>
					MENU
				</button>
				<button className="nav-link" onClick={clickedNavLink}>
					HOW IT WORKS
				</button>
				<button className="nav-link" onClick={clickedNavLink}>
					FAQ
				</button>
				<button className="nav-link" onClick={clickedNavLink}>
					CONTACT
				</button>
			</nav>
		</header>
		<div id="content">
			<img id="main-image" src={vegImage} alt="" />
			stuff here
		</div>
	</div>
	);
}


// Event Handlers

function clickedNavLink(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
	let contentDiv = document.getElementById("content") as HTMLDivElement;
	contentDiv.innerText = e.currentTarget.textContent || "";
	switch (e.currentTarget.textContent) {
		case "HOME":
			
			break;
	
		default:
			break;
	}
}

export default App;
