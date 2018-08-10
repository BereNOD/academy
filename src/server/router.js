async function router() {
	let value = 0;
	value = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
	return value;
}

export default router;