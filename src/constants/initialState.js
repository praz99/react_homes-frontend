const INITIAL_STATE = {
  auth: {
    isLoading: false,
    errors: {
      signupErrors: [],
      loginErrors: [],
    },
  },

  data: {
    house: {
      list: [],
      details: [],
    },
    isLoading: false,
    isError: false,
  },

  current_user: {
    isLoading: false,
    user: [],
    appointments: [],
    isError: false,
  },
};

export default INITIAL_STATE;
