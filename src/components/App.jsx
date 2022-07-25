import { Component } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerAddUser = user => {
    if (
      this.state.contacts.some(
        option => option.name.toLowerCase() === user.name.toLowerCase()
      )
    ) {
      alert(`${user.name} is already in contacts.`);
      return;
    } else if (
      this.state.contacts.some(option => option.number === user.number)
    ) {
      alert(`${user.number} is already in numbers.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, user],
    }));
  };

  handlerContactList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handlerFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  handlerDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    console.log(parseContacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }

    // setTimeout(() => {
    //   this.setState({ contacts: parseContacts });
    // }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(this.state);
    if (this.state.contacts !== prevState.contacts) {
      console.log('x');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <h1>Phonebook</h1>

          <h3>Name</h3>
          <Form onAddUser={this.handlerAddUser} />

          <h2>Contacts</h2>
          <Filter onHandlerFilter={this.handlerFilter} />
          <ContactList
            onContactList={this.handlerContactList()}
            onDelete={this.handlerDeleteContact}
          />
        </div>
      </>
    );
  }
}
