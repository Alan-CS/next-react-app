// ALAN: This const/type pattern allows us to use TypeScript's string literal types in an easily accessible and refactorable way.
// https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/tutorials/React.md#adding-actions

export const CHANGED_SELECTION = 'CHANGED_SELECTION';
export type CHANGED_SELECTION = typeof CHANGED_SELECTION;

export const EDITED_MESSAGE = 'EDITED_MESSAGE';
export type EDITED_MESSAGE = typeof EDITED_MESSAGE;

export const SENT_MESSAGE = 'SENT_MESSAGE';
export type SENT_MESSAGE = typeof SENT_MESSAGE;

// Next, we'll create a set of actions and functions that can create these actions

export interface ChangeSelectionAction {
    type: CHANGED_SELECTION;
    contactId: number;
}

export interface EditMessageAction {
    type: EDITED_MESSAGE;
    message: string;
}

export interface SendMessageAction {
    type: SENT_MESSAGE;
}

export type Action = ChangeSelectionAction | EditMessageAction | SendMessageAction;