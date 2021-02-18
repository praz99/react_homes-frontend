const INITIAL_STATE = {
  login: {
    isLoading: false,
    errors: [],
  },

  signup: {
    isLoading: false,
    errors: [],
  },

  data: {
    houses: [],
    isLoading: false,
    isError: false,
  },

  details: {
    houses: [],
    isLoading: false,
    isError: false,
  },

  current_user: {
    isLoading: '',
    user: '',
    appointments: '',
    isError: false,
  },
};

export default INITIAL_STATE;
