import React, { useState } from 'react';
import logo from './images/KwTiffinLogo.png';
import homeImage from "./images/HomeBackground.png";
import menuImage from "./images/Menu.png";
import './App.css';
import OrderNow from "./components/OrderNow";
import Phone from "./components/Phone";

type PageTitle = "HOME" | "ORDER NOW" | "MENU" | "HOW IT WORKS" | "FAQ" | "CONTACT";
const HOME = "HOME";
const ORDER_NOW = "ORDER NOW";
const MENU = "MENU";
const HOW_IT_WORKS = "HOW IT WORKS";
const FAQ = "FAQ";
const CONTACT = "CONTACT";

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// App Component
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

export default function App() {
	// States
	const [content, setContent] = useState<PageTitle>(HOME);
	// Bold selected page link
	const navLinkList = document.getElementsByClassName("nav-link");
	for (let i = 0; i < navLinkList.length; i++) {
		const navLink = navLinkList[i] as HTMLElement;
		const selected = navLink.innerText === content;
		navLink.style.textShadow = selected ? "0 0 0.5px black" : "none";
	}
	//JSX
	return (
		<div className="App">
			<div className="banner">
				<div className="banner_item">
					FREE DELIVERY TO KITCHENER, WATERLOO, CAMBRIDGE & GUELPH
				</div>
				{/* <div className="banner_item">
					FRESH MADE INDIAN FOOD DELIVERED TO YOUR DOOR MONDAY TO 
					FRIDAY FOR AS LOW AS $160/MONTH!
				</div>
				<div className="banner_item">
					FREE DELIVERY TO KITCHENER, WATERLOO, CAMBRIDGE & GUELPH
				</div> */}
			</div>
			<header className="header">
				<ShowNavButton/>
				<img src={logo} className="logo" alt="" />
				<nav>
					<HideNavButton/>
					<NavLink setContent={setContent}>{HOME}</NavLink>
					<NavLink setContent={setContent}>{ORDER_NOW}</NavLink>
					<NavLink setContent={setContent}>{MENU}</NavLink>
					<NavLink setContent={setContent}>{HOW_IT_WORKS}</NavLink>
					<NavLink setContent={setContent}>{FAQ}</NavLink>
					<NavLink setContent={setContent}>{CONTACT}</NavLink>
				</nav>
			</header>
			<div className="content">
				{
					(content === HOME         
						&& <Home/>) ||
					(content === ORDER_NOW    
						&& <OrderNow/>) ||
					(content === MENU         
						&& <Menu/>) ||
					(content === HOW_IT_WORKS 
						&& <HowItWorks setContent={setContent}/>) ||
					(content === FAQ          
						&& <Faq setContent={setContent}/>) ||
					(content === CONTACT      
						&& <Contact/>)
				}
			</div>
		</div>
	);
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// Helper Components
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

interface NavLinkProps extends React.PropsWithChildren {
	setContent: React.Dispatch<React.SetStateAction<PageTitle>>;
}

function NavLink({ children, setContent }: NavLinkProps) {
	return (
		<button className="nav-link" 
			onClick={ (e) => {
				setContent((e.currentTarget.innerText as PageTitle));
				showNavBar(false);
			}}
		>
			{children}
		</button>
	);
}

function OrderNowLink({ children, setContent }: NavLinkProps) {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a href="#" onClick={ () => setContent(ORDER_NOW) }>
			{children}
		</a>
	);
}

function ShowNavButton() {
	return (
		<button id="show-navbar-button" onClick={_=> showNavBar(true)}>
			≡
		</button>
	);
}

function HideNavButton() {
	return (
		<button id="hide-navbar-button" onClick={_=> showNavBar(false)}>
			✕
		</button>
	);
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// Page Content Components
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

function Home() {
	return (<>
		<div className="home-subheader">
			<img className="home-subheader_image" src={homeImage} alt="" />
			<div className="home-subheader_content">
				<h4>Home-style, Traditional, Delicious</h4>
				<h1>
					Indian Cuisine Prepared Fresh & Delivered to Doorstep
				</h1>
			</div>
		</div>
		<div className="text-block">
			<p>KW Tiffin is a monthly Indian food subscription service that's cooked, packaged & delivered right to your door.</p>

			<p>We offer incredibly affordable rates for fresh food that's cooked everyday before delivery.</p>

			<p><b>Save time:</b> Time is the most valuable thing we have, and with our flat rate as low as $8 a day you can have more time for the important things in life.</p>

			<p>No more going to the store walking aimlessly to spend more money than you would on this service for your items just to expire before you get to use them. No more wasted hours shopping, prepping and cooking your food. Just heat and eat!</p>

			<p><b>Save Money:</b> You can enjoy a nutritious meal without breaking bank or spending hours in the kitchen. Not only do you save more money by not paying for the rising costs of groceries due to “Inflation”, you create less food waste. You do not have to worry about items expiring that you paid way too much for, everything at KW Tiffin is made fresh right before the delivery and will last a few days in the fridge. Please refrigerate immediately and microwave when before consumption.</p>

			<p><b>Healthy and fresh ingredients:</b> We use only the freshest ingredients to make our meals, so you can enjoy a healthy and flavorful meal every time.</p>

			<p><b>Cooked Fresh & Safe:</b> A lot of similar services cook their food the night before and refrigerate overnight. We cook our food right before the deliveries in a commercial kitchen. Our chefs and food handlers are trained, authentic locals originating from India.</p>

			<p><b>Support Local:</b> Not only is a lot of the food local down to the locally sourced chicken, but so is the staff. Students, mothers, grandmothers in this community have built this operation.</p>

			<p><b>Variety of options:</b> Our menu is always changing, so you can enjoy a different meal every day and never get bored of repeated recipes. </p>

			<p><b>No waste:</b> With our service, you only receive the meals you need, so there's no need to worry about excess food going to waste.</p>
		</div>
	</>);
}

function Menu() {
	return <img className="menu-image" src={menuImage} alt="" />
}

function HowItWorks({ setContent }: NavLinkProps) {
	return (
		<div className="text-block">
			<h1>How It Works</h1>
			<p>Once you make your payment, you will be set up with our food delivery service the next business day.</p>

			<p>We will cook, package and deliver fresh delicious Indian food to your door (between 9am and 4pm).</p>

			<p>The food comes in a microwave safe container that food should be warmed in before consuming or put in the fridge for storage immediately.</p>

			<p>Then we do it again with new recipes the next day.</p>

			<p>It`s as easy as that! To get started today <OrderNowLink setContent={setContent}>ORDER NOW</OrderNowLink>.</p>
		</div>
	);
}

function Faq({ setContent }: NavLinkProps) {
	return (
		<div className="text-block">
			<h1>FAQ</h1>

			<p className="question"><b>Can I try the food before signing up for the month?</b></p>
			<p>YES! You can sign up for a day, a week (5 days) or a month (20 days). Just place your order <OrderNowLink setContent={setContent}>here</OrderNowLink>.</p>

			<p className="question"><b>Can I pause my packages during my subscription?</b></p>

			<p>NO, please note that you will not be able to pause or stop your packages once signing up. Skipping a delivery will not be accounted for regardless if you request a delivery be made or not.</p>

			<p className="question"><b>Who makes the food?</b></p>

			<p>The food is made in a licensed commercial kitchen that`s professionally cleaned daily by food certified cooks & staff.</p> 

			<p>We cube some of the vegetables fresh in house & the food is cooked every morning and packaged piping hot.</p>

			<p className="question"><b>What are Delivery Times?</b></p>

			<p>We deliver Monday to Friday 9am to 4pm, if not earlier. We can NOT accommodate a specific time you need your food. This is a service that is delivery focused and dozens of factors out of our control affect delivery times. We do not guarantee anytime outside of our operating times of 9am to 4pm. The food will be delivered at ANY TIME during operating hours and is subject to change without warning, but will always be there between 9am-4pm.</p>

			<p className="question"><b>Refund Policy?</b></p>

			<p>We DO NOT offer refunds on food cancellations for any reason, please try the food for a day or a week if you`re not ready to commit for the month.</p>

			<p className="question"><b>I live in an apartment, can you come to my door?</b></p>

			<p>This is an incredibly important policy. We DO NOT go up to buildings under any circumstances. We will however give you a text and/or photo when your food is dropped in the lobby. We have a VERY limited time to do the deliveries and cannot change this policy. Please DO NOT WAIT to pick up your food in apartments or even houses, we do not take responsibility for lost or stolen packages. Make sure the food is microwaved or refrigerated as soon as possible.</p>

			<p className="question"><b>Will the recipes change daily?</b></p>

			<p>The food recipes are different everyday. We focus on quality & variety in the food so you don't get bored. We have over 25 different vegetarian recipes & numerous chicken recipes.</p> 

			<p className="question"><b>Can I start in the middle of the month?</b></p>

			<p>Yes, you can start in the middle of the week or the middle of the month. You are guaranteed 20 packages, just like anyone who would be starting in the beginning of the week or month. They will be delivered monday to friday, 5 times a week for four weeks, which makes a total of 20 packages.</p>

			<p className="question"><b>Do you operate during holidays or bad weather?</b></p> 

			<p>We have a <a href="https://chat.whatsapp.com/LFlKx7NGnrUL6CDKvYZ8Q9">WhatsApp</a> group where we update customers about major delays, holidays, and cancellations. We try our best to ensure deliveries happen everyday, but in cases of extreme weather we may need to cancel for the safety of our staff. In such a case, your end-day will be extended to make up for the lost packages.</p>
		</div>
	)
}

function Contact() {
	return (
		<div className="text-block">
			<h1>Contact</h1>

			<p>Call <Phone/></p>

			<p>We deliver Monday to Friday. 9am to 4pm if not earlier.</p>

			<p>They are delivered five times a week for four weeks (20 PACKAGES TOTAL)!!!!</p>
		</div>
	)
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// Helper Functions
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

function showNavBar(show: boolean) {
	const showNavButton = document.getElementById("show-navbar-button")!;
	if (showNavButton.style.display === "none") {
		return;
	}
	const keyframes = [ {width: 0}, {width: "250px"} ];
	const options: KeyframeAnimationOptions = {
		duration: 300, direction: show ? "normal" : "reverse", fill: "forwards"
	};
	document.getElementsByTagName("nav")[0].animate(keyframes, options);
}