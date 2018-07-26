import { EMAIL_HANDLER } from "../actions/types";

const INITIAL_STATE = {
  emails: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_HANDLER:
      return { ...state, emails: [...state.emails, action.payload] };
    default: 
      return state;
  }
}