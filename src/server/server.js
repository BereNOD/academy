import router from './router';

(async function(){
	const result = await router();

	console.log(`Router: ${result}`);
})();