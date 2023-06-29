import { useState } from "react";

enum TimeSpan {
	month = "month",
	week = "week",
	day = "day"
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// Prices
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

// Prices for each option. "Option 0" means nothing has been selected.
const prices = [
	{[TimeSpan.month]:   0, [TimeSpan.week]:  0, [TimeSpan.day]:  0}, // 0
	{[TimeSpan.month]: 160, [TimeSpan.week]: 50, [TimeSpan.day]: 12}, // 1
	{[TimeSpan.month]: 180, [TimeSpan.week]: 60, [TimeSpan.day]: 14}, // 2
	{[TimeSpan.month]: 200, [TimeSpan.week]: 65, [TimeSpan.day]: 15}, // 3
	{[TimeSpan.month]: 220, [TimeSpan.week]: 70, [TimeSpan.day]: 16}, // 4
	{[TimeSpan.month]: 230, [TimeSpan.week]: 75, [TimeSpan.day]: 17}, // 5
	{[TimeSpan.month]: 250, [TimeSpan.week]: 75, [TimeSpan.day]: 17}  // 6
];
// Prices for add-ons
const addOnPrices = {
	"chicken":{[TimeSpan.month]: 40, [TimeSpan.week]: 20,  [TimeSpan.day]: 10},
	"rice":   {[TimeSpan.month]: 30, [TimeSpan.week]: 7.5, [TimeSpan.day]: 1.5},
	"roti":   {[TimeSpan.month]: 20, [TimeSpan.week]: 5,   [TimeSpan.day]: 1}
};

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// Component
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

export default function OrderNow() {
	// States
	const [option, setOption] = useState(0);
	const [time, setTime] = useState(TimeSpan.month);
	const [addChicken, setAddChicken] = useState(false);
	const [addRice, setAddRice] = useState(false);
	const [addRoti, setAddRoti] = useState(false);
	// Total Price Calculation
	let totalPrice = prices[option][time];
	totalPrice += (addChicken ? 1 : 0) * addOnPrices["chicken"][time];
	totalPrice += (addRice ? 1 : 0)    * addOnPrices["rice"][time];
	totalPrice += (addRoti ? 1 : 0)    * addOnPrices["roti"][time];
	// JSX
	return (<>
		<h1>Total: ${totalPrice}</h1>
		<div className="order-now-content">
			{/* Option 1 */}
			<Card option={1} setOption={setOption} setTime={setTime} veg>
				<p>4 roti OR 2 with rice</p>
				<p>1 Large Veg item (our choice & will alternate between Daal OR Subji.)</p>
				<p>Sweets on Fridays</p>
				<p>Delivery to your door included.</p>
			</Card>
			{/* Option 2 */}
			<Card option={2} setOption={setOption} setTime={setTime} veg>
				<p>1 Large Daal</p>
				<p>1 Large Subji (no Roti/Rice)</p>
				<p>Sweets on Fridays</p>
				<p>Delivery to your door.</p>
			</Card>
			{/* Option 3 */}
			<Card option={3} setOption={setOption} setTime={setTime} veg>
				<p>4 Roti with Rice</p> 
				<p>1 Large Dal</p>
				<p>1 Subji </p>
				<p>Sweets on Fridays </p>
				<p>Delivery included</p> 
			</Card>
			{/* Option 4 */}
			<Card option={4} setOption={setOption} setTime={setTime} veg>
				<p>8 roti OR 6 roti with rice</p>
				<p>1 Large Daal </p>
				<p>1 Subji</p>
				<p>Sweets on Fridays. </p>
				<p>Delivery to your door is included.</p>
			</Card>
			{/* Option 5 */}
			<Card option={5} setOption={setOption} setTime={setTime} veg={false}>
				<p>8 roti or 6 with rice</p>
				<p>1 Large Daal</p>
				<p>1 Subji</p>
				<p>*Chicken will replace Subji 2x a week in a Large 12oz container</p>
				<p>Sweets on Fridays</p>
				<p>Delivery included.</p>
			</Card>
			{/* Option 6 */}
			<Card option={6} setOption={setOption} setTime={setTime} veg>
				<p>8 roti or 6 roti with rice</p>
				<p>1 large 12oz dal</p>
				<p>1 large 12oz subji </p>
				<p>Sweets on Fridays </p>
				<p>Delivery included </p>
			</Card>

		</div>
		{/* Add Chicken */}
		<AddOn 
			item="chicken" 
			setChecked={setAddChicken}
			time={time}
		/>
		{/* Add Rice */}
		<AddOn 
			item="rice" 
			setChecked={setAddRice}
			time={time}
		/>	
		{/* Add Roti */}
		<AddOn 
			item="roti" 
			setChecked={setAddRoti}
			time={time}
		/>	
	</>);
}

// Helper Components

interface CardProps extends React.PropsWithChildren {
	option: number;
	setOption: React.Dispatch<React.SetStateAction<number>>;
	setTime: React.Dispatch<React.SetStateAction<TimeSpan>>;
	veg: boolean;
}

function Card({option, setOption, setTime, veg, children}: CardProps) {
	return (
		<div className="card">
			<h2>{veg ? "VEG": "MEAT"}</h2>
			<div className="card_content">
				{children}
			</div>
			{/* Monthly */}
			<input type="radio" name="meal-plan" value="month"
				onChange={() => {setOption(option); setTime(TimeSpan.month);}}
			/>
			<label htmlFor="child">
				${prices[option][TimeSpan.month]} for the month
			</label><br />
			{/* Weekly */}
			<input type="radio" name="meal-plan" value="week"
				onChange={() => {setOption(option); setTime(TimeSpan.week);}}
			/>
			<label htmlFor="adult">
				${prices[option][TimeSpan.week]} for the week
			</label><br />
			{/* Daily */}
			<input type="radio" name="meal-plan" value="day"
				onChange={() => {setOption(option); setTime(TimeSpan.day);}}
			/>
			<label htmlFor="senior">
				${prices[option][TimeSpan.day]} for the day.
			</label>
		</div>
	);
}

interface AddOnProps {
	item: "chicken" | "rice" | "roti";
	setChecked: React.Dispatch<React.SetStateAction<boolean>>;
	time: TimeSpan;
}

function AddOn({item, setChecked, time}: AddOnProps) {
	const id = "add-" + item;
	return (<>
		<input type="checkbox" id={id} 
			onChange={ (e) => {
				setChecked(e.currentTarget.checked);
			}} 
		/>
		<label htmlFor={id}> Add {item} for ${addOnPrices[item][time]}</label>
		<br />
	</>)
}