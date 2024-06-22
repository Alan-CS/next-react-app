export default function ContactList({contacts, selectedId, dispatch}) {
    return (
        <section className="">
            <ul className="">
                {contacts.map((contact) => (
                    <li className="bg-gray-200 hover:bg-gray-300 px-6 py-1 rounded-sm border-1"
                        key={contact.id}
                     >
                        <button
                            onClick={() => {
                                dispatch({
                                    type: 'changed_selection',
                                    contactId: contact.id,
                                });
                            }}>
                            {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
