import {Action, CHANGED_SELECTION, EDITED_MESSAGE, SENT_MESSAGE} from "@/app/snippets/MessengerApp/Actions";

export interface State {
    selectedId: number;
    messages: string[];
}

export const initialState: State = {
    selectedId: 0,
    messages: ['', '', ''],
};

export function messengerReducer(state: State, action: Action): State {
    switch (action.type) {
        case CHANGED_SELECTION: {
            return {
                ...state,
                selectedId: action.contactId,
            };
        }
        case EDITED_MESSAGE: {
            return {
                ...state,
                messages: state.messages.map((m, i) => {
                    if (i === state.selectedId) {
                        return action.message;
                    }
                    return m;
                }),
            };
        }
        case SENT_MESSAGE: {
            return {
                ...state,
                messages: state.messages.map((m, i) => {
                    if (i === state.selectedId) {
                        return '';
                    }
                    return m;
                }),
            };
        }
        default: {
            // For some reason this shows a typescript error
            // throw new Error('Unknown action: ' + action.type);
            return state;
        }
    }
}
