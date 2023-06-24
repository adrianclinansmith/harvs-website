import React, { useState } from 'react';
import logo from './TheVegCultureLogo.jpg';
import vegImage from "./TheVegWeAreClosed.png";
import './App.css';

function App() {
	const [content, setContent] = useState("HOME");
	return (
		<div className="App">
			<div className="banner">
				FREE DELIVERY TO KITCHENER, WATERLOO, CAMBRIDGE & GUELPH
			</div>
			<header className="header">
				<img src={logo} className="logo" alt="" />
				<nav>
					<NavLink setContent={setContent}>HOME</NavLink>
					<NavLink setContent={setContent}>ORDER NOW</NavLink>
					<NavLink setContent={setContent}>MENU</NavLink>
					<NavLink setContent={setContent}>HOW IT WORKS</NavLink>
					<NavLink setContent={setContent}>FAQ</NavLink>
					<NavLink setContent={setContent}>CONTACT</NavLink>
				</nav>
			</header>
			<div id="content">
				{
					(content === "HOME"         && <Home/>) ||
					(content === "ORDER NOW"    && <OrderNow/>) ||
					(content === "MENU"         && <p>menu</p>) ||
					(content === "HOW IT WORKS" && <HowItWorks/>) ||
					(content === "FAQ"          && <Faq/>) ||
					(content === "CONTACT"      && <Contact/>)
				}
			</div>
		</div>
	);
}


// Helper Components

interface NavLinkProps extends React.PropsWithChildren {
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

function NavLink({ children, setContent }: NavLinkProps) {
	return (
		<button className="nav-link" 
			onClick={ (e) => setContent(e.currentTarget.innerText) }
		>
			{children}
		</button>
	);
}

function Card({ children }: React.PropsWithChildren) {
	return (
		<div className="card">
			<div className="card_content">
				{children}
			</div>
		</div>
	);
}

// Page Content Components

function Home() {
	return (
		<div>
			<img className="home-image" src={vegImage} alt="" />
				stuff here
		</div>
	);
}

function OrderNow() {
	return (
		<div className="order-now-content">
			{/* Option 1 */}
			<Card>
				<p>VEG</p>
				<p>4 roti OR 2 with rice</p>
				<p>1 Large Veg item (our choice & will alternate between Daal OR Subji.)</p>
				<p>Sweets on Fridays</p>
				<p>Delivery to your door included.</p>
				<p>$160</p>
			</Card>
			{/* Option 2 */}
			<Card>
			<p>VEG</p>
			<p>1 Large Daal</p>
			<p>1 Large Subji (no Roti/Rice)</p>
			<p>Sweets on Fridays</p>
			<p>Delivery to your door.</p>
			<p>$180</p>
			</Card>
			{/* Option 3 */}
			<Card>
			<p>VEG</p>
			<p>4 Roti with Rice</p> 
			<p>1 Large Dal</p>
			<p>1 Subji </p>
			<p>Sweets on Fridays </p>
			<p>Delivery included</p> 
			<p>$200</p>
			</Card>
			{/* Option 4 */}
			<Card>
			<p>VEG </p>
			<p>8 roti OR 6 roti with rice</p>
			<p>1 Large Daal </p>
			<p>1 Subji</p>
			<p>Sweets on Fridays. </p>
			<p>Delivery to your door is included.</p>
			<p>$220</p>
			</Card>
			{/* Option 5 */}
			<Card>
			<p>MEAT</p>
			<p>8 roti or 6 with rice</p>
			<p>1 Large Daal</p>
			<p>1 Subji</p>
			<p>*Chicken will replace Subji 2x a week in a Large 12oz container</p>
			<p>Sweets on Fridays</p>
			<p>Delivery included.</p>
			<p>$240</p>
			</Card>
			{/* Option 6 */}
			<Card>
			<p>LARGE VEG</p>
			<p>8 roti or 6 roti with rice</p>
			<p>1 large 12oz dal</p>
			<p>1 large 12oz subji </p>
			<p>Sweets on Fridays </p>
			<p>Delivery included </p>
			<p>$250</p>
			</Card>
		</div>
	);
}

function HowItWorks() {
	return (
		<p className="how-it-works-content">
			Once you make your payment, you will be set up with our food delivery service the next business day.<br/>
			We will cook, package and deliver fresh delicious Indian food to your door (between 9am and 4pm).<br/><br/>

			The food comes in a microwave safe container that food should be warmed in before consuming or put in the fridge for storage immediately.<br/><br/>

			Then we do it again with new recipes the next day.<br/><br/>

			It`s as easy as that! To get started today ORDER NOW.<br/><br/>
		</p>
	);
}

function Faq() {
	return (
		<p className="how-it-works-content">
			<b>Can I try the food before signing up for the month?</b><br/><br/>

			YES! You can sign up for a day, a week (5 days) or a month (20 days). Just place your order here.<br/><br/>

			<b>Can I pause my packages during my subscription?</b><br/><br/>

			NO, please note that you will not be able to pause or stop your packages once signing up. Skipping a delivery will not be accounted for regardless if you request a delivery be made or not.<br/>  

			The food is made in a licensed commercial kitchen that`s professionally cleaned daily by food certified cooks & staff. 

			We cube some of the vegetables fresh in house & the food is cooked every morning and packaged piping hot.<br/><br/>

			<b>What are Delivery Times?</b><br/><br/>

			We deliver Monday to Friday 9am to 4pm, if not earlier. We can NOT accommodate a specific time you need your food. This is a service that is delivery focused and dozens of factors out of our control affect delivery times. We do not guarantee anytime outside of our operating times of 9am to 4pm. The food will be delivered at ANY TIME during operating hours and is subject to change without warning, but will always be there between 9am-4pm. <br/><br/> 

			<b>Refund Policy?</b><br/><br/>

			We DO NOT offer refunds on food cancellations for any reason, please try the food for a day or a week if you`re not ready to commit for the month. <br/><br/> 

			<b>I live in an apartment, can you come to my door?</b><br/><br/>

			This is an incredibly important policy. We DO NOT go up to buildings under any circumstances. We will however give you a text and/or photo when your food is dropped in the lobby. We have a VERY limited time to do the deliveries and cannot change this policy. Please DO NOT WAIT to pick up your food in apartments or even houses, we do not take responsibility for lost or stolen packages. Make sure the food is microwaved or refrigerated as soon as possible.<br/><br/>

			The food recipes are different everyday. We focus on quality & variety in the food so you don't get bored. We have over 25 different vegetarian recipes & numerous chicken recipes. 
		</p>
	)
}

function Contact() {
	return (
		<p className="how-it-works-content">
			1 (905) 460-6000 <br/><br/>

			We deliver Monday to Friday. 9am to 4pm if not earlier. <br/>
			They are delivered five times a week for four weeks (20 PACKAGES TOTAL)!!!!
		</p>
	)
}

export default App;
