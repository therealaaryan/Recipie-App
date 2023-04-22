document.addEventListener("DOMContentLoaded", ()=>{
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'afc79ed904msh148ada5c25e3f34p1ded2ajsn2e1d93e4f341',
			'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
		}
	};
	
	
	const myFun = (recipie)=>{
		recipieName.innerHTML = recipie
		fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=' + recipie, options)
		.then(response => response.json())
		.then(response => {
			const firstObject = response[0];
			ingredients.innerHTML = firstObject.ingredients;
			servings.innerHTML = firstObject.servings;
			instructions.innerHTML = firstObject.instructions;
			console.log(response)})
		.catch(err => console.error(err));
	}
	
	submit = document.getElementById("submit")
	
	submit.addEventListener("click", (e)=>{
		e.preventDefault()
		myFun(recipie.value)
	})
	
	myFun("Butter Chicken")
}); 
