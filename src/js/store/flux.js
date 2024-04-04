const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			listDetailsPeople:[]
		},
		actions: {
			
			loadSomePeople: async () => {
				
				try {
					const result = await fetch('https://www.swapi.tech/api/people/'); // Obtener resultados de la API principal
					const data = await result.json(); // Convertir la respuesta a formato JSON
			
					let peopleDetailList = []; // Inicializar una lista para almacenar los detalles de las personas
			
					// Iterar sobre cada elemento en la lista de resultados
					for (const person of data.results) {
						try {
							const resp = await fetch(person.url); // Obtener los detalles de la persona accediendo a su URL
							if (!resp.ok) continue; // Si la respuesta no es exitosa, pasar a la siguiente iteración
							const personData = await resp.json(); // Convertir la respuesta a formato JSON
							peopleDetailList.push(personData); // Agregar los detalles de la persona a la lista
						} catch (error) {
							console.error('Error al cargar datos de la persona:', error); // Manejar errores
						}
					}
			
					const store = getStore(); // Obtener el estado actual de la tienda
					setStore({ ...store, listDetailsPeople: peopleDetailList }); // Actualizar el estado de la tienda con los detalles de las personas obtenidos de la API
				} catch (error) {
					console.error('Error al cargar datos:', error); // Manejar errores
				}
			},
			
					
			
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
