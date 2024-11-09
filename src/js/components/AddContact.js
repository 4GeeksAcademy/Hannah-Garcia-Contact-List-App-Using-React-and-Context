import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);
    const [contact, setContact] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg"
    });

    useEffect(() => {
        if (isEditMode) {
            const existingContact = store.contacts.find((contact) => contact.id === parseInt(id));
            if (existingContact) {
                setContact(existingContact);
            }
        }
    }, [id, isEditMode, store.contacts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            actions.updateContact(contact.id, contact);
        } else {
            actions.createContact(contact);
        }
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={contact.fullName}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={contact.email}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={contact.phone}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={contact.address}
                onChange={handleChange}
                required
            />
            <button type="submit">{isEditMode ? "Update Contact" : "Save Contact"}</button>
        </form>
    );
};

export default AddContact;
