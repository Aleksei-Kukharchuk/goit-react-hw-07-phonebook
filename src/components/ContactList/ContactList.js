import { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import {phonebookOperations, phonebookSelectors, changeFilter} from '../../redux/phonebook'
import fade from '../../fade.module.css'
import s from './ContactList.module.css'


class ContactList extends Component {
    
    onClickHandle = (contactId) => {
        const { deleteContact, clearFilter } = this.props;
        deleteContact(contactId);
        clearFilter('');
    }

    componentDidMount() {
        this.props.fetchContacts()
    }

    render() {
    const { contacts } = this.props;
     return ( 
        <TransitionGroup component='ul' className={s.list}>
            {contacts.map(contact => (
                <CSSTransition key={contact.id} timeout={500} classNames={fade}>
                    <li className={s.item}>
                    {contact.name}: {contact.number}
                    <button onClick={ () => this.onClickHandle(contact.id)} className={s.button}>Delete</button>
                </li>
                </CSSTransition>
                )
            )} 
        </TransitionGroup>
    ) 
   }
}

ContactList.propType = {
    contacts: PropTypes.array,
    onDeleteContact: PropTypes.func,
}

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getVisiableTodos(state),
})

const mapDispatchToProps = dispatch => ({
    deleteContact: (contactId) => dispatch(phonebookOperations.deleteContact(contactId)),
    clearFilter: (e) => dispatch(changeFilter('')),
    fetchContacts: () => dispatch(phonebookOperations.fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)