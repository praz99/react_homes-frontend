const INITIAL_STATE = {
  auth: {
    isLoading: false,
    errors: {
      signupErrors: [],
      loginErrors: [],
    },
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
    isLoading: false,
    user: [],
    appointments: [],
    isError: false,
  },
};

export default INITIAL_STATE;
