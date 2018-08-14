import { EMAIL_HANDLER, FETCH_SURVEYS } from "../actions/types";

const INITIAL_STATE = {
  emails: [],
  surveyRecords: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_HANDLER:
      return { ...state, emails: [...state.emails, action.payload] };
    case FETCH_SURVEYS:
      return { ...state, surveyRecords: action.payload  };
    default: 
      return state;
  }
}