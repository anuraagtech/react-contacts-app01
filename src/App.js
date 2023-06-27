// import logo from './logo.svg';
import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import {v4 as uuid} from 'uuid';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import api from './api/contacts';
import EditContact from './components/EditContact';

function App() {
  // const LOCAL_STORE = "local_contacts";
  // const contacts = [
  //   {
  //     "id": 1,
  //     "name": "Anuraag",
  //     "email": "anu@gmail.com"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Moharana",
  //     "email": "moh@gmail.com"
  //   }
  // ]

  // while using json-server type server
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  // while using localStorage
  // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORE)) || [])

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  // const parentContactHandler = (addedstate) => {
  //   setContacts([...contacts, {id: uuid(), ...addedstate}])
  // }

  // Add Contact
  const parentContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    }
    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) {
        setContacts(allContacts);
      }
    }
    getAllContacts();
  }, []);

  // useEffect(() => {
  //   // console.table(contacts)
  //   localStorage.setItem(LOCAL_STORE, JSON.stringify(contacts));
  // }, [contacts])

  // const removeContact = (id) => {
  //   const newContacts = contacts.filter((contacts) => {
  //     return contacts.id !== id ;
  //   })
  //   setContacts(newContacts);
  // }

  // Delete Contact - using axios delete api method, we will not get any response like above, we only get the status code here
  const removeContact = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContacts = contacts.filter((contacts) => {
      return contacts.id !== id ;
    })
    setContacts(newContacts);
  }

  // edit contact - similar to add
  const updateContactHandler = async (contact) => {
    // console.log(contact);
    // const request = {
    //   id,
    //   ...contact,
    // }
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const {id, name, email} = response.data;
    console.log(response.data);
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data} : contact
      })
    );
  }

  // search
  const searchHandler = (seterm) => {
    // console.log(seterm)
    setSearchTerm(seterm);
  }

  // const Layout = () => {
  //   return (
  //     <>
  //     <Header />
  //     <div className='container mt-3'>
  //     <Outlet />
  //     </div>
  //     </>
  //   )
  // }

  return (
    <div >
      <BrowserRouter>
      <Header />
        <div className='container mt-3'>
        <Routes>
          <Route exact path='/contacts' 
            element={
              <ContactList 
                contacts={contacts} 
                getContactId={removeContact}
                term={searchTerm}
                searchKeyword={searchHandler}
              />}>
          </Route>
          <Route exact path='/' element={<AddContact childContactHandler={parentContactHandler}/>}></Route>
          <Route exact path='/contact/:id' element={<ContactDetails />}></Route>
          <Route exact path='/editcontact/:id' element={<EditContact contact={contact} updateContactHandler={updateContactHandler} />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
