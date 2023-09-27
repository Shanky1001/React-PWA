export const runServiceWorker = () => {
	// if ("serviceWorker" in Navigator) {
		const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
		navigator.serviceWorker
			.register(swUrl)
			.then((res) => {
				console.log("service", res);
			})
			.catch((err) => console.error(err));
	// }
};
