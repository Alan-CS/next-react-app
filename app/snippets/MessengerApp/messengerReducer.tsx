export const initialState = {
    selectedId: 0,
    messages: ['', '', ''],
};

export function messengerReducer(state, action) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
            };
        }
        case 'edited_message': {
            return {
                ...state,
                messages: state.messages.map( (m, i) => {
                    if (i === state.selectedId) {
                        return action.message;
                    }
                    return m;
                })
            };
        }
        case 'sent_message': {
            return {
                ...state,
                messages: state.messages.map( (m, i) => {
                    if (i === state.selectedId) {
                        return '';
                    }
                    return m;
                })
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
