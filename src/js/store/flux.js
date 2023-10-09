const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ],
			contacts: [],
			shoes: ["nike", "adidas"] //ejemplo
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			GetContact: (name) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${name}`)
					.then((result) => result.json())
					.then((data) => {
						let store = getStore()
						setStore({ ...store, contacts: data });
						console.log("Contacts obtained successfully: ", data);
					})
					.catch((error) => {
						console.log("Error getting contacts: ", error);
					});

			},

			createContact: (data) => {
				console.log(data)
				const actions = getActions();
				const URL = "https://playground.4geeks.com/apis/fake/contact/";
				const opt = {
					method: "POST",
					headers: {
						"Content-type": "Application/json",
					},
					body: JSON.stringify(data),
				};
				fetch(URL, opt)
					.then((response) => {
						console.log("esto es la respuesta", response);
						if (response.ok) {
							// actions.GetContact();
							alert("Contacto creado con éxito");
						} else {
							alert("Error al crear contacto");
						}
					})
					.catch((error) => {
						console.log("hay un error", error);
					});
			},


			DeleteContact: (id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "Delete"
				})
					.then((result) => result.json())
					.then((data) => {
						setStore({ contacts: data });
						console.log("Contacts obtained successfully: ", data);
					})
					.catch((error) => {
						console.log("Error getting contacts: ", error);
					});

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
