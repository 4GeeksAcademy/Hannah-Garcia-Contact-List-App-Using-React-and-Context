import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import ContactCard from "./ContactCard";
import "../../styles/contactList.css";

const ContactList = () => {
    const { store } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div>
            <h1>Contact List</h1>
            <button onClick={() => navigate("/add")}>Add New Contact</button>
            {store.contacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                    onEdit={() => navigate(`/edit/${contact.id}`)}
                />
            ))}
        </div>
    );
};

export default ContactList;
