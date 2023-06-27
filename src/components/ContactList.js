import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from './ContactCard';

const ContactList = (props) => {
    // console.log(props);
    const inputEl = useRef("");
    const deleteContact = (id) => {
        props.getContactId(id);
    }
    const renderContacts = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} getId={deleteContact} key={contact.id}/>
        )
    })
    const getSearchTerm = () => {
        // console.log(inputEl.current.value)

        // to pass typing to app.js
        props.searchKeyword(inputEl.current.value);
    }
    return (
        <div className="mt-3">
            <h4>Contact List</h4>
            <Link to="/">
                <button className="btn btn-primary">AddContact</button>
            </Link>

            <div>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                    value={props.term}
                    onChange={getSearchTerm}
                    ref={inputEl}
                    // also e.target.value can be used instead of useRef
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
            
            <ul className="list-group mt-2">
                {/* <ContactCard contacts={contacts}/> */}
                {renderContacts}
            </ul>
        </div>
    )
}

export default ContactList;