import { useState } from "react";
import "./OrderNow.css";
import meatIcon from "../images/Meat.png";
import vegIcon from "../images/Leaf.png";
import Phone from "./Phone";

type TimeSpan = "month" | "week" | "day";
const MONTH = "month";
const WEEK = "week";
const DAY = "day";

type AddOn = "chicken" | "rice" | "roti" | "extra on friday";
const CHICKEN = "chicken";
const RICE = "rice";
const ROTI = "roti";
const EXTRA_ON_FRIDAY = "extra on friday";

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// Prices
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

// Prices for each option. "Option 0" means nothing has been selected.
const prices = [
	{ [MONTH]:   0, [WEEK]:  0, [DAY]:  0 }, // 0
	{ [MONTH]: 160, [WEEK]: 50, [DAY]: 12 }, // 1
	{ [MONTH]: 180, [WEEK]: 60, [DAY]: 14 }, // 2
	{ [MONTH]: 200, [WEEK]: 65, [DAY]: 15 }, // 3
	{ [MONTH]: 220, [WEEK]: 70, [DAY]: 16 }, // 4
	{ [MONTH]: 230, [WEEK]: 75, [DAY]: 17 }, // 5
	{ [MONTH]: 250, [WEEK]: 75, [DAY]: 17 }  // 6
];
// Prices for add-ons
const addOnPrices = {
	[CHICKEN]:         { [MONTH]: 40, [WEEK]: 20,  [DAY]: 10 },
	[RICE]:            { [MONTH]: 30, [WEEK]: 7.5, [DAY]: 1.5 },
	[ROTI]:            { [MONTH]: 20, [WEEK]: 5,   [DAY]: 1 },
	[EXTRA_ON_FRIDAY]: [0, 32, 36, 40, 44, 44, 50]
};

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// OrderNow Component
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

export default function OrderNow() {
	// States
	const [option, setOption] = useState(0);
	const [time, setTime] = useState<TimeSpan>(MONTH);
	const [addChicken, setAddChicken] = useState(false);
	const [addRice, setAddRice] = useState(false);
	const [addRoti, setAddRoti] = useState(false);
	const [addExtraOnFriday, setAddExtraOnFriday] = useState(false);
	// Total Price Calculation
	let totalPrice = prices[option][time];
	totalPrice += (addChicken ? 1 : 0) * addOnPrices[CHICKEN][time];
	totalPrice += (addRice ? 1 : 0)    * addOnPrices[RICE][time];
	totalPrice += (addRoti ? 1 : 0)    * addOnPrices[ROTI][time];
	if (addExtraOnFriday && time === MONTH) {
		totalPrice += addOnPrices[EXTRA_ON_FRIDAY][option];
	}
	// Order Summary
	let orderSummary = `to order option ${option} for one ${time}`;
	if (addChicken || addRice || addRoti || addExtraOnFriday) {
		orderSummary += " plus added ";
	}
	orderSummary += addChicken ? CHICKEN + ", " : "";
	orderSummary += addRice ? RICE + ", " : "";
	orderSummary += addRoti ? ROTI + ", " : "";
	orderSummary += addExtraOnFriday ? "extra package on fridays" : "";
	orderSummary = orderSummary.replace(/,\s$/, "");
	// JSX
	return (<>
		<div className="total">
			<h1>Total: {money(totalPrice)}</h1>
			<p className="subheading">delivery included</p>
			{
			option !== 0 &&
				<>
				<h2>Call <Phone/></h2>
				<p className="order-summary">{orderSummary}</p>
				</>
			}
		</div>
		<div className="order-now-content">
			{/* Option 1 */}
			<Card option={1} setOption={setOption} setTime={setTime} veg>
				<p>4 roti OR 2 with rice</p>
				<p>1 Large Veg item (our choice & will alternate between Daal OR Subji.)</p>
				<p>Sweets on Fridays</p>
			</Card>
			{/* Option 2 */}
			<Card option={2} setOption={setOption} setTime={setTime} veg>
				<p>1 Large Daal</p>
				<p>1 Large Subji (no Roti/Rice)</p>
				<p>Sweets on Fridays</p>
			</Card>
			{/* Option 3 */}
			<Card option={3} setOption={setOption} setTime={setTime} veg>
				<p>4 Roti with Rice</p> 
				<p>1 Large Dal</p>
				<p>1 Subji </p>
				<p>Sweets on Fridays </p>
			</Card>
			{/* Option 4 */}
			<Card option={4} setOption={setOption} setTime={setTime} veg>
				<p>8 roti OR 6 roti with rice</p>
				<p>1 Large Daal </p>
				<p>1 Subji</p>
				<p>Sweets on Fridays. </p>
			</Card>
			{/* Option 5 */}
			<Card option={5} setOption={setOption} setTime={setTime} veg={false}>
				<p>8 roti or 6 with rice</p>
				<p>1 Large Daal</p>
				<p>1 Subji</p>
				<p>*Chicken will replace Subji 2x a week in a Large 12oz container</p>
				<p>Sweets on Fridays</p>
			</Card>
			{/* Option 6 */}
			<Card option={6} setOption={setOption} setTime={setTime} veg>
				<p>8 roti or 6 roti with rice</p>
				<p>1 large 12oz dal</p>
				<p>1 large 12oz subji </p>
				<p>Sweets on Fridays </p>
			</Card>
		</div>
		<div className="add-on-selector-container">
			{/* Add Chicken */}
			<AddOnSelector 
				item={CHICKEN}
				option={option}
				setChecked={setAddChicken}
				time={time}
			/>
			{/* Add Rice */}
			<AddOnSelector 
				item={RICE} 
				option={option}
				setChecked={setAddRice}
				time={time}
			/>	
			{/* Add Roti */}
			<AddOnSelector 
				item={ROTI}
				option={option}
				setChecked={setAddRoti}
				time={time}
			/>	
			{/* Add One Extra Package on Fridays */}
			<AddOnSelector 
				item={EXTRA_ON_FRIDAY} 
				option={option}
				setChecked={setAddExtraOnFriday}
				time={time}
			/>
		</div>
	</>);
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// Helper Components
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

interface CardProps extends React.PropsWithChildren {
	option: number;
	setOption: React.Dispatch<React.SetStateAction<number>>;
	setTime: React.Dispatch<React.SetStateAction<TimeSpan>>;
	veg: boolean;
}

function Card({option, setOption, setTime, veg, children}: CardProps) {
	return (
		<div className="card">
			<div className="card_content">
				<img src={veg ? vegIcon : meatIcon} alt={veg ? "veg" : "meat"}/>
				<div className="card_text">
					{children}
				</div>
				<div className="card_selector-container">
					{/* Monthly */}
					<MealPlanSelector 
						option={option}
						time={MONTH}
						setOption={setOption}
						setTime={setTime}
					/>
					{/* Weekly */}
					<MealPlanSelector 
						option={option}
						time={WEEK}
						setOption={setOption}
						setTime={setTime}
					/>
					{/* Daily */}
					<MealPlanSelector 
						option={option}
						time={DAY}
						setOption={setOption}
						setTime={setTime}
					/>
				</div>
			</div>
		</div>
	);
}

interface MealPlanSelectorProps {
	option: number;
	time: TimeSpan;
	setOption: React.Dispatch<React.SetStateAction<number>>;
	setTime: React.Dispatch<React.SetStateAction<TimeSpan>>;
}

function MealPlanSelector({ option, time, setOption, setTime }: MealPlanSelectorProps) {
	const radioGroup = "meal-plan-selector";
	const id = `meal-plan-${option}-${time}`
	return (<>
		<input 
			className={radioGroup} 
			id={id}
			type="radio" 
			name={radioGroup}
			onChange={ () => {setOption(option); setTime(time);} }
		/>
		<label htmlFor={id}>
			{time}
			<br />
			<b>${prices[option][time]}</b>
		</label>
	</>)
}

interface AddOnSelectorProps {
	item: AddOn;
	option: number;
	setChecked: React.Dispatch<React.SetStateAction<boolean>>;
	time: TimeSpan;
}

function AddOnSelector({item, option, setChecked, time}: AddOnSelectorProps) {
	let text: string;
	if (item !== EXTRA_ON_FRIDAY) {
		text = `Add ${item} for ${money(addOnPrices[item][time])}`;
	} 
	else {
		text = "Add one extra package every friday for ";
		text += `${money(addOnPrices[EXTRA_ON_FRIDAY][option])} (month only)`;
	}
	const id = "add-" + item.replaceAll(" ", "-");
	const disabled = !option || (item === EXTRA_ON_FRIDAY && time !== MONTH);
	return (<>
		<input 
			className="add-on-selector"
			type="checkbox" 
			id={id} 
			disabled={disabled}
			onChange={(e) => setChecked(e.currentTarget.checked && !disabled)} 
		/>
		<label htmlFor={id}> 
			{text}
		</label>
		<br />
	</>)
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// Helper Functions
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

function money(amount: number) {
	return "$" + (amount % 1 === 0 ? `${amount}` : amount.toFixed(2));
}