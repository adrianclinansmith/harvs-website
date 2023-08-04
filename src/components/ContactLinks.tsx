export function Phone() {
	return (
		<a href="tel:+19054606000" style={{color: "rgb(80, 120, 60)"}}>
			1-905-460-6000
		</a>
	)
}

export function WhatsApp() {
	const url = "https://chat.whatsapp.com/LFlKx7NGnrUL6CDKvYZ8Q9";
	return (
		<a href={url} style={{color: "rgb(80, 120, 60)"}}>
			WhatsApp
		</a>
	)
}
