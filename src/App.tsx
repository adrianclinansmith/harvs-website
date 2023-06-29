import React, { useState } from 'react';
import logo from './images/TheVegCultureLogo.jpg';
import homeImage from "./images/HomeBackground.png";
import './App.css';
import OrderNow from "./components/OrderNow";

function App() {
	const [content, setContent] = useState("HOME");
	return (
		<div className="App">
			<div className="banner">
				<div className="banner_item">
					FREE DELIVERY TO KITCHENER, WATERLOO, CAMBRIDGE & GUELPH
				</div>
				<div className="banner_item">
					FRESH MADE INDIAN FOOD DELIVERED TO YOUR DOOR MONDAY TO 
					FRIDAY FOR AS LOW AS $160/MONTH!
				</div>
				{/* Repeat first element for infinite carousel in CSS */}
				<div className="banner_item">
					FREE DELIVERY TO KITCHENER, WATERLOO, CAMBRIDGE & GUELPH
				</div>
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
			<div className="content">
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

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// Helper Components
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

interface NavLinkProps extends React.PropsWithChildren {
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

function NavLink({ children, setContent }: NavLinkProps) {
	return (
		<button className="nav-link" 
			onClick={ (e) => { 
				const navLinks = document.getElementsByClassName("nav-link");
				for (let i = 0; i < navLinks.length; i++) {
					(navLinks[i] as HTMLElement).style.textShadow = "none";
				}
				setContent(e.currentTarget.innerText); 
				e.currentTarget.style.textShadow = "0 0 0.5px black";
			}}
		>
			{children}
		</button>
	);
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// Content Components
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
			<p>KW tiffin is a monthly Indian food subscription service that's cooked, packaged & delivered right to your door.</p>

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

// function OrderNow() {
// 	const [total, setTotal] = useState(0);
// 	return (<>
// 		<h1>Total: ${total}</h1>
// 		<div className="order-now-content">
// 			{/* Option 1 */}
// 			<Card>
// 				<p>VEG</p>
// 				<p>4 roti OR 2 with rice</p>
// 				<p>1 Large Veg item (our choice & will alternate between Daal OR Subji.)</p>
// 				<p>Sweets on Fridays</p>
// 				<p>Delivery to your door included.</p>
// 				<p>$160</p>
// 			</Card>
// 			{/* Option 2 */}
// 			<Card>
// 				<p>VEG</p>
// 				<p>1 Large Daal</p>
// 				<p>1 Large Subji (no Roti/Rice)</p>
// 				<p>Sweets on Fridays</p>
// 				<p>Delivery to your door.</p>
// 				<p>$180</p>
// 			</Card>
// 			{/* Option 3 */}
// 			<Card>
// 				<p>VEG</p>
// 				<p>4 Roti with Rice</p> 
// 				<p>1 Large Dal</p>
// 				<p>1 Subji </p>
// 				<p>Sweets on Fridays </p>
// 				<p>Delivery included</p> 
// 				<p>$200</p>
// 			</Card>
// 			{/* Option 4 */}
// 			<Card>
// 				<p>VEG </p>
// 				<p>8 roti OR 6 roti with rice</p>
// 				<p>1 Large Daal </p>
// 				<p>1 Subji</p>
// 				<p>Sweets on Fridays. </p>
// 				<p>Delivery to your door is included.</p>
// 				<p>$220</p>
// 			</Card>
// 			{/* Option 5 */}
// 			<Card>
// 				<p>MEAT</p>
// 				<p>8 roti or 6 with rice</p>
// 				<p>1 Large Daal</p>
// 				<p>1 Subji</p>
// 				<p>*Chicken will replace Subji 2x a week in a Large 12oz container</p>
// 				<p>Sweets on Fridays</p>
// 				<p>Delivery included.</p>
// 				<p>$240</p>
// 			</Card>
// 			{/* Option 6 */}
// 			<Card>
// 				<p>LARGE VEG</p>
// 				<p>8 roti or 6 roti with rice</p>
// 				<p>1 large 12oz dal</p>
// 				<p>1 large 12oz subji </p>
// 				<p>Sweets on Fridays </p>
// 				<p>Delivery included </p>
// 				<p>$250</p>
// 			</Card>
// 		</div>
// 	</>);
// }

function HowItWorks() {
	return (
		<div className="text-block">
			<p>Once you make your payment, you will be set up with our food delivery service the next business day.</p>

			<p>We will cook, package and deliver fresh delicious Indian food to your door (between 9am and 4pm).</p>

			<p>The food comes in a microwave safe container that food should be warmed in before consuming or put in the fridge for storage immediately.</p>

			<p>Then we do it again with new recipes the next day.</p>

			<p>It`s as easy as that! To get started today ORDER NOW.</p>
		</div>
	);
}

function Faq() {
	return (
		<div className="text-block">
			<p><b>Can I try the food before signing up for the month?</b></p>

			<p>YES! You can sign up for a day, a week (5 days) or a month (20 days). Just place your order here.</p>

			<p><b>Can I pause my packages during my subscription?</b></p>

			<p>NO, please note that you will not be able to pause or stop your packages once signing up. Skipping a delivery will not be accounted for regardless if you request a delivery be made or not.</p>  

			<p>The food is made in a licensed commercial kitchen that`s professionally cleaned daily by food certified cooks & staff.</p> 

			<p>We cube some of the vegetables fresh in house & the food is cooked every morning and packaged piping hot.</p>

			<p><b>What are Delivery Times?</b></p>

			<p>We deliver Monday to Friday 9am to 4pm, if not earlier. We can NOT accommodate a specific time you need your food. This is a service that is delivery focused and dozens of factors out of our control affect delivery times. We do not guarantee anytime outside of our operating times of 9am to 4pm. The food will be delivered at ANY TIME during operating hours and is subject to change without warning, but will always be there between 9am-4pm.</p>

			<p><b>Refund Policy?</b></p>

			<p>We DO NOT offer refunds on food cancellations for any reason, please try the food for a day or a week if you`re not ready to commit for the month.</p>

			<p><b>I live in an apartment, can you come to my door?</b></p>

			<p>This is an incredibly important policy. We DO NOT go up to buildings under any circumstances. We will however give you a text and/or photo when your food is dropped in the lobby. We have a VERY limited time to do the deliveries and cannot change this policy. Please DO NOT WAIT to pick up your food in apartments or even houses, we do not take responsibility for lost or stolen packages. Make sure the food is microwaved or refrigerated as soon as possible.</p>

			<p>The food recipes are different everyday. We focus on quality & variety in the food so you don't get bored. We have over 25 different vegetarian recipes & numerous chicken recipes.</p> 
		</div>
	)
}

function Contact() {
	return (
		<div className="text-block">
			<p>1 (905) 460-6000</p>

			<p>We deliver Monday to Friday. 9am to 4pm if not earlier.</p>

			<p>They are delivered five times a week for four weeks (20 PACKAGES TOTAL)!!!!</p>
		</div>
	)
}

export default App;
