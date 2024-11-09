import React, { useContext } from "react";
import { Context } from "../store/appContext";

const ContactCard = ({ contact, onEdit }) => {
    const { actions } = useContext(Context);

    const handleDelete = () => {
        actions.deleteContact(contact.id);
    };

    return (
        <div className="contact-card">
            <img src={contact.image} alt={contact.fullName} />
            <h5>{contact.fullName}</h5>
            <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
            <p><i className="fas fa-phone-alt"></i> {contact.phone}</p>
            <p><i className="fas fa-envelope"></i> {contact.email}</p>
            <div className="button-group">
                <button onClick={onEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default ContactCard;
