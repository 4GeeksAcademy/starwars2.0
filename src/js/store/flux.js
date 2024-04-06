const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			listDetailsPeople:[],
			favorito:[]
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
			
			guardarFavoritos(nombre) {
				const store = getStore();
				const favoritos = store.favorito;
				const newfavoritos = [...favoritos, { name: nombre, id: favoritos.length }];
				setStore({ favorito: newfavoritos });
		
				const actions = getActions();
				const item = { name: nombre, id: favoritos.length };
		
				// Verificar si el elemento ya está en favoritos y manejar su adición o eliminación
				if (favoritos.some(fav => fav.name === item.name)) {
					const updatedFavoritos = favoritos.filter(fav => fav.name !== item.name);
					setStore({ favorito: updatedFavoritos });
				} else {
					setStore({
						favorito: [...favoritos, item]
					});
				}
			  },
			  
			  // Acción para eliminar un elemento de la lista de favoritos
			  eliminaFavorito(id){
				const store = getStore();
				const fav = store.favorito;
				const favActualizado = fav.filter((item) => item.id !== id);
				setStore({favorito: favActualizado})
			  }
			
			
			
			
		}
	};
};

export default getState;
