const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [{
				id: 1,
				fullName: "Hannah Garcia",
				address: "123 Main Street",
				phone: "(123) 456-7890",
				email: "hannahgarcia@gmail.com",
				image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg"
			}] // Initialize contacts as an empty array
        },
        actions: {
            // Function to load contacts from API
            loadContacts: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/docs");
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setStore({ contacts: data });
                } catch (error) {
                    console.error("Failed to load contacts:", error);
                }
            },

            // Create a new contact
            createContact: (contact) => {
				const store = getStore();
				const newContact = { id: Date.now(), ...contact, image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg" // Add default image
				}; // Generate a unique ID
				setStore({ contacts: [...store.contacts, newContact] });
				console.log("New contact added:", newContact);
				console.log("Updated contacts:", getStore().contacts);
			},
			

            // Update an existing contact
            updateContact: (id, updatedContact) => {
				const store = getStore();
				const updatedContacts = store.contacts.map((contact) =>
					contact.id === id ? { ...contact, ...updatedContact } : contact
				);
				setStore({ contacts: updatedContacts });
				console.log(`Contact with ID ${id} has been updated.`);
			},
			

            // Delete a contact
			deleteContact: (id) => {
                const store = getStore();
                const updatedContacts = store.contacts.filter(contact => contact.id !== id);
                setStore({ contacts: updatedContacts });
                console.log(`Contact with ID ${id} has been deleted.`);
            },
			
			
        }
    };
};

export default getState;
