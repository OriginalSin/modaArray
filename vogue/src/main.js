import App from './App.html';

let currentIndex = Number(location.hash.substr(1)) || 1;
const app = new App({
	target: document.body,
	data: {
		pictureItems: [
			{md: '5b2d273b47b9940fb269b91f', nm: 2228}, 
			{md: '5b2d273c7357fe57e6f1737b', nm: 2254}, 
			{md: '5b2d277a7357fe57e6f1737d', nm: 2272}, 
			{md: '5b2d27ba748d2059b8363aba', nm: 2296}, 
			{md: '5b2d27bb13302553811d855f', nm: 2316}, 
			{md: '5b2d27f8f90cc35fe4d59ec2', nm: 2338}, 
			{md: '5b2d27fb405ee337f2a03593', nm: 2354}, 
			{md: '5b2d27fc47b9940fb269b921', nm: 2370}, 
			{md: '5b2d283c30f94b78490af428', nm: 2384}, 
			{md: '5b2d283d405ee337f2a03596', nm: 2400}, 
			{md: '5b2d287e748d2059b8363abf', nm: 2414}, 
			{md: '5b2d28807e0ad8413011aab9', nm: 2430}, 
			{md: '5b2d287f4c6bbc393b0c95d2', nm: 2444}, 
			{md: '5b2d28bc73868676444b51b5', nm: 2456}, 
			{md: '5b2d28bd73868676444b51b7', nm: 2474}, 
			{md: '5b2d28be4c6bbc393b0c95d4', nm: 2486}, 
			{md: '5b2d28fbdfb55f5d708a2ce9', nm: 2504}, 
			{md: '5b2d28fc405ee337f2a03599', nm: 2518}, 
			{md: '5b2d28fddfb55f5d708a2ceb', nm: 2532}, 
			{md: '5b2d26fe748d2059b8363ab6', nm: 2206}
		],
		currentIndex: currentIndex - 1,
		name: 'world'
	}
});

export default app;