// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '267908a9d2msh8753664677c948fp149467jsn110a18aedaa1',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key' : '267908a9d2msh8753664677c948fp149467jsn110a18aedaa1',
            'X-RapidAPI-Host' : 'cars-by-api-ninjas.p.rapidapi.com'
        }

        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
            headers: headers,
        });

        const result = await response.json();

        return result;
    }