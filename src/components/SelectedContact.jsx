import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);
useEffect(()=> {
    async function fetchContact() {
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const result = await response.json();
            setContact(result);
            console.log("Contact:", result);
            
        } catch (error) {
            console.error(error);
        }
    }
    fetchContact();
}, []);

return (
<>
<div>
<h1>Selected Contact</h1>
<p>contact Id: {selectedContactId}</p>
{contact && (
    <div>
    <p>Name:{contact.name}</p>
    <p>User Name:{contact.username}</p>
    <p>Email:{contact.email}</p>
    <p>Phone:{contact.phone}</p>
    </div>
)}
<button onClick={() => setSelectedContactId(null)}>Return to Contact List</button>
</div>
</>
);
}

export default SelectedContact;